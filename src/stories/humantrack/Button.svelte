<script lang="ts">
	type Variant = 'primary' | 'secondary' | 'ghost';

	let {
		label,
		variant = 'primary',
		icon = '',
		disabled = false
	}: {
		label: string;
		variant?: Variant;
		icon?: string;
		disabled?: boolean;
	} = $props();

	const variantClasses: Record<Variant, string> = {
		primary:
			'border border-[#7375fc] bg-linear-to-b from-[#6868ee] to-[#5451cf] text-[#fafafa] shadow-[0_1px_2px_rgba(0,0,0,0.08)]',
		secondary:
			'border border-[#5451cf] bg-transparent text-[#5451cf] shadow-[0_1px_2px_rgba(0,0,0,0.05)]',
		ghost: 'border border-zinc-200 bg-white text-zinc-500 shadow-[0_1px_2px_rgba(0,0,0,0.05)]'
	};
</script>

<button
	class={`inline-flex h-9 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-55 ${variantClasses[variant]}`}
	type="button"
	{disabled}
>
	{#if icon}
		<span aria-hidden="true">{icon}</span>
	{/if}
	<span>{label}</span>
</button>
