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

<div class="ciborg-surface rounded-xl {className}">
	{#if header}
		<div class="gap-2 p-4 md:p-6">
			{@render header()}
		</div>
	{/if}
	{#if children}
		<div class="gap-2 p-4 md:p-6">
			{@render children()}
		</div>
	{/if}
	{#if footer}
		<div class="gap-2 p-4 md:p-6">
			{@render footer()}
		</div>
	{/if}
</div>
