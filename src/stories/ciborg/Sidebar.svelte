<script lang="ts">
	import type { Snippet } from 'svelte';

	interface SidebarItem {
		label: string;
		icon?: string;
		shortcut?: string;
		active?: boolean;
	}

	interface Props {
		items?: SidebarItem[];
		logo?: string;
		user?: { name: string; avatar?: string };
		class?: string;
	}

	let { items = [], logo = 'Ciborg', user, class: className = '' }: Props = $props();
</script>

<aside
	class="flex h-full w-64 flex-col rounded-lg border-r border-[#e4e4e7] bg-[#fafafa] p-2 {className}"
>
	<div class="flex items-center justify-between rounded-md px-2 py-2">
		<div class="flex items-center gap-2">
			<div class="h-8 w-8 rounded-lg bg-[#f4f4f5]"></div>
			<span class="font-medium text-[#09090b]">{logo}</span>
		</div>
		<svg class="h-4 w-4 text-[#737373]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M8 9l4-4 4 4m0 6l-4 4-4-4"
			/>
		</svg>
	</div>

	<nav class="flex flex-1 flex-col gap-0.5">
		{#each items as item}
			<button
				class="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm {item.active
					? 'bg-[#f4f4f5] text-[#09090b]'
					: 'text-[#09090b] hover:bg-[#f4f4f5]'}"
			>
				<div class="flex items-center gap-2">
					{#if item.icon}
						<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={item.icon} />
						</svg>
					{/if}
					<span>{item.label}</span>
				</div>
				{#if item.shortcut}
					<span class="text-xs text-[#737373]">{item.shortcut}</span>
				{/if}
			</button>
		{/each}
	</nav>

	{#if user}
		<div class="flex items-center justify-between rounded-md px-2 py-2">
			<div class="flex items-center gap-2">
				<div class="h-10 w-10 rounded-full bg-[#f4f4f5]"></div>
				<span class="font-medium text-[#09090b]">{user.name}</span>
			</div>
			<svg class="h-4 w-4 text-[#737373]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M8 9l4-4 4 4m0 6l-4 4-4-4"
				/>
			</svg>
		</div>
	{/if}
</aside>
