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
	class="flex flex-col gap-4 border-b border-slate-200 bg-[#f7f7fa] px-6 py-4 text-sm md:flex-row md:items-center md:justify-between"
>
	<div class="flex min-w-0 flex-1 flex-col gap-1.5 md:flex-row md:items-center md:gap-4">
		<div class="flex shrink-0 items-center gap-2">
			<div class="h-5 w-5 rounded-full bg-linear-to-r from-indigo-500 via-sky-400 to-emerald-300"></div>
			<div class="text-sm font-semibold tracking-tight text-indigo-500">humantrack</div>
		</div>

		<nav class="min-w-0">
			<div class="flex flex-wrap items-center gap-1 text-[11px] text-slate-500">
				{#each breadcrumbs as breadcrumb, index}
					<span class={breadcrumb === 'Nova GAS' ? 'font-medium text-slate-700' : ''}>{breadcrumb}</span>
					{#if index < breadcrumbs.length - 1}
						<span aria-hidden="true" class="text-slate-400">/</span>
					{/if}
				{/each}
			</div>
		</nav>
	</div>

	<div class="flex shrink-0 items-center gap-4">
		<div class="flex items-center gap-2">
			<div
				class={`flex h-5 w-9 items-center rounded-full border border-white/0 px-0.5 transition ${toggleEnabled ? 'justify-end bg-indigo-500' : 'justify-start bg-slate-300'}`}
			>
				<div class="h-4 w-4 rounded-full bg-white shadow-sm"></div>
			</div>
			<div class="text-[11px] text-slate-600">{toggleLabel}</div>
		</div>

		<button
			type="button"
			class="inline-flex h-9 items-center rounded-md border border-zinc-200 bg-white px-4 text-xs font-medium text-slate-700 shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
		>
			{accountLabel}
		</button>

		<button
			type="button"
			aria-label="Menu"
			class="inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-500"
		>
			<svg viewBox="0 0 16 16" class="h-4 w-4 fill-none stroke-current" stroke-width="1.5">
				<path d="M3 5h10M3 8h10M3 11h10" stroke-linecap="round" />
			</svg>
		</button>
	</div>
</header>
