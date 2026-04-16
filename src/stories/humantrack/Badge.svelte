<script lang="ts">
	type Tone = 'primary' | 'success' | 'warning' | 'danger' | 'neutral';

	let {
		label,
		tone = 'neutral'
	}: {
		label: string;
		tone?: Tone;
	} = $props();

	const toneClasses: Record<Tone, string> = {
		primary: 'border border-[#7375fc]/40 bg-[#e9ebf8] text-[#5451cf]',
		success: 'border border-emerald-200 bg-emerald-50 text-emerald-700',
		warning: 'border border-amber-200 bg-amber-50 text-amber-700',
		danger: 'border border-rose-200 bg-rose-50 text-rose-700',
		neutral: 'border border-zinc-200 bg-zinc-50 text-zinc-500'
	};
</script>

<span
	class={`inline-flex min-h-6 items-center justify-center rounded-md px-2.5 py-1 text-xs leading-4 font-semibold ${toneClasses[tone]}`}
>
	{label}
</span>
