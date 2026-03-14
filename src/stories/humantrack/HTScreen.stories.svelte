<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import HTGasFormScreen from './HTGasFormScreen.svelte';

	const { Story } = defineMeta({
		title: 'HumanTrack/Screens',
		component: HTGasFormScreen,
		tags: ['autodocs'],
		parameters: {
			layout: 'fullscreen'
		}
	});
</script>

<Story name="Create GAS" />
