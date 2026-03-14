<script lang="ts">
	let {
		label,
		options = [],
		value = '',
		hint = ''
	}: {
		label: string;
		options?: string[];
		value?: string;
		hint?: string;
	} = $props();
</script>

<label class="ht-field">
	<span class="ht-field__label">{label}</span>
	<select class="ht-select" {value}>
		{#each options as option}
			<option selected={option === value} value={option}>{option}</option>
		{/each}
	</select>
	{#if hint}
		<span class="ht-field__hint">{hint}</span>
	{/if}
</label>

<style>
	@import './humantrack.css';
</style>
