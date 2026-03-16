<script lang="ts">
	interface Props {
		label?: string;
		placeholder?: string;
		value?: string;
		variant?: 'default' | 'filled';
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
		<span class="text-sm font-medium text-[#0a0a0a]">{label}</span>
	{/if}
	<input
		{type}
		{placeholder}
		{disabled}
		bind:value
		class="w-full rounded-md border border-[#e5e5e5] bg-white px-3 py-2 text-sm text-[#0a0a0a] placeholder:text-[#737373] focus:ring-2 focus:ring-[#171717] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 {variant ===
		'filled'
			? 'bg-[#f5f5f5]'
			: ''}"
	/>
</div>
