<script lang="ts">
	import Badge from './Badge.svelte';
	import Switch from './Switch.svelte';

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

<div
	class="grid gap-3 rounded-[18px] border border-slate-200 bg-slate-50 p-3.5 md:grid-cols-[92px_minmax(0,1fr)_auto] md:items-center"
>
	<div class="font-extrabold text-slate-900">{day}</div>
	<div class="text-sm text-slate-500">Disparo automático às {time} para coleta da submissão.</div>
	<div class="flex items-center gap-3 md:justify-end">
		<Badge label={time} tone="success" />
		<Switch label="Ativo" {checked} />
	</div>
</div>
