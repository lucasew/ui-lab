<script lang="ts">
	interface Props {
		label?: string;
		name?: string;
		value?: string;
		selected?: string;
		disabled?: boolean;
		class?: string;
	}

	let {
		label = 'Radio',
		name = 'radio',
		value = 'radio',
		selected = $bindable(value),
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
		type="radio"
		{name}
		{value}
		{disabled}
		bind:group={selected}
		class="h-4 w-4 border-[#e5e5e5] text-[#171717] focus:ring-2 focus:ring-[#171717]"
	/>
	<span class="text-sm font-medium text-[#0a0a0a]">{label}</span>
</label>
