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
			'border border-[var(--ciborg-primary)] bg-[var(--ciborg-primary)] text-[var(--ciborg-text)] hover:border-[var(--ciborg-primary-hover)] hover:bg-[var(--ciborg-primary-hover)]',
		outline:
			'border border-[var(--ciborg-border-strong)] bg-transparent text-[var(--ciborg-text)] hover:bg-[var(--ciborg-panel-muted)]',
		ghost:
			'border border-transparent bg-transparent text-[var(--ciborg-text-soft)] hover:bg-[var(--ciborg-panel-muted)] hover:text-[var(--ciborg-text)]'
	};

	const sizes = {
		default: 'h-10 w-10',
		large: 'h-12 w-12'
	};
</script>

<button
	aria-label={ariaLabel}
	class="inline-flex items-center justify-center rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-[var(--ciborg-primary)] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 {variants[
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
