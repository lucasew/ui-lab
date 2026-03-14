<script lang="ts">
	import Button from './Button.svelte';
	import Input from './Input.svelte';

	let {
		label = 'Paciente',
		placeholder = 'Buscar por nome ou telefone'
	}: {
		label?: string;
		placeholder?: string;
	} = $props();
</script>

<div class="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto]">
	<Input {label} {placeholder} prefix="⌕" />
	<div class="self-end">
		<Button label="Adicionar" variant="ghost" />
	</div>
</div>
