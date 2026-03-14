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

<label class="flex flex-col gap-2">
	<span class="text-sm font-medium leading-4 text-[#292965]">{label}</span>
	<textarea
		class="min-h-32 w-full resize-y rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm leading-5 text-[#292965] shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition placeholder:text-zinc-500 focus:border-[#7375fc] focus:outline-none focus:ring-2 focus:ring-[#e9ebf8]"
		{placeholder}
		value={value}
	></textarea>
	{#if hint}
		<span class="text-xs leading-4 text-zinc-500">{hint}</span>
	{/if}
</label>
