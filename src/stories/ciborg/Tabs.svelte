<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		tabs?: { label: string; active?: boolean }[];
		class?: string;
	}

	let { tabs = [], class: className = '' }: Props = $props();
</script>

<div class="flex items-center gap-1 rounded-lg bg-[#f5f5f5] p-1 {className}">
	{#each tabs as tab}
		<button
			class="rounded-md px-3 py-1.5 text-sm font-medium transition-colors {tab.active
				? 'bg-white text-[#171717] shadow-sm'
				: 'text-[#737373] hover:text-[#171717]'}"
		>
			{tab.label}
		</button>
	{/each}
</div>
