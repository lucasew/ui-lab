<script lang="ts">
	interface Props {
		icon?: string;
		variant?: 'default' | 'outline' | 'ghost';
		size?: 'default' | 'large';
		ariaLabel?: string;
		disabled?: boolean;
		class?: string;
	}

	let {
		icon = 'plus',
		variant = 'default',
		size = 'default',
		ariaLabel = 'Icon button',
		disabled = false,
		class: className = ''
	}: Props = $props();

	const variants = {
		default:
			'border border-[var(--primary)] bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90',
		outline:
			'border border-[var(--input)] bg-transparent text-[var(--foreground)] hover:bg-[var(--accent)]',
		ghost:
			'border border-transparent bg-transparent text-[var(--card-foreground)] hover:bg-[var(--accent)] hover:text-[var(--foreground)]'
	};

	const sizes = {
		default: 'h-10 w-10',
		large: 'h-12 w-12'
	};
</script>

<button
	aria-label={ariaLabel}
	class="inline-flex items-center justify-center rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 {variants[
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
