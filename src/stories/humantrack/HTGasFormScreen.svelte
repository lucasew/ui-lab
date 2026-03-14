<script lang="ts">
	import HTAiBanner from './HTAiBanner.svelte';
	import HTBadge from './HTBadge.svelte';
	import HTButton from './HTButton.svelte';
	import HTHeaderBar from './HTHeaderBar.svelte';
	import HTInput from './HTInput.svelte';
	import HTPatientLookup from './HTPatientLookup.svelte';
	import HTReminderRow from './HTReminderRow.svelte';
	import HTGoalScaleCard from './HTGoalScaleCard.svelte';
	import HTSectionCard from './HTSectionCard.svelte';
	import HTSelect from './HTSelect.svelte';
	import HTTextArea from './HTTextArea.svelte';

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

<div class="ht-page ht-story">
	<aside class="ht-sidebar">
		<div class="ht-sidebar__section">
			<div class="ht-sidebar__title">Navegação</div>
			<div class="ht-sidebar__item is-active">
				<span>Detalhes da GAS</span>
				<HTBadge label="01" tone="primary" />
			</div>
			<div class="ht-sidebar__item">
				<span>Paciente</span>
				<span class="ht-sidebar__meta">02</span>
			</div>
			<div class="ht-sidebar__item">
				<span>Lembretes</span>
				<span class="ht-sidebar__meta">03</span>
			</div>
			<div class="ht-sidebar__item">
				<span>Metas</span>
				<span class="ht-sidebar__meta">04</span>
			</div>
		</div>
		<div class="ht-sidebar__section">
			<div class="ht-sidebar__title">Resumo</div>
			<div class="ht-sidebar__item">
				<span>Paciente vinculado</span>
				<HTBadge label="Ana Silva" tone="neutral" />
			</div>
			<div class="ht-sidebar__item">
				<span>Disparos</span>
				<HTBadge label="3x semana" tone="success" />
			</div>
		</div>
	</aside>

	<main class="ht-main">
		<div class="ht-shell">
			<HTHeaderBar />

			<div class="ht-grid">
				<div class="ht-grid--full">
					<HTSectionCard
						eyebrow="Contexto clínico"
						title="Detalhes da GAS"
						description="Defina o objetivo terapêutico, o período de acompanhamento e os sinais que orientam a análise clínica."
						status="Etapa 1"
					>
						<div class="ht-stack">
							<div class="ht-inline-fields">
								<HTInput label="Título da meta" placeholder="Ex.: ampliar autonomia para marcha assistida" />
								<HTSelect
									label="Especialidade"
									value="Fisioterapia neurológica"
									options={[
										'Fisioterapia neurológica',
										'Terapia ocupacional',
										'Fonoaudiologia'
									]}
								/>
							</div>
							<div class="ht-inline-fields">
								<HTInput label="Início" value="14/03/2026" />
								<HTInput label="Término" value="14/06/2026" />
							</div>
							<HTTextArea
								label="Linha base"
								placeholder="Descreva o desempenho atual do paciente, limitações e contexto de aplicação."
							/>
							<HTAiBanner
								title="Use IA da HumanTrack para gerar sugestões SMART"
								description="A partir do título e do contexto clínico, a IA propõe variações objetivas para acelerar o preenchimento."
							/>
						</div>
					</HTSectionCard>
				</div>

				<HTSectionCard
					eyebrow="Paciente"
					title="Detalhes do paciente"
					description="Associe a GAS a um paciente e defina o canal usado para receber as submissões."
				>
					<div class="ht-stack">
						<HTSelect
							label="Canal principal"
							value="WhatsApp"
							options={['WhatsApp', 'SMS', 'E-mail']}
						/>
						<HTPatientLookup />
					</div>
				</HTSectionCard>

				<HTSectionCard
					eyebrow="Recorrência"
					title="Lembretes"
					description="Configure os dias e horários de envio das submissões automáticas."
					status="Ativo"
				>
					<div class="ht-stack">
						{#each reminders as reminder}
							<HTReminderRow day={reminder.day} time={reminder.time} />
						{/each}
					</div>
				</HTSectionCard>

				<div class="ht-grid--full">
					<HTGoalScaleCard rows={goalRows} />
				</div>
			</div>

			<div class="ht-panel" style="padding: 20px 24px">
				<div class="ht-actions">
					<div class="ht-actions__group">
						<HTBadge label="Pronto para revisão clínica" tone="success" />
						<span class="ht-field__hint">Última atualização há 2 minutos</span>
					</div>
					<div class="ht-actions__group">
						<HTButton label="Salvar rascunho" variant="ghost" />
						<HTButton label="Enviar para aprovação" />
					</div>
				</div>
			</div>
		</div>
	</main>
</div>

<style>
	@import './humantrack.css';
</style>
