<script lang="ts">
	import HTBadge from './HTBadge.svelte';
	import HTInput from './HTInput.svelte';
	import HTSectionCard from './HTSectionCard.svelte';

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

<HTSectionCard
	eyebrow="Metas"
	title="Escala GAS"
	description="Defina os níveis de desempenho esperados e os marcos que serão usados na avaliação."
	status="3 cenários"
>
	<div class="ht-goal-scale">
		{#each rows as row}
			<div class="ht-goal-row">
				<HTBadge label={row.label} tone={row.tone} />
				<div class="ht-goal-row__copy">
					<div class="ht-goal-row__title">{row.description}</div>
					<div class="ht-goal-row__description">Ajuste o valor base e a meta para essa condição.</div>
				</div>
				<HTInput label="Base" value={row.baseline} />
				<HTInput label="Meta" value={row.target} />
			</div>
		{/each}
	</div>
</HTSectionCard>

<style>
	@import './humantrack.css';
</style>
