<script lang="ts">
	let {
		label,
		placeholder = '',
		value = '',
		hint = '',
		prefix = ''
	}: {
		label: string;
		placeholder?: string;
		value?: string;
		hint?: string;
		prefix?: string;
	} = $props();
</script>

<label class="ht-field">
	<span class="ht-field__label">{label}</span>
	<div class={`ht-field__input-wrap ${prefix ? 'has-prefix' : ''}`}>
		{#if prefix}
			<span class="ht-field__prefix">{prefix}</span>
		{/if}
		<input class="ht-input" type="text" {placeholder} {value} />
	</div>
	{#if hint}
		<span class="ht-field__hint">{hint}</span>
	{/if}
</label>

<style>
	@import './humantrack.css';
</style>
