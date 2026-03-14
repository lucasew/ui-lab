<script lang="ts">
	let {
		label,
		checked = false
	}: {
		label: string;
		checked?: boolean;
	} = $props();
</script>

<div class={`ht-switch ${checked ? 'is-on' : ''}`}>
	<div class="ht-switch__track" aria-hidden="true"></div>
	<span class="ht-field__label">{label}</span>
</div>

<style>
	@import './humantrack.css';
</style>
