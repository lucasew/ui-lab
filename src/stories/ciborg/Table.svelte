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

<div class="w-full overflow-hidden rounded-xl border border-[var(--ciborg-border)] bg-[var(--ciborg-panel)] {className}">
	<table class="w-full">
		<thead class="border-b border-[var(--ciborg-border)] bg-[var(--ciborg-panel-strong)]">
			<tr>
				{#each columns as column}
					<th class="px-4 py-3 text-left text-sm font-medium text-[var(--ciborg-text-soft)]">
						{column.label}
					</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each data as row, i}
				<tr
					class="border-b border-[var(--ciborg-border)] {i % 2 === 0
						? 'bg-[var(--ciborg-panel)]'
						: 'bg-[var(--ciborg-panel-strong)]'}"
				>
					{#each columns as column}
						<td class="px-4 py-3 text-sm text-[var(--ciborg-text)]">
							{row[column.key]}
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
