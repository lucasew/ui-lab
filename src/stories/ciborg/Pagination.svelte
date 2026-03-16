<script lang="ts">
	interface Props {
		page?: number;
		total?: number;
		class?: string;
	}

	let { page = $bindable(1), total = 10, class: className = '' }: Props = $props();
</script>

<div class="flex items-center gap-1 {className}">
	<button
		class="rounded-md px-3 py-1.5 text-sm text-[var(--ciborg-text-soft)] hover:bg-[var(--ciborg-panel-muted)] disabled:opacity-50"
		disabled={page <= 1}
		onclick={() => page--}
	>
		Prev
	</button>
	{#each Array(Math.min(total, 5)) as _, i}
		<button
			class="rounded-md px-3 py-1.5 text-sm {i + 1 === page
				? 'bg-[var(--ciborg-primary)] text-[var(--ciborg-text)]'
				: 'text-[var(--ciborg-text-soft)] hover:bg-[var(--ciborg-panel-muted)]'}"
			onclick={() => (page = i + 1)}
		>
			{i + 1}
		</button>
	{/each}
	<button
		class="rounded-md px-3 py-1.5 text-sm text-[var(--ciborg-text-soft)] hover:bg-[var(--ciborg-panel-muted)] disabled:opacity-50"
		disabled={page >= total}
		onclick={() => page++}
	>
		Next
	</button>
</div>
