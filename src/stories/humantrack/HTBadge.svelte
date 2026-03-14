<script lang="ts">
	type Tone = 'primary' | 'success' | 'warning' | 'danger' | 'neutral';

	let {
		label,
		tone = 'neutral'
	}: {
		label: string;
		tone?: Tone;
	} = $props();
</script>

<span class={`ht-badge ht-badge--${tone}`}>{label}</span>

<style>
	@import './humantrack.css';
</style>
