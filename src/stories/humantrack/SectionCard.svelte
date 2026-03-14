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
	class="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.1)]"
>
	<header class="flex flex-col gap-1.5">
		<div class="inline-flex items-center gap-2 text-sm">
			<span class="text-xs font-semibold tracking-[0.02em] text-zinc-500">{eyebrow}</span>
			{#if status}
				<Badge label={status} tone="primary" />
			{/if}
		</div>
		<h3 class="text-base font-semibold leading-6 text-[#292965]">{title}</h3>
		<p class="text-sm leading-5 text-[#292965]">{description}</p>
	</header>
	{@render children?.()}
</section>
