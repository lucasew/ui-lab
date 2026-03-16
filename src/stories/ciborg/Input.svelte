<script lang="ts">
	interface Props {
		label?: string;
		placeholder?: string;
		value?: string;
		variant?: 'default' | 'subtle';
		type?: string;
		disabled?: boolean;
		class?: string;
	}

	let {
		label,
		placeholder = 'Placeholder',
		value = $bindable(''),
		variant = 'default',
		type = 'text',
		disabled = false,
		class: className = ''
	}: Props = $props();
</script>

<div class="flex flex-col gap-1.5 {className}">
	{#if label}
		<span class="text-sm font-medium text-[var(--ciborg-text-soft)]">{label}</span>
	{/if}
	<input
		{type}
		{placeholder}
		{disabled}
		bind:value
		class="w-full rounded-md border border-[var(--ciborg-border)] bg-[var(--ciborg-panel)] px-3 py-2.5 text-sm text-[var(--ciborg-text)] placeholder:text-[var(--ciborg-text-muted)] focus:ring-2 focus:ring-[var(--ciborg-primary)] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 {variant ===
		'subtle'
			? 'bg-[var(--ciborg-panel-strong)]'
			: ''}"
	/>
</div>
