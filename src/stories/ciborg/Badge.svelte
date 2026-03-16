<script lang="ts">
	interface Props {
		label?: string;
		variant?: 'default' | 'secondary' | 'destructive' | 'outline';
		size?: 'default' | 'sm' | 'lg';
		class?: string;
	}

	let {
		label = 'Badge',
		variant = 'default',
		size = 'default',
		class: className = ''
	}: Props = $props();

	const variants = {
		default: 'bg-[#171717] text-white',
		secondary: 'bg-[#f5f5f5] text-[#171717]',
		destructive: 'bg-[#e7000b] text-white',
		outline: 'border border-[#e5e5e5] text-[#0a0a0a]'
	};

	const sizes = {
		default: 'px-2 py-0.5 text-xs',
		sm: 'px-1.5 py-0.5 text-[10px]',
		lg: 'px-3 py-1 text-sm'
	};
</script>

<span
	class="inline-flex items-center justify-center rounded-full font-semibold {variants[
		variant
	]} {sizes[size]} {className}"
>
	{label}
</span>
