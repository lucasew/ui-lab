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
			'bg-linear-to-br from-indigo-500 to-indigo-400 text-white shadow-[0_12px_20px_rgba(91,108,255,0.24)]',
		secondary: 'bg-indigo-50 text-indigo-600',
		ghost: 'border border-slate-200 bg-white/40 text-slate-500'
	};
</script>

<button
	class={`inline-flex min-h-10 items-center justify-center gap-2 rounded-[14px] px-4 font-extrabold transition duration-150 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-55 ${variantClasses[variant]}`}
	type="button"
	{disabled}
>
	{#if icon}
		<span aria-hidden="true">{icon}</span>
	{/if}
	<span>{label}</span>
</button>
