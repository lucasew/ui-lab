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
	<input
		type="checkbox"
		{disabled}
		bind:checked
		class="h-4 w-4 rounded border-[#e5e5e5] text-[#171717] focus:ring-2 focus:ring-[#171717]"
	/>
	<span class="text-sm font-medium text-[#0a0a0a]">{label}</span>
</label>
