<script lang="ts">
	interface Props {
		icon?: string;
		variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost';
		size?: 'default' | 'large';
		disabled?: boolean;
		class?: string;
	}

	let {
		icon = 'plus',
		variant = 'default',
		size = 'default',
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
		default: 'h-10 w-10',
		large: 'h-12 w-12'
	};
</script>

<button
	class="inline-flex items-center justify-center rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 {variants[
		variant
	]} {sizes[size]} {className}"
	{disabled}
>
	<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d={icon === 'plus' ? 'M12 4v16m8-8H4' : icon}
		/>
	</svg>
</button>
