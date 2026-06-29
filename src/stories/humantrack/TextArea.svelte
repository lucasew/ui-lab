<script lang="ts">
	import Field from './Field.svelte';

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

<Field {label} {hint}>
	<textarea
		class="min-h-32 w-full resize-y rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm leading-5 text-[#292965] shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition placeholder:text-zinc-500 focus:border-[#7375fc] focus:ring-2 focus:ring-[#e9ebf8] focus:outline-none"
		{placeholder}
		{value}
	></textarea>
</Field>
