<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import '../../routes/layout.css';
	import Button from './Button.svelte';
	import Badge from './Badge.svelte';
	import Input from './Input.svelte';
	import Switch from './Switch.svelte';
	import Checkbox from './Checkbox.svelte';
	import Radio from './Radio.svelte';
	import Tabs from './Tabs.svelte';
	import Avatar from './Avatar.svelte';
	import Select from './Select.svelte';
	import Dialog from './Dialog.svelte';
	import Progress from './Progress.svelte';
	import Pagination from './Pagination.svelte';
	import Table from './Table.svelte';

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

<Story name="Tabs">
	<div class="p-4">
		<Tabs tabs={[{ label: 'Overview', active: true }, { label: 'Events' }, { label: 'Logs' }]} />
	</div>
</Story>

<Story name="Avatar">
	<div class="flex items-center gap-4 p-4">
		<Avatar name="John Doe" size="sm" />
		<Avatar name="Jane Doe" size="md" />
		<Avatar name="Bob Smith" size="lg" />
	</div>
</Story>

<Story name="Select">
	<div class="w-72 p-4">
		<Select
			label="Category"
			placeholder="Select category"
			options={['Option 1', 'Option 2', 'Option 3']}
		/>
	</div>
</Story>

<Story name="Dialog">
	{#snippet children()}
		<button class="rounded-md bg-[#171717] px-4 py-2 text-white">Open Dialog</button>
	{/snippet}
</Story>

<Story name="Dialog Open">
	{#snippet children()}
		<div class="space-y-2">
			<p class="text-sm text-[#737373]">Click outside to close</p>
			<Dialog open={true} title="Dialog Title">
				<p class="text-sm">This is a dialog content.</p>
			</Dialog>
		</div>
	{/snippet}
</Story>

<Story name="Progress">
	<div class="w-64 space-y-4 p-4">
		<Progress value={25} />
		<Progress value={50} />
		<Progress value={75} />
		<Progress value={100} />
	</div>
</Story>

<Story name="Pagination">
	<div class="p-4">
		<Pagination page={1} total={10} />
	</div>
</Story>

<Story name="Table">
	<div class="p-4">
		<Table
			columns={[
				{ key: 'name', label: 'Name' },
				{ key: 'status', label: 'Status' },
				{ key: 'role', label: 'Role' }
			]}
			data={[
				{ name: 'John Doe', status: 'Active', role: 'Admin' },
				{ name: 'Jane Smith', status: 'Inactive', role: 'User' },
				{ name: 'Bob Wilson', status: 'Active', role: 'Editor' }
			]}
		/>
	</div>
</Story>
