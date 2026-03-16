<script lang="ts">
	interface TableColumn {
		key: string;
		label: string;
	}

	interface Props {
		columns?: TableColumn[];
		data?: Record<string, unknown>[];
		class?: string;
	}

	let { columns = [], data = [], class: className = '' }: Props = $props();
</script>

<div class="w-full overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] {className}">
	<table class="w-full">
		<thead class="border-b border-[var(--border)] bg-[var(--secondary)]">
			<tr>
				{#each columns as column}
					<th class="px-4 py-3 text-left text-sm font-medium text-[var(--card-foreground)]">
						{column.label}
					</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each data as row, i}
				<tr
					class="border-b border-[var(--border)] {i % 2 === 0
						? 'bg-[var(--card)]'
						: 'bg-[var(--secondary)]'}"
				>
					{#each columns as column}
						<td class="px-4 py-3 text-sm text-[var(--foreground)]">
							{row[column.key]}
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
