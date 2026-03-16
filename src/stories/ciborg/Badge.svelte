<script lang="ts">
	interface Props {
		label?: string;
		variant?: 'default' | 'secondary' | 'destructive' | 'outline';
		class?: string;
	}

	let { label = 'Badge', variant = 'default', class: className = '' }: Props = $props();
</script>

<span
	class="inline-flex items-center justify-center rounded-full text-xs font-semibold {variant ===
	'default'
		? 'bg-[#171717] text-[#fafafa]'
		: ''} {variant === 'secondary' ? 'bg-[#f5f5f5] text-[#171717]' : ''} {variant === 'destructive'
		? 'bg-[#e7000b] text-white'
		: ''} {variant === 'outline'
		? 'border border-[#e5e5e5] text-[#0a0a0a]'
		: ''} px-2 py-0.5 {className}"
>
	{label}
</span>
