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

<label class="flex flex-col gap-2">
	<span class="text-sm leading-4 font-medium text-[#292965]">{label}</span>
	<div class={`relative ${prefix ? 'has-prefix' : ''}`}>
		{#if prefix}
			<span class="absolute top-1/2 left-3 -translate-y-1/2 text-sm text-zinc-500">{prefix}</span>
		{/if}
		<input
			class={`h-9 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-[#292965] shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition placeholder:text-zinc-500 focus:border-[#7375fc] focus:ring-2 focus:ring-[#e9ebf8] focus:outline-none ${prefix ? 'pl-9' : ''}`}
			type="text"
			{placeholder}
			{value}
		/>
	</div>
	{#if hint}
		<span class="text-xs leading-4 text-zinc-500">{hint}</span>
	{/if}
</label>
