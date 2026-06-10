<script lang="ts">
	interface Props {
		label?: string;
		variant?: 'default' | 'neutral' | 'success' | 'warning' | 'danger' | 'outline';
		class?: string;
	}

	let { label = 'Badge', variant = 'default', class: className = '' }: Props = $props();

	const variantClasses: Record<string, string> = {
		default: 'bg-[var(--primary)] text-[var(--primary-foreground)]',
		neutral: 'bg-[var(--accent)] text-[var(--accent-foreground)]',
		success: 'bg-[color:rgba(34,197,94,0.18)] text-[#86efac]',
		warning: 'bg-[color:rgba(245,158,11,0.18)] text-[#fcd34d]',
		danger: 'bg-[color:rgba(239,68,68,0.18)] text-[#fca5a5]',
		outline: 'border border-[var(--input)] text-[var(--card-foreground)]'
	};
</script>

<span
	class={`inline-flex items-center justify-center rounded-full text-xs font-semibold px-2 py-0.5 ${variantClasses[variant] || ''} ${className}`}
>
	{label}
</span>
