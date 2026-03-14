<script lang="ts">
	import Button from './Button.svelte';

	let {
		title,
		description,
		actionLabel = 'Gerar com IA'
	}: {
		title: string;
		description: string;
		actionLabel?: string;
	} = $props();
</script>

<div
	class="flex flex-col gap-3 rounded-lg border border-[#e9ebf8] bg-[#f1f3fa] p-3 md:flex-row md:items-start"
>
	<div
		class="grid h-6 w-6 shrink-0 place-items-center rounded-md text-[#5451cf]"
		aria-hidden="true"
	>
		<svg viewBox="0 0 16 16" class="h-4 w-4 fill-none stroke-current" stroke-width="1.8">
			<path d="M8 1.75v12.5M1.75 8h12.5" stroke-linecap="round" />
		</svg>
	</div>
	<div class="flex flex-1 flex-col gap-1">
		<div class="text-xs leading-4 font-semibold text-[#5451cf]">{title}</div>
		<div class="text-xs leading-4 text-[#5451cf]">{description}</div>
	</div>
	<div class="pt-1 md:pt-2">
		<Button label={actionLabel} variant="secondary" />
	</div>
</div>
