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
	class="flex flex-col gap-4 rounded-[20px] border border-indigo-200 bg-linear-to-br from-indigo-50 to-sky-50 p-4 md:flex-row md:items-center"
>
	<div
		class="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-lg font-black text-indigo-600"
		aria-hidden="true"
	>
		AI
	</div>
	<div class="flex flex-1 flex-col gap-1.5">
		<div class="font-extrabold text-slate-900">{title}</div>
		<div class="text-sm leading-6 text-slate-500">{description}</div>
	</div>
	<Button label={actionLabel} variant="secondary" icon="+" />
</div>
