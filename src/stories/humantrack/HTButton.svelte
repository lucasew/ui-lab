<script lang="ts">
	type Variant = 'primary' | 'secondary' | 'ghost';

	let {
		label,
		variant = 'primary',
		icon = '',
		disabled = false
	}: {
		label: string;
		variant?: Variant;
		icon?: string;
		disabled?: boolean;
	} = $props();
</script>

<button class={`ht-button ht-button--${variant}`} type="button" {disabled}>
	{#if icon}
		<span aria-hidden="true">{icon}</span>
	{/if}
	<span>{label}</span>
</button>

<style>
	@import './humantrack.css';
</style>
