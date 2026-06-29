<script lang="ts">
	import Field from './Field.svelte';

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

<Field {label} {hint}>
	<select
		class="h-9 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-[#292965] shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition focus:border-[#7375fc] focus:ring-2 focus:ring-[#e9ebf8] focus:outline-none"
		{value}
	>
		{#each options as option (option)}
			<option selected={option === value} value={option}>{option}</option>
		{/each}
	</select>
</Field>
