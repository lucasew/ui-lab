<script lang="ts">
	import type { Snippet } from 'svelte';
	import Badge from './Badge.svelte';

	let {
		eyebrow = 'Etapa',
		title,
		description,
		status = '',
		children
	}: {
		eyebrow?: string;
		title: string;
		description: string;
		status?: string;
		children?: Snippet;
	} = $props();
</script>

<section
	class="flex flex-col gap-4 rounded-[18px] border border-slate-200 bg-white p-5 shadow-[0_12px_28px_rgba(18,33,66,0.06)]"
>
	<header class="flex flex-col gap-1.5">
		<div class="inline-flex items-center gap-2 text-sm font-bold text-slate-500">
			<span class="text-[0.72rem] font-extrabold tracking-[0.08em] text-indigo-600 uppercase">{eyebrow}</span>
			{#if status}
				<Badge label={status} tone="primary" />
			{/if}
		</div>
		<h3 class="text-lg font-extrabold text-slate-900">{title}</h3>
		<p class="text-sm leading-6 text-slate-500">{description}</p>
	</header>
	{@render children?.()}
</section>
