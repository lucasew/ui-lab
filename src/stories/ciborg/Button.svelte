<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost';
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
		? 'bg-[#171717] text-[#fafafa] hover:bg-[#404040]'
		: ''} {variant === 'secondary'
		? 'bg-[#f5f5f5] text-[#171717] hover:bg-[#e5e5e5]'
		: ''} {variant === 'destructive'
		? 'bg-[#e7000b] text-white hover:bg-[#cc000a]'
		: ''} {variant === 'outline'
		? 'border border-[#e5e5e5] bg-transparent text-[#171717] hover:bg-[#f5f5f5]'
		: ''} {variant === 'ghost' ? 'bg-transparent text-[#171717] hover:bg-[#f5f5f5]' : ''} {size ===
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
