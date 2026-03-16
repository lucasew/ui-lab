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

	const variants = {
		default: 'bg-[#171717] text-white hover:bg-[#404040]',
		secondary: 'bg-[#f5f5f5] text-[#171717] hover:bg-[#e5e5e5]',
		destructive: 'bg-[#e7000b] text-white hover:bg-[#cc000a]',
		outline: 'border border-[#e5e5e5] bg-transparent text-[#171717] hover:bg-[#f5f5f5]',
		ghost: 'bg-transparent text-[#171717] hover:bg-[#f5f5f5]'
	};

	const sizes = {
		default: 'px-4 py-2 text-sm gap-1.5',
		large: 'px-6 py-2 text-sm gap-2'
	};
</script>

<button
	class="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 {variants[
		variant
	]} {sizes[size]} {className}"
	{disabled}
>
	{#if icon}
		<span class="icon">{icon}</span>
	{/if}
	{#if children}
		{@render children()}
	{:else}
		{label}
	{/if}
</button>
