<script lang="ts">
	import HTBadge from './HTBadge.svelte';
	import HTSwitch from './HTSwitch.svelte';

	let {
		day,
		time,
		checked = true
	}: {
		day: string;
		time: string;
		checked?: boolean;
	} = $props();
</script>

<div class="ht-reminder">
	<div class="ht-reminder__day">{day}</div>
	<div class="ht-reminder__copy">Disparo automático às {time} para coleta da submissão.</div>
	<div style="display: flex; align-items: center; gap: 12px; justify-content: flex-end">
		<HTBadge label={time} tone="success" />
		<HTSwitch label="Ativo" {checked} />
	</div>
</div>

<style>
	@import './humantrack.css';
</style>
