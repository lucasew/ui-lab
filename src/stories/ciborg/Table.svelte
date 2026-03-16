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

<div class="w-full overflow-hidden rounded-lg border border-[#e5e5e5] {className}">
	<table class="w-full">
		<thead class="border-b border-[#e5e5e5] bg-[#f5f5f5]">
			<tr>
				{#each columns as column}
					<th class="px-4 py-3 text-left text-sm font-medium text-[#171717]">
						{column.label}
					</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each data as row, i}
				<tr class="border-b border-[#e5e5e5] {i % 2 === 0 ? 'bg-white' : 'bg-[#fafafa]'}">
					{#each columns as column}
						<td class="px-4 py-3 text-sm text-[#0a0a0a]">
							{row[column.key]}
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
