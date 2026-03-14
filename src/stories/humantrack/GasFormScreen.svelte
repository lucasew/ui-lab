<script lang="ts">
	import AiBanner from './AiBanner.svelte';
	import Badge from './Badge.svelte';
	import Button from './Button.svelte';
	import HeaderBar from './HeaderBar.svelte';
	import Input from './Input.svelte';
	import PatientLookup from './PatientLookup.svelte';
	import ReminderRow from './ReminderRow.svelte';
	import GoalScaleCard from './GoalScaleCard.svelte';
	import SectionCard from './SectionCard.svelte';
	import Select from './Select.svelte';
	import TextArea from './TextArea.svelte';

	const goalRows = [
		{
			label: 'Meta -1',
			description: 'Meta alcançada abaixo do esperado',
			tone: 'warning' as const,
			baseline: '30%',
			target: '45%'
		},
		{
			label: 'Meta 0',
			description: 'Meta alcançada exatamente como o esperado',
			tone: 'primary' as const,
			baseline: '45%',
			target: '60%'
		},
		{
			label: 'Meta +1',
			description: 'Meta alcançada acima do esperado',
			tone: 'success' as const,
			baseline: '60%',
			target: '75%'
		}
	];

	const reminders = [
		{ day: 'Segunda', time: '08:30' },
		{ day: 'Quarta', time: '08:30' },
		{ day: 'Sexta', time: '08:30' }
	];
</script>

<div
	class="min-h-screen bg-[#d9d9d9] font-[Inter,Segoe_UI,sans-serif] text-[#292965]"
>
	<main class="mx-auto flex w-full max-w-[1120px] flex-col gap-8 bg-[#f7f7fa] pb-10">
		<div class="flex flex-col gap-8">
			<HeaderBar />

			<div class="px-6">
				<h1 class="text-2xl font-semibold leading-6 text-[#292965]">Configurar nova GAS</h1>
			</div>

			<div class="grid gap-4 px-6">
				<div>
					<SectionCard
						eyebrow="Detalhes da GAS"
						title="Detalhes da GAS"
						description="Defina o contexto clínico da GAS. Essas informações ajudam a organizar o acompanhamento e melhoram as sugestões da IA"
					>
						<div class="flex flex-col gap-4">
							<Input label="Nome da GAS" placeholder="Ex: GAS - Mobilidade (João)" />
							<div class="grid gap-4 md:grid-cols-2">
								<Select
									label="Especialidade"
									value="Fisioterapia neurológica"
									options={[
										'Fisioterapia neurológica',
										'Terapia ocupacional',
										'Fonoaudiologia'
									]}
								/>
							</div>
							<div class="grid gap-4 md:grid-cols-2">
								<Input label="Início" value="14/03/2026" />
								<Input label="Término" value="14/06/2026" />
							</div>
							<TextArea
								label="Linha base"
								placeholder="Descreva o desempenho atual do paciente, limitações e contexto de aplicação."
							/>
							<AiBanner
								title="Use IA da HumanTrack para gerar sugestões SMART baseadas no título da meta"
								description="Inclua detalhes específicos como métricas, percentuais e prazos para melhores resultados"
							/>
						</div>
					</SectionCard>
				</div>

				<SectionCard
					eyebrow="Paciente"
					title="Detalhes do paciente"
					description="Associe a GAS a um paciente. O telefone é usado para o envio das submissões via WhatsApp"
				>
					<div class="flex flex-col gap-4">
						<Select
							label="Canal principal"
							value="WhatsApp"
							options={['WhatsApp', 'SMS', 'E-mail']}
						/>
						<PatientLookup />
					</div>
				</SectionCard>

				<SectionCard
					eyebrow="Recorrência"
					title="Lembretes"
					description="Configure a recorrência e os dias de disparo. O paciente receberá as submissões automaticamente nos horários definidos"
				>
					<div class="grid gap-4 md:grid-cols-2">
						{#each reminders as reminder}
							<ReminderRow day={reminder.day} time={reminder.time} />
						{/each}
					</div>
				</SectionCard>

				<div>
					<GoalScaleCard rows={goalRows} />
				</div>
			</div>

			<div class="flex justify-end gap-2 px-6">
				<Button label="Cancelar" variant="ghost" />
				<Button label="Salvar" />
			</div>
		</div>
	</main>
</div>
