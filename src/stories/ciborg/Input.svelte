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
		<span class="text-sm font-medium text-[var(--card-foreground)]">{label}</span>
	{/if}
	<input
		{type}
		{placeholder}
		{disabled}
		bind:value
		class="w-full rounded-md border border-[var(--border)] bg-[var(--card)] px-3 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:ring-2 focus:ring-[var(--ring)] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 {variant ===
		'subtle'
			? 'bg-[var(--secondary)]'
			: ''}"
	/>
</div>
