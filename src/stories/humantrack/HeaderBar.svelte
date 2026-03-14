<script lang="ts">
	import Badge from './Badge.svelte';
	import Button from './Button.svelte';

	let {
		title = 'humantrack',
		subtitle = 'Goal Attainment Scaling',
		breadcrumbs = ['Pacientes', 'Plano terapêutico', 'Nova GAS']
	}: {
		title?: string;
		subtitle?: string;
		breadcrumbs?: string[];
	} = $props();
</script>

<header
	class="flex flex-col gap-4 rounded-[28px] border border-slate-200 bg-white/85 p-5 shadow-[0_18px_45px_rgba(29,45,84,0.08)] backdrop-blur md:flex-row md:items-center md:justify-between"
>
	<div class="flex items-center gap-3">
		<div
			class="grid h-10 w-10 place-items-center rounded-[14px] bg-linear-to-br from-indigo-500 via-sky-400 to-emerald-300 text-sm font-black text-white shadow-[0_10px_20px_rgba(91,108,255,0.28)]"
		>
			HT
		</div>
		<div class="flex flex-col gap-0.5">
			<div class="text-[0.95rem] font-extrabold tracking-[0.02em] text-slate-900">{title}</div>
			<div class="text-xs text-slate-500">{subtitle}</div>
		</div>
	</div>

	<nav class="flex flex-wrap items-center gap-3">
		<div class="flex flex-wrap items-center gap-2 text-xs text-slate-500">
			{#each breadcrumbs as breadcrumb, index}
				<span>{breadcrumb}</span>
				{#if index < breadcrumbs.length - 1}
					<span aria-hidden="true">/</span>
				{/if}
			{/each}
		</div>
		<Badge label="Rascunho" tone="warning" />
	</nav>

	<div class="flex items-center gap-3">
		<Button label="Salvar" variant="ghost" />
		<Button label="Publicar" icon="+" />
	</div>
</header>
