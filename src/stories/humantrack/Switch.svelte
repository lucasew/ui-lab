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
		class={`flex h-5 w-9 items-center rounded-full border-2 border-transparent px-0.5 transition-colors ${checked ? 'justify-end bg-[#6868ee]' : 'justify-start bg-zinc-300'}`}
		aria-hidden="true"
	>
		<div class="h-4 w-4 rounded-full bg-white shadow-[0_4px_10px_rgba(0,0,0,0.14)]"></div>
	</div>
	<span class="text-sm font-medium text-[#292965]">{label}</span>
</div>
