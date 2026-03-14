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
	<span class="text-[0.84rem] font-bold text-slate-700">{label}</span>
	<div class={`relative ${prefix ? 'has-prefix' : ''}`}>
		{#if prefix}
			<span class="absolute top-1/2 left-3.5 -translate-y-1/2 text-sm text-slate-400">{prefix}</span>
		{/if}
		<input
			class={`w-full rounded-2xl border border-slate-200 bg-slate-50 px-3.5 py-3 font-inherit text-slate-900 transition duration-150 placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100 ${prefix ? 'pl-10' : ''}`}
			type="text"
			{placeholder}
			{value}
		/>
	</div>
	{#if hint}
		<span class="text-xs text-slate-500">{hint}</span>
	{/if}
</label>
