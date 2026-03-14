<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Badge from './Badge.svelte';
	import Button from './Button.svelte';
	import Input from './Input.svelte';
	import Select from './Select.svelte';
	import Switch from './Switch.svelte';
	import TextArea from './TextArea.svelte';

	const { Story } = defineMeta({
		title: 'HumanTrack/Atoms',
		tags: ['autodocs'],
		parameters: {
			layout: 'centered'
		}
	});
</script>

<Story name="Badge">
	<div class="flex flex-wrap gap-3 p-2 font-[Manrope,Avenir_Next,Segoe_UI,sans-serif]">
		<Badge label="Rascunho" tone="warning" />
		<Badge label="Publicado" tone="success" />
		<Badge label="Meta 0" tone="primary" />
		<Badge label="Atenção" tone="danger" />
	</div>
</Story>

<Story name="Button">
	<div class="flex flex-wrap gap-3 p-2 font-[Manrope,Avenir_Next,Segoe_UI,sans-serif]">
		<Button label="Publicar" />
		<Button label="Gerar com IA" variant="secondary" icon="+" />
		<Button label="Salvar" variant="ghost" />
	</div>
</Story>

<Story name="Input">
	<div class="w-[360px] p-2 font-[Manrope,Avenir_Next,Segoe_UI,sans-serif]">
		<Input
			label="Título da meta"
			placeholder="Ex.: melhorar resistência em ortostatismo"
			hint="Seja específico para a IA gerar sugestões úteis."
		/>
	</div>
</Story>

<Story name="Select">
	<div class="w-[360px] p-2 font-[Manrope,Avenir_Next,Segoe_UI,sans-serif]">
		<Select
			label="Especialidade"
			value="Fisioterapia neurológica"
			options={['Fisioterapia neurológica', 'Terapia ocupacional', 'Fonoaudiologia']}
		/>
	</div>
</Story>

<Story name="TextArea">
	<div class="w-[420px] p-2 font-[Manrope,Avenir_Next,Segoe_UI,sans-serif]">
		<TextArea
			label="Linha base"
			placeholder="Descreva a condição inicial do paciente e os critérios observáveis."
		/>
	</div>
</Story>

<Story name="Switch">
	<div class="p-2 font-[Manrope,Avenir_Next,Segoe_UI,sans-serif]">
		<Switch label="Receber lembretes automáticos" checked />
	</div>
</Story>
