<script lang="ts">
	import Badge from './Badge.svelte';
	import Input from './Input.svelte';
	import SectionCard from './SectionCard.svelte';

	type GoalRow = {
		label: string;
		description: string;
		tone: 'primary' | 'success' | 'warning' | 'danger' | 'neutral';
		baseline: string;
		target: string;
	};

	let {
		rows = []
	}: {
		rows?: GoalRow[];
	} = $props();
</script>

<SectionCard
	eyebrow="Metas"
	title="Metas"
	description="Crie metas com escala completa (-2 a +2). Quanto mais específico for o texto de cada nível, mais fácil será interpretar a evolução."
>
	<div class="flex flex-col gap-8 pt-4">
		{#each rows as row}
			<div class="flex flex-col gap-4 border-t border-zinc-200 pt-4 first:border-t-0 first:pt-0">
				<div class="flex items-center justify-between gap-4">
					<div class="text-sm font-semibold text-[#292965]">{row.description}</div>
					<Badge label={row.label} tone={row.tone} />
				</div>
				<div class="grid gap-4 md:grid-cols-[36px_minmax(0,1fr)]">
					<div class="grid h-9 w-9 place-items-center rounded-[2px] border border-[#7375fc]/30 bg-[#e9ebf8] text-sm font-semibold text-[#5451cf]">
						0
					</div>
					<Input label="Descreva a linha base" value={row.baseline} />
				</div>
				<div class="grid gap-4 md:grid-cols-[36px_minmax(0,1fr)]">
					<div class="grid h-9 w-9 place-items-center rounded-[2px] border border-[#7375fc]/30 bg-[#e9ebf8] text-sm font-semibold text-[#5451cf]">
						+1
					</div>
					<Input label="Descreva a meta" value={row.target} />
				</div>
			</div>
		{/each}
	</div>
</SectionCard>
