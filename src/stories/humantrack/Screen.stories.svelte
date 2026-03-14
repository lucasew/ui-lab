<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import GasFormScreen from './GasFormScreen.svelte';

	const { Story } = defineMeta({
		title: 'HumanTrack/Screens',
		component: GasFormScreen,
		tags: ['autodocs'],
		parameters: {
			layout: 'fullscreen'
		}
	});
</script>

<Story name="Create GAS" />
