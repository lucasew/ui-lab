<script lang="ts">
	import type { Snippet } from 'svelte';
	import Sidebar from './Sidebar.svelte';
	import { Button } from '$lib/shadcn/ui/button';

	interface SidebarItem {
		label: string;
		icon?: string;
		shortcut?: string;
		active?: boolean;
	}

	interface Props {
		sidebarItems?: SidebarItem[];
		activeNav?: string;
		user?: { name: string; avatar?: string };
		children?: Snippet;
		fab?: boolean;
		mainWidth?: string;
		class?: string;
	}

	let {
		sidebarItems = [],
		activeNav = 'Overview',
		user,
		children,
		fab = false,
		mainWidth = 'full',
		class: className = ''
	}: Props = $props();
</script>

<div
	class="border-border bg-background relative flex h-[980px] w-[1280px] overflow-hidden rounded-xl border {className}"
>
	<Sidebar {user} items={sidebarItems} />
	<main
		class="flex flex-1 flex-col gap-6 p-6"
		style="width: {mainWidth === '1024' ? '1024px' : '100%'};"
	>
		{@render children?.()}
	</main>
	{#if fab}
		<Button
			size="icon"
			class="absolute h-14 w-14 rounded-[28px] shadow-lg"
			style="right: 0; top: 0; margin: 16px;"
		>
			<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
			</svg>
		</Button>
	{/if}
</div>
