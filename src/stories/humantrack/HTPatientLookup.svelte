<script lang="ts">
	import HTButton from './HTButton.svelte';
	import HTInput from './HTInput.svelte';

	let {
		label = 'Paciente',
		placeholder = 'Buscar por nome ou telefone'
	}: {
		label?: string;
		placeholder?: string;
	} = $props();
</script>

<div class="ht-patient-lookup">
	<HTInput {label} {placeholder} prefix="⌕" />
	<div style="align-self: end">
		<HTButton label="Adicionar" variant="secondary" icon="+" />
	</div>
</div>

<style>
	@import './humantrack.css';
</style>
