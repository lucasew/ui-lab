<script lang="ts">
	import type { Snippet } from 'svelte';
	import Sidebar from './Sidebar.svelte';
	import IconButton from './IconButton.svelte';

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
		class?: string;
	}

	let {
		sidebarItems = [],
		activeNav = 'Overview',
		user,
		children,
		fab = false,
		class: className = ''
	}: Props = $props();
</script>

<div
	class="border-border bg-background flex h-full w-full overflow-hidden rounded-xl border {className}"
>
	<Sidebar {user} items={sidebarItems} />
	<main class="flex flex-1 flex-col gap-6 p-6">
		{@render children?.()}
	</main>
	{#if fab}
		<IconButton icon="plus" class="fixed right-6 bottom-6" />
	{/if}
</div>
