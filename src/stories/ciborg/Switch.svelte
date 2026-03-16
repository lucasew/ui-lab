<script lang="ts">
	interface Props {
		label?: string;
		checked?: boolean;
		disabled?: boolean;
		class?: string;
	}

	let {
		label = 'Switch',
		checked = $bindable(false),
		disabled = false,
		class: className = ''
	}: Props = $props();
</script>

<label
	class="inline-flex items-center gap-3 {disabled
		? 'cursor-not-allowed opacity-50'
		: 'cursor-pointer'} {className}"
>
	<div class="relative">
		<input type="checkbox" {disabled} bind:checked class="sr-only" />
		<div
			class="h-6 w-11 rounded-full border border-[var(--border)] transition-colors {checked
				? 'bg-[var(--primary)]'
				: 'bg-[var(--accent)]'}"
		>
			<span
				class="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-[var(--foreground)] shadow-[0_2px_4px_rgba(2,6,23,0.24)] transition-transform {checked
					? 'translate-x-5'
					: 'translate-x-0'}"
			></span>
		</div>
	</div>
	<span class="text-sm font-medium text-[var(--card-foreground)]">{label}</span>
</label>
