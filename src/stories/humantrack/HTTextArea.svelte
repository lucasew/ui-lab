<script lang="ts">
	let {
		label,
		placeholder = '',
		value = '',
		hint = ''
	}: {
		label: string;
		placeholder?: string;
		value?: string;
		hint?: string;
	} = $props();
</script>

<label class="ht-field">
	<span class="ht-field__label">{label}</span>
	<textarea class="ht-textarea" {placeholder} value={value}></textarea>
	{#if hint}
		<span class="ht-field__hint">{hint}</span>
	{/if}
</label>

<style>
	@import './humantrack.css';
</style>
