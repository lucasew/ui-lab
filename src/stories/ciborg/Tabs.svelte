<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		tabs?: { label: string; active?: boolean }[];
		class?: string;
	}

	let { tabs = [], class: className = '' }: Props = $props();
</script>

<div class="inline-flex items-center gap-1 rounded-lg border border-[var(--ciborg-border)] bg-[var(--ciborg-panel)] p-1 {className}">
	{#each tabs as tab}
		<button
			class="rounded-md px-3 py-1.5 text-sm font-medium transition-colors {tab.active
				? 'bg-[var(--ciborg-panel-muted)] text-[var(--ciborg-text)]'
				: 'text-[var(--ciborg-text-muted)] hover:text-[var(--ciborg-text)]'}"
		>
			{tab.label}
		</button>
	{/each}
</div>
