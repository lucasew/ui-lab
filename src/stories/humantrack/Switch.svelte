<script lang="ts">
	let {
		label,
		checked = false
	}: {
		label: string;
		checked?: boolean;
	} = $props();
</script>

<div class="inline-flex items-center gap-3">
	<div
		class={`relative h-7 w-12 rounded-full transition duration-150 ${checked ? 'bg-linear-to-br from-indigo-500 to-sky-400' : 'bg-slate-300'}`}
		aria-hidden="true"
	>
		<div
			class={`absolute top-[3px] h-[22px] w-[22px] rounded-full bg-white shadow-[0_4px_10px_rgba(15,24,45,0.18)] transition duration-150 ${checked ? 'translate-x-[22px]' : 'translate-x-1'}`}
		></div>
	</div>
	<span class="text-[0.84rem] font-bold text-slate-700">{label}</span>
</div>
