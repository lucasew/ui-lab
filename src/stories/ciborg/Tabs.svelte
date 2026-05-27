<script lang="ts">
	interface Props {
		tabs?: { label: string; active?: boolean }[];
		class?: string;
	}

	let { tabs = [], class: className = '' }: Props = $props();
</script>

<div
	class="inline-flex items-center gap-1 rounded-lg border border-[var(--border)] bg-[var(--card)] p-1 {className}"
>
	{#each tabs as tab (tab.label)}
		<button
			class="rounded-md px-3 py-1.5 text-sm font-medium transition-colors {tab.active
				? 'bg-[var(--accent)] text-[var(--foreground)]'
				: 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'}"
		>
			{tab.label}
		</button>
	{/each}
</div>
