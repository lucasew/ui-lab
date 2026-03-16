<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		header?: Snippet;
		footer?: Snippet;
		class?: string;
	}

	let { children, header, footer, class: className = '' }: Props = $props();
</script>

<div class="rounded-lg border border-[#e5e5e5] bg-white shadow-sm {className}">
	{#if header}
		<div class="p-6">
			{@render header()}
		</div>
	{/if}
	{#if children}
		<div class="p-6">
			{@render children()}
		</div>
	{/if}
	{#if footer}
		<div class="p-6 pt-0">
			{@render footer()}
		</div>
	{/if}
</div>
