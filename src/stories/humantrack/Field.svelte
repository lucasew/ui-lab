<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		label,
		hint = '',
		children
	}: {
		label: string;
		hint?: string;
		children: Snippet;
	} = $props();
</script>

<label class="flex flex-col gap-2">
	<span class="text-sm leading-4 font-medium text-[#292965]">{label}</span>
	{@render children()}
	{#if hint}
		<span class="text-xs leading-4 text-zinc-500">{hint}</span>
	{/if}
</label>
