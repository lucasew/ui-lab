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
			class="h-6 w-11 rounded-full border border-[#e5e5e5] transition-colors {checked
				? 'bg-[#171717]'
				: 'bg-[#e5e5e5]'}"
		>
			<span
				class="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-[0_2px_4px_rgba(0,0,0,0.05),0_4px_8px_rgba(0,0,0,0.1)] transition-transform {checked
					? 'translate-x-5'
					: 'translate-x-0'}"
			></span>
		</div>
	</div>
	<span class="text-sm font-medium text-[#0a0a0a]">{label}</span>
</label>
