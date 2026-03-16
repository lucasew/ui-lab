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
	<input type="radio" {name} {value} {disabled} bind:group={selected} class="sr-only" />
	<div
		class="flex h-4 w-4 items-center justify-center rounded-full border border-[#e5e5e5] {selected ===
		value
			? 'border-[#171717] bg-[#171717]'
			: ''}"
	>
		{#if selected === value}
			<div class="h-2.5 w-2.5 rounded-full bg-[#fafafa]"></div>
		{/if}
	</div>
	<span class="text-sm font-medium text-[#0a0a0a]">{label}</span>
</label>
