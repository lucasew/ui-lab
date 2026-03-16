<script lang="ts">
	interface Props {
		label?: string;
		checked?: boolean;
		disabled?: boolean;
		class?: string;
	}

	let {
		label = 'Checkbox',
		checked = $bindable(false),
		disabled = false,
		class: className = ''
	}: Props = $props();
</script>

<label
	class="inline-flex items-center gap-2 {disabled
		? 'cursor-not-allowed opacity-50'
		: 'cursor-pointer'} {className}"
>
	<input type="checkbox" {disabled} bind:checked class="sr-only" />
	<div
		class="flex h-4 w-4 items-center justify-center rounded border border-[var(--ciborg-border-strong)] {checked
			? 'border-[var(--ciborg-primary)] bg-[var(--ciborg-primary)]'
			: 'bg-[var(--ciborg-panel)]'}"
	>
		{#if checked}
			<svg class="h-3 w-3 text-[var(--ciborg-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
			</svg>
		{/if}
	</div>
	<span class="text-sm font-medium text-[var(--ciborg-text-soft)]">{label}</span>
</label>
