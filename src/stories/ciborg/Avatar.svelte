<script lang="ts">
	interface Props {
		name?: string;
		image?: string;
		size?: 'sm' | 'md' | 'lg';
		class?: string;
	}

	let { name = '', image, size = 'md', class: className = '' }: Props = $props();

	const sizes = {
		sm: 'h-8 w-8 text-xs',
		md: 'h-10 w-10 text-sm',
		lg: 'h-12 w-12 text-base'
	};

	function getInitials(name: string) {
		return name
			.split(' ')
			.map((n) => n[0])
			.join('')
			.toUpperCase()
			.slice(0, 2);
	}
</script>

{#if image}
	<img src={image} alt={name} class="rounded-full object-cover {sizes[size]} {className}" />
{:else}
	<div
		class="flex items-center justify-center rounded-full bg-[#f5f5f5] font-medium text-[#171717] {sizes[
			size
		]} {className}"
	>
		{getInitials(name)}
	</div>
{/if}
