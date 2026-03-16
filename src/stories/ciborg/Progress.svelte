<script lang="ts">
	interface Props {
		value?: number;
		max?: number;
		class?: string;
	}

	let { value = 0, max = 100, class: className = '' }: Props = $props();

	const percentage = $derived((value / max) * 100);
</script>

<div class="h-2 w-full overflow-hidden rounded-full bg-[var(--ciborg-panel-muted)] {className}">
	<div
		class="h-full rounded-full bg-[var(--ciborg-primary)] transition-all"
		style="width: {percentage}%"
	></div>
</div>
