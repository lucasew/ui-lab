<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import HTAiBanner from './HTAiBanner.svelte';
	import HTGoalScaleCard from './HTGoalScaleCard.svelte';
	import HTHeaderBar from './HTHeaderBar.svelte';
	import HTPatientLookup from './HTPatientLookup.svelte';
	import HTReminderRow from './HTReminderRow.svelte';
	import HTSectionCard from './HTSectionCard.svelte';
	import HTInput from './HTInput.svelte';
	import HTTextArea from './HTTextArea.svelte';

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
	<div class="ht-story" style="min-width: 1100px">
		<HTHeaderBar />
	</div>
</Story>

<Story name="Section Card">
	<div class="ht-story" style="width: 720px">
		<HTSectionCard
			eyebrow="Contexto clínico"
			title="Detalhes da GAS"
			description="Defina as informações essenciais que orientam a formulação da meta e a coleta."
			status="Etapa 1"
		>
			<div class="ht-stack">
				<HTInput label="Título da meta" placeholder="Ampliar alcance funcional do membro superior" />
				<HTTextArea
					label="Resumo"
					placeholder="Registre observações clínicas, contexto de uso e critérios mensuráveis."
				/>
			</div>
		</HTSectionCard>
	</div>
</Story>

<Story name="Patient Lookup">
	<div class="ht-story" style="width: 720px">
		<HTPatientLookup />
	</div>
</Story>

<Story name="AI Banner">
	<div class="ht-story" style="width: 760px">
		<HTAiBanner
			title="IA assistiva para redação SMART"
			description="A HumanTrack sugere verbos, métricas e horizontes temporais a partir do contexto preenchido."
		/>
	</div>
</Story>

<Story name="Reminder Row">
	<div class="ht-story" style="width: 760px">
		<HTReminderRow day="Segunda" time="08:30" />
	</div>
</Story>

<Story name="Goal Scale">
	<div class="ht-story" style="width: 1080px">
		<HTGoalScaleCard {rows} />
	</div>
</Story>
