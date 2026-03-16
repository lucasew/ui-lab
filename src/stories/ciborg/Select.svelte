<script lang="ts">
	interface Props {
		label?: string;
		value?: string;
		options?: string[];
		placeholder?: string;
		class?: string;
	}

	let {
		label,
		value = $bindable(''),
		options = [],
		placeholder = 'Select...',
		class: className = ''
	}: Props = $props();
</script>

<div class="flex flex-col gap-1.5 {className}">
	{#if label}
		<label class="text-sm font-medium text-[#0a0a0a]">{label}</label>
	{/if}
	<select
		bind:value
		class="w-full rounded-md border border-[#e5e5e5] bg-white px-3 py-2 text-sm text-[#0a0a0a] focus:ring-2 focus:ring-[#171717] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
	>
		{#if placeholder}
			<option value="" disabled>{placeholder}</option>
		{/if}
		{#each options as option}
			<option value={option}>{option}</option>
		{/each}
	</select>
</div>
