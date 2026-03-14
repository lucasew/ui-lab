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
	title="Escala GAS"
	description="Defina os níveis de desempenho esperados e os marcos que serão usados na avaliação."
	status="3 cenários"
>
	<div class="grid gap-3">
		{#each rows as row}
			<div
				class="grid gap-3 rounded-[18px] border border-slate-200 bg-slate-50 p-3.5 md:grid-cols-[auto_minmax(0,1fr)_96px_96px] md:items-center"
			>
				<Badge label={row.label} tone={row.tone} />
				<div class="flex flex-col gap-1">
					<div class="font-bold text-slate-900">{row.description}</div>
					<div class="text-xs text-slate-500">Ajuste o valor base e a meta para essa condição.</div>
				</div>
				<Input label="Base" value={row.baseline} />
				<Input label="Meta" value={row.target} />
			</div>
		{/each}
	</div>
</SectionCard>
