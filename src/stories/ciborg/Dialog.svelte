<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		open?: boolean;
		title?: string;
		children?: Snippet;
		footer?: Snippet;
		class?: string;
	}

	let { open = $bindable(false), title, children, footer, class: className = '' }: Props = $props();
</script>

{#if open}
	<div class="fixed inset-0 z-50 flex items-center justify-center">
		<button
			class="absolute inset-0 bg-black/50"
			onclick={() => (open = false)}
			aria-label="Close dialog"
		></button>
		<div
			class="relative z-10 w-full max-w-md rounded-xl border border-[#e5e5e5] bg-white p-6 shadow-lg {className}"
		>
			{#if title}
				<h2 class="mb-4 text-lg font-semibold">{title}</h2>
			{/if}
			{#if children}
				{@render children()}
			{/if}
			{#if footer}
				<div class="mt-6 flex justify-end gap-3">
					{@render footer()}
				</div>
			{/if}
		</div>
	</div>
{/if}
