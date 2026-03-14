<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import HTBadge from './HTBadge.svelte';
	import HTButton from './HTButton.svelte';
	import HTInput from './HTInput.svelte';
	import HTSelect from './HTSelect.svelte';
	import HTSwitch from './HTSwitch.svelte';
	import HTTextArea from './HTTextArea.svelte';

	const { Story } = defineMeta({
		title: 'HumanTrack/Atoms',
		tags: ['autodocs'],
		parameters: {
			layout: 'centered'
		}
	});
</script>

<Story name="Badge">
	<div class="ht-story" style="display: flex; gap: 12px; flex-wrap: wrap">
		<HTBadge label="Rascunho" tone="warning" />
		<HTBadge label="Publicado" tone="success" />
		<HTBadge label="Meta 0" tone="primary" />
		<HTBadge label="Atenção" tone="danger" />
	</div>
</Story>

<Story name="Button">
	<div class="ht-story" style="display: flex; gap: 12px; flex-wrap: wrap">
		<HTButton label="Publicar" />
		<HTButton label="Gerar com IA" variant="secondary" icon="+" />
		<HTButton label="Salvar" variant="ghost" />
	</div>
</Story>

<Story name="Input">
	<div class="ht-story" style="width: 360px">
		<HTInput
			label="Título da meta"
			placeholder="Ex.: melhorar resistência em ortostatismo"
			hint="Seja específico para a IA gerar sugestões úteis."
		/>
	</div>
</Story>

<Story name="Select">
	<div class="ht-story" style="width: 360px">
		<HTSelect
			label="Especialidade"
			value="Fisioterapia neurológica"
			options={['Fisioterapia neurológica', 'Terapia ocupacional', 'Fonoaudiologia']}
		/>
	</div>
</Story>

<Story name="TextArea">
	<div class="ht-story" style="width: 420px">
		<HTTextArea
			label="Linha base"
			placeholder="Descreva a condição inicial do paciente e os critérios observáveis."
		/>
	</div>
</Story>

<Story name="Switch">
	<div class="ht-story">
		<HTSwitch label="Receber lembretes automáticos" checked />
	</div>
</Story>
