<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		variant?: 'default' | 'outline' | 'ghost' | 'danger';
		size?: 'default' | 'large';
		label?: string;
		icon?: string;
		children?: Snippet;
		disabled?: boolean;
		class?: string;
	}

	let {
		variant = 'default',
		size = 'default',
		label = 'Button',
		icon,
		children,
		disabled = false,
		class: className = ''
	}: Props = $props();
</script>

<button
	class="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 {variant ===
	'default'
		? 'border border-[var(--ciborg-primary)] bg-[var(--ciborg-primary)] text-[var(--ciborg-text)] hover:border-[var(--ciborg-primary-hover)] hover:bg-[var(--ciborg-primary-hover)]'
		: ''} {variant === 'outline'
		? 'border border-[var(--ciborg-border-strong)] bg-transparent text-[var(--ciborg-text)] hover:bg-[var(--ciborg-panel-muted)]'
		: ''} {variant === 'ghost'
		? 'border border-transparent bg-transparent text-[var(--ciborg-text-soft)] hover:bg-[var(--ciborg-panel-muted)] hover:text-[var(--ciborg-text)]'
		: ''} {variant === 'danger'
		? 'border border-[var(--ciborg-danger)] bg-[var(--ciborg-danger)] text-[var(--ciborg-text)] hover:opacity-90'
		: ''} {size ===
		'default'
		? 'gap-1.5 px-4 py-2 text-sm'
		: ''} {size === 'large' ? 'gap-2 px-6 py-2 text-sm' : ''} {className}"
	{disabled}
>
	{#if icon}
		<span class="flex items-center">
			<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
			</svg>
		</span>
	{/if}
	{#if children}
		{@render children()}
	{:else}
		{label}
	{/if}
</button>
