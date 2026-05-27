<script lang="ts">
	import './ciborg.css';

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
	class="flex h-full w-64 flex-col overflow-y-auto border-r border-[var(--border)] bg-[var(--sidebar)] p-3 {className}"
>
	<div class="flex items-center justify-between rounded-md px-2 py-2">
		<div class="flex items-center gap-2">
			<div class="h-8 w-8 rounded-lg bg-[var(--sidebar-accent)]"></div>
			<span class="font-medium text-[var(--sidebar-foreground)]">{logo}</span>
		</div>
		<svg
			class="h-4 w-4 text-[var(--muted-foreground)]"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M8 9l4-4 4 4m0 6l-4 4-4-4"
			/>
		</svg>
	</div>

	<nav class="flex flex-1 flex-col gap-0.5">
		{#each items as item (item.label)}
			<button
				class="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm {item.active
					? 'bg-[var(--sidebar-accent)] text-[var(--sidebar-accent-foreground)]'
					: 'text-[var(--sidebar-foreground)] hover:bg-[var(--sidebar-accent)] hover:text-[var(--sidebar-accent-foreground)]'}"
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
					<span class="text-xs text-[var(--muted-foreground)]">{item.shortcut}</span>
				{/if}
			</button>
		{/each}
	</nav>

	{#if user}
		<div class="flex items-center justify-between rounded-md px-2 py-2">
			<div class="flex items-center gap-2">
				<div class="h-10 w-10 rounded-full bg-[var(--sidebar-accent)]"></div>
				<span class="font-medium text-[var(--sidebar-foreground)]">{user.name}</span>
			</div>
			<svg
				class="h-4 w-4 text-[var(--muted-foreground)]"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
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
