<script lang="ts">
	import HTBadge from './HTBadge.svelte';

	let {
		eyebrow = 'Etapa',
		title,
		description,
		status = ''
	}: {
		eyebrow?: string;
		title: string;
		description: string;
		status?: string;
	} = $props();
</script>

<section class="ht-card">
	<header class="ht-card__header">
		<div class="ht-kicker">
			<span class="ht-card__eyebrow">{eyebrow}</span>
			{#if status}
				<HTBadge label={status} tone="primary" />
			{/if}
		</div>
		<h3 class="ht-card__title">{title}</h3>
		<p class="ht-card__description">{description}</p>
	</header>
	<slot />
</section>

<style>
	@import './humantrack.css';
</style>
