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
	class="grid min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(91,108,255,0.14),transparent_28%),linear-gradient(180deg,#f7f9fc_0%,#eef2f7_100%)] font-[Manrope,Avenir_Next,Segoe_UI,sans-serif] text-slate-900 lg:grid-cols-[320px_minmax(0,1fr)]"
>
	<aside class="border-b border-slate-200/70 bg-slate-950/3 p-6 lg:border-r lg:border-b-0">
		<div class="mb-6 flex flex-col gap-2.5">
			<div class="text-[0.82rem] font-extrabold tracking-[0.06em] text-slate-500 uppercase">Navegação</div>
			<div
				class="flex items-center justify-between gap-3 rounded-2xl border border-indigo-200 bg-linear-to-br from-indigo-50 to-sky-50 px-3.5 py-3 text-sm"
			>
				<span>Detalhes da GAS</span>
				<Badge label="01" tone="primary" />
			</div>
			<div class="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-3.5 py-3 text-sm">
				<span>Paciente</span>
				<span class="text-xs text-slate-500">02</span>
			</div>
			<div class="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-3.5 py-3 text-sm">
				<span>Lembretes</span>
				<span class="text-xs text-slate-500">03</span>
			</div>
			<div class="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-3.5 py-3 text-sm">
				<span>Metas</span>
				<span class="text-xs text-slate-500">04</span>
			</div>
		</div>
		<div class="flex flex-col gap-2.5">
			<div class="text-[0.82rem] font-extrabold tracking-[0.06em] text-slate-500 uppercase">Resumo</div>
			<div class="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-3.5 py-3 text-sm">
				<span>Paciente vinculado</span>
				<Badge label="Ana Silva" tone="neutral" />
			</div>
			<div class="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-3.5 py-3 text-sm">
				<span>Disparos</span>
				<Badge label="3x semana" tone="success" />
			</div>
		</div>
	</aside>

	<main class="p-4 md:p-6">
		<div class="flex flex-col gap-5">
			<HeaderBar />

			<div class="grid gap-5 xl:grid-cols-2">
				<div class="xl:col-span-2">
					<SectionCard
						eyebrow="Contexto clínico"
						title="Detalhes da GAS"
						description="Defina o objetivo terapêutico, o período de acompanhamento e os sinais que orientam a análise clínica."
						status="Etapa 1"
					>
						<div class="flex flex-col gap-3">
							<div class="grid gap-4 md:grid-cols-2">
								<Input label="Título da meta" placeholder="Ex.: ampliar autonomia para marcha assistida" />
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
								title="Use IA da HumanTrack para gerar sugestões SMART"
								description="A partir do título e do contexto clínico, a IA propõe variações objetivas para acelerar o preenchimento."
							/>
						</div>
					</SectionCard>
				</div>

				<SectionCard
					eyebrow="Paciente"
					title="Detalhes do paciente"
					description="Associe a GAS a um paciente e defina o canal usado para receber as submissões."
				>
					<div class="flex flex-col gap-3">
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
					description="Configure os dias e horários de envio das submissões automáticas."
					status="Ativo"
				>
					<div class="flex flex-col gap-3">
						{#each reminders as reminder}
							<ReminderRow day={reminder.day} time={reminder.time} />
						{/each}
					</div>
				</SectionCard>

				<div class="xl:col-span-2">
					<GoalScaleCard rows={goalRows} />
				</div>
			</div>

			<div
				class="rounded-[28px] border border-slate-200 bg-white/85 px-6 py-5 shadow-[0_18px_45px_rgba(29,45,84,0.08)] backdrop-blur"
			>
				<div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
					<div class="flex flex-wrap items-center gap-3">
						<Badge label="Pronto para revisão clínica" tone="success" />
						<span class="text-xs text-slate-500">Última atualização há 2 minutos</span>
					</div>
					<div class="flex flex-wrap items-center gap-3">
						<Button label="Salvar rascunho" variant="ghost" />
						<Button label="Enviar para aprovação" />
					</div>
				</div>
			</div>
		</div>
	</main>
</div>
