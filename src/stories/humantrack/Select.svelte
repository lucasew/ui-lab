<script lang="ts">
	let {
		label,
		options = [],
		value = '',
		hint = ''
	}: {
		label: string;
		options?: string[];
		value?: string;
		hint?: string;
	} = $props();
</script>

<label class="flex flex-col gap-2">
	<span class="text-[0.84rem] font-bold text-slate-700">{label}</span>
	<select
		class="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3.5 py-3 font-inherit text-slate-900 transition duration-150 focus:border-indigo-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100"
		{value}
	>
		{#each options as option}
			<option selected={option === value} value={option}>{option}</option>
		{/each}
	</select>
	{#if hint}
		<span class="text-xs text-slate-500">{hint}</span>
	{/if}
</label>
