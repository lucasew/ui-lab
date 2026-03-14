<script lang="ts">
	import HTBadge from './HTBadge.svelte';
	import HTButton from './HTButton.svelte';

	let {
		title = 'humantrack',
		subtitle = 'Goal Attainment Scaling',
		breadcrumbs = ['Pacientes', 'Plano terapêutico', 'Nova GAS']
	}: {
		title?: string;
		subtitle?: string;
		breadcrumbs?: string[];
	} = $props();
</script>

<header class="ht-header ht-panel">
	<div class="ht-header__brand">
		<div class="ht-logo">HT</div>
		<div class="ht-header__brand-copy">
			<div class="ht-header__title">{title}</div>
			<div class="ht-header__subtitle">{subtitle}</div>
		</div>
	</div>

	<nav class="ht-header__breadcrumbs">
		<div class="ht-breadcrumbs">
			{#each breadcrumbs as breadcrumb, index}
				<span>{breadcrumb}</span>
				{#if index < breadcrumbs.length - 1}
					<span aria-hidden="true">/</span>
				{/if}
			{/each}
		</div>
		<HTBadge label="Rascunho" tone="warning" />
	</nav>

	<div class="ht-header__actions">
		<HTButton label="Salvar" variant="ghost" />
		<HTButton label="Publicar" icon="+" />
	</div>
</header>

<style>
	@import './humantrack.css';
</style>
