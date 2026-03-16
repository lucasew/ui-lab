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
		class="rounded-md px-3 py-1.5 text-sm hover:bg-[#f5f5f5] disabled:opacity-50"
		disabled={page <= 1}
		onclick={() => page--}
	>
		Prev
	</button>
	{#each Array(Math.min(total, 5)) as _, i}
		<button
			class="rounded-md px-3 py-1.5 text-sm {i + 1 === page
				? 'bg-[#171717] text-white'
				: 'hover:bg-[#f5f5f5]'}"
			onclick={() => (page = i + 1)}
		>
			{i + 1}
		</button>
	{/each}
	<button
		class="rounded-md px-3 py-1.5 text-sm hover:bg-[#f5f5f5] disabled:opacity-50"
		disabled={page >= total}
		onclick={() => page++}
	>
		Next
	</button>
</div>
