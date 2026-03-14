<script lang="ts">
	let {
		breadcrumbs = ['Home', '...', 'Breadcrumb', 'Breadcrumb', 'Breadcrumb', 'Nova GAS'],
		accountLabel = 'Minha conta',
		toggleLabel = 'Dados do paciente',
		toggleEnabled = true
	}: {
		breadcrumbs?: string[];
		accountLabel?: string;
		toggleLabel?: string;
		toggleEnabled?: boolean;
	} = $props();
</script>

<header
	class="flex flex-col gap-4 bg-[#f7f7fa] px-6 py-6 text-sm md:flex-row md:items-center md:justify-between"
>
	<div class="flex min-w-0 flex-1 flex-col gap-1 md:flex-row md:items-center md:gap-4">
		<div class="flex shrink-0 items-center gap-2">
			<div class="grid h-6 w-6 place-items-center rounded-md bg-linear-to-br from-[#aba7f9] via-[#75c1e6] to-[#6ce4c0]">
				<div class="h-3 w-3 rounded-sm border border-white/80"></div>
			</div>
			<div class="text-sm font-semibold tracking-tight text-[#6868ee]">humantrack</div>
		</div>

		<nav class="min-w-0">
			<div class="flex flex-wrap items-center gap-1.5 text-sm text-zinc-500">
				{#each breadcrumbs as breadcrumb, index}
					<span class={breadcrumb === 'Nova GAS' ? 'font-medium text-[#292965]' : ''}>{breadcrumb}</span>
					{#if index < breadcrumbs.length - 1}
						<svg viewBox="0 0 16 16" class="h-[15px] w-[15px] fill-none stroke-zinc-500" stroke-width="1.6">
							<path d="m6 3.5 4 4.5-4 4.5" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					{/if}
				{/each}
			</div>
		</nav>
	</div>

	<div class="flex shrink-0 items-center gap-4">
		<div class="flex items-center gap-2">
			<div class="flex items-center gap-3">
				<div
					class={`flex h-5 w-9 items-center rounded-full border-2 border-transparent px-0.5 ${toggleEnabled ? 'justify-end bg-[#6868ee]' : 'justify-start bg-zinc-300'}`}
				>
					<div class="h-4 w-4 rounded-full bg-white shadow-[0_4px_10px_rgba(0,0,0,0.14)]"></div>
				</div>
				<div class="text-sm font-medium text-[#292965]">{toggleLabel}</div>
			</div>
		</div>

		<button
			type="button"
			class="inline-flex h-9 items-center rounded-md border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-500 shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
		>
			{accountLabel}
		</button>

		<button
			type="button"
			aria-label="Menu"
			class="inline-flex h-9 w-9 items-center justify-center rounded-md text-zinc-900"
		>
			<svg viewBox="0 0 16 16" class="h-4 w-4 fill-none stroke-current" stroke-width="1.5">
				<path d="M3 5h10M3 8h10M3 11h10" stroke-linecap="round" />
			</svg>
		</button>
	</div>
</header>
