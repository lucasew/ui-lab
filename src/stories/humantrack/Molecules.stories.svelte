<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import AiBanner from './AiBanner.svelte';
	import GoalScaleCard from './GoalScaleCard.svelte';
	import HeaderBar from './HeaderBar.svelte';
	import PatientLookup from './PatientLookup.svelte';
	import ReminderRow from './ReminderRow.svelte';
	import SectionCard from './SectionCard.svelte';
	import Input from './Input.svelte';
	import TextArea from './TextArea.svelte';

	const rows = [
		{
			label: 'Meta -1',
			description: 'Meta alcançada abaixo do esperado',
			tone: 'warning' as const,
			baseline: '20%',
			target: '40%'
		},
		{
			label: 'Meta 0',
			description: 'Meta alcançada exatamente como o esperado',
			tone: 'primary' as const,
			baseline: '40%',
			target: '60%'
		},
		{
			label: 'Meta +1',
			description: 'Meta alcançada acima do esperado',
			tone: 'success' as const,
			baseline: '60%',
			target: '80%'
		}
	];

	const { Story } = defineMeta({
		title: 'HumanTrack/Molecules',
		tags: ['autodocs'],
		parameters: {
			layout: 'padded'
		}
	});
</script>

<Story name="Header Bar">
	<div class="min-w-[1100px] bg-slate-100 p-4 font-[Manrope,Avenir_Next,Segoe_UI,sans-serif]">
		<HeaderBar />
	</div>
</Story>

<Story name="Section Card">
	<div class="w-[720px] bg-slate-100 p-4 font-[Manrope,Avenir_Next,Segoe_UI,sans-serif]">
		<SectionCard
			eyebrow="Contexto clínico"
			title="Detalhes da GAS"
			description="Defina as informações essenciais que orientam a formulação da meta e a coleta."
			status="Etapa 1"
		>
			<div class="flex flex-col gap-3">
				<Input label="Título da meta" placeholder="Ampliar alcance funcional do membro superior" />
				<TextArea
					label="Resumo"
					placeholder="Registre observações clínicas, contexto de uso e critérios mensuráveis."
				/>
			</div>
		</SectionCard>
	</div>
</Story>

<Story name="Patient Lookup">
	<div class="w-[720px] bg-slate-100 p-4 font-[Manrope,Avenir_Next,Segoe_UI,sans-serif]">
		<PatientLookup />
	</div>
</Story>

<Story name="AI Banner">
	<div class="w-[760px] bg-slate-100 p-4 font-[Manrope,Avenir_Next,Segoe_UI,sans-serif]">
		<AiBanner
			title="IA assistiva para redação SMART"
			description="A HumanTrack sugere verbos, métricas e horizontes temporais a partir do contexto preenchido."
		/>
	</div>
</Story>

<Story name="Reminder Row">
	<div class="w-[760px] bg-slate-100 p-4 font-[Manrope,Avenir_Next,Segoe_UI,sans-serif]">
		<ReminderRow day="Segunda" time="08:30" />
	</div>
</Story>

<Story name="Goal Scale">
	<div class="w-[1080px] bg-slate-100 p-4 font-[Manrope,Avenir_Next,Segoe_UI,sans-serif]">
		<GoalScaleCard {rows} />
	</div>
</Story>
