<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import '../../routes/layout.css';
	import { Button } from '$lib/shadcn/ui/button';
	import { Badge } from '$lib/shadcn/ui/badge';
	import { Input } from '$lib/shadcn/ui/input';
	import { Switch } from '$lib/shadcn/ui/switch';
	import { Checkbox } from '$lib/shadcn/ui/checkbox';
	import {
		Card,
		CardHeader,
		CardTitle,
		CardDescription,
		CardContent,
		CardFooter
	} from '$lib/shadcn/ui/card';
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
		<Button variant="default">Default</Button>
		<Button variant="secondary">Secondary</Button>
		<Button variant="destructive">Destructive</Button>
		<Button variant="outline">Outline</Button>
		<Button variant="ghost">Ghost</Button>
	</div>
</Story>

<Story name="Button Large">
	<div class="flex flex-wrap gap-3 p-4">
		<Button size="lg">Large Default</Button>
		<Button size="lg" variant="secondary">Large Secondary</Button>
	</div>
</Story>

<Story name="Badge">
	<div class="flex flex-wrap gap-3 p-4">
		<Badge>Default</Badge>
		<Badge variant="secondary">Secondary</Badge>
		<Badge variant="destructive">Destructive</Badge>
		<Badge variant="outline">Outline</Badge>
	</div>
</Story>

<Story name="Input">
	<div class="w-72 p-4">
		<Input placeholder="Placeholder" />
	</div>
</Story>

<Story name="Input Filled">
	<div class="w-72 p-4">
		<Input placeholder="Placeholder" class="bg-muted" />
	</div>
</Story>

<Story name="Switch">
	<div class="flex flex-col gap-3 p-4">
		<div class="flex items-center gap-2">
			<Switch />
			<span class="text-sm">Switch unchecked</span>
		</div>
		<div class="flex items-center gap-2">
			<Switch checked />
			<span class="text-sm">Switch checked</span>
		</div>
	</div>
</Story>

<Story name="Checkbox">
	<div class="flex flex-col gap-3 p-4">
		<div class="flex items-center gap-2">
			<Checkbox />
			<span class="text-sm">Unchecked</span>
		</div>
		<div class="flex items-center gap-2">
			<Checkbox checked />
			<span class="text-sm">Checked</span>
		</div>
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
