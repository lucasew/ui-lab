<script lang="ts">
	import HTButton from './HTButton.svelte';

	let {
		title,
		description,
		actionLabel = 'Gerar com IA'
	}: {
		title: string;
		description: string;
		actionLabel?: string;
	} = $props();
</script>

<div class="ht-banner">
	<div class="ht-banner__icon" aria-hidden="true">AI</div>
	<div class="ht-banner__copy">
		<div class="ht-banner__title">{title}</div>
		<div class="ht-banner__text">{description}</div>
	</div>
	<HTButton label={actionLabel} variant="secondary" icon="+" />
</div>

<style>
	@import './humantrack.css';
</style>
