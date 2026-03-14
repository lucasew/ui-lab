<script lang="ts">
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
	class="grid gap-4 md:grid-cols-[minmax(0,1fr)_120px] md:items-end"
>
	<Switch label={day} {checked} />
	<div class="max-w-[120px]">
		<div class="flex flex-col gap-2">
			<span class="text-sm font-medium leading-4 text-[#292965]">Horário</span>
			<input
				class="h-9 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-[#292965] shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
				type="text"
				value={time}
			/>
		</div>
	</div>
</div>
