<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import '../../../routes/layout.css';
	import Button from './Button.svelte';
	import Badge from './Badge.svelte';
	import Input from './Input.svelte';
	import Switch from './Switch.svelte';
	import Checkbox from './Checkbox.svelte';
	import Radio from './Radio.svelte';

	const { Story } = defineMeta({
		title: 'Ciborg/Atoms',
		tags: ['autodocs'],
		parameters: {
			layout: 'centered'
		}
	});
</script>

<Story name="Button">
	<div class="flex flex-wrap gap-3 p-4">
		<Button label="Default" variant="default" />
		<Button label="Secondary" variant="secondary" />
		<Button label="Destructive" variant="destructive" />
		<Button label="Outline" variant="outline" />
		<Button label="Ghost" variant="ghost" />
	</div>
</Story>

<Story name="Button Large">
	<div class="flex flex-wrap gap-3 p-4">
		<Button label="Default" variant="default" size="large" />
		<Button label="Secondary" variant="secondary" size="large" />
	</div>
</Story>

<Story name="Button Icon">
	<div class="flex flex-wrap gap-3 p-4">
		<Button label="Add" variant="default" icon="+" />
		<Button label="Add" variant="secondary" icon="+" />
	</div>
</Story>

<Story name="Badge">
	<div class="flex flex-wrap gap-3 p-4">
		<Badge label="Default" variant="default" />
		<Badge label="Secondary" variant="secondary" />
		<Badge label="Destructive" variant="destructive" />
		<Badge label="Outline" variant="outline" />
	</div>
</Story>

<Story name="Input">
	<div class="w-72 p-4">
		<Input label="Label" placeholder="Placeholder" />
	</div>
</Story>

<Story name="Input Filled">
	<div class="w-72 p-4">
		<Input label="Label" placeholder="Placeholder" variant="filled" />
	</div>
</Story>

<Story name="Switch">
	<div class="flex flex-col gap-3 p-4">
		<Switch label="Switch unchecked" checked={false} />
		<Switch label="Switch checked" checked={true} />
	</div>
</Story>

<Story name="Checkbox">
	<div class="flex flex-col gap-3 p-4">
		<Checkbox label="Unchecked" checked={false} />
		<Checkbox label="Checked" checked={true} />
	</div>
</Story>

<Story name="Radio">
	<div class="flex flex-col gap-3 p-4">
		<Radio label="Option 1" value="1" selected="1" />
		<Radio label="Option 2" value="2" selected="1" />
	</div>
</Story>
