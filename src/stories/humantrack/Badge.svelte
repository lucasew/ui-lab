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
		primary: 'bg-indigo-100 text-indigo-600',
		success: 'bg-emerald-100 text-emerald-700',
		warning: 'bg-amber-100 text-amber-700',
		danger: 'bg-rose-100 text-rose-700',
		neutral: 'bg-slate-100 text-slate-600'
	};
</script>

<span
	class={`inline-flex min-h-7 items-center justify-center rounded-full px-3 text-xs font-extrabold tracking-[0.02em] ${toneClasses[tone]}`}
>
	{label}
</span>
