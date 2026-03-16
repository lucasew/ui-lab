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
	<label class="flex flex-col gap-1.5">
		{#if label}
			<span class="text-sm font-medium text-[var(--ciborg-text-soft)]">{label}</span>
		{/if}
		<select
			bind:value
			class="w-full rounded-md border border-[var(--ciborg-border)] bg-[var(--ciborg-panel)] px-3 py-2 text-sm text-[var(--ciborg-text)] focus:ring-2 focus:ring-[var(--ciborg-primary)] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
		>
			{#if placeholder}
				<option value="" disabled>{placeholder}</option>
			{/if}
			{#each options as option}
				<option value={option}>{option}</option>
			{/each}
		</select>
	</label>
</div>
