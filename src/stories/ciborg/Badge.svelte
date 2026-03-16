<script lang="ts">
	interface Props {
		label?: string;
		variant?: 'default' | 'neutral' | 'success' | 'warning' | 'danger' | 'outline';
		class?: string;
	}

	let { label = 'Badge', variant = 'default', class: className = '' }: Props = $props();
</script>

<span
	class="inline-flex items-center justify-center rounded-full text-xs font-semibold {variant ===
	'default'
		? 'bg-[var(--ciborg-primary)] text-[var(--ciborg-text)]'
		: ''} {variant === 'neutral'
		? 'bg-[var(--ciborg-panel-muted)] text-[var(--ciborg-text-soft)]'
		: ''} {variant === 'success'
		? 'bg-[color:rgba(34,197,94,0.18)] text-[#86efac]'
		: ''} {variant === 'warning'
		? 'bg-[color:rgba(245,158,11,0.18)] text-[#fcd34d]'
		: ''} {variant === 'danger'
		? 'bg-[color:rgba(239,68,68,0.18)] text-[#fca5a5]'
		: ''} {variant === 'outline'
		? 'border border-[var(--ciborg-border-strong)] text-[var(--ciborg-text-soft)]'
		: ''} px-2 py-0.5 {className}"
>
	{label}
</span>
