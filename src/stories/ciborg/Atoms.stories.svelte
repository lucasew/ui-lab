<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import '../../routes/layout.css';
	import './ciborg.css';
	import Button from './Button.svelte';
	import Badge from './Badge.svelte';
	import Input from './Input.svelte';
	import Switch from './Switch.svelte';
	import Checkbox from './Checkbox.svelte';
	import Tabs from './Tabs.svelte';
	import Avatar from './Avatar.svelte';
	import Select from './Select.svelte';
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

<Story name="Buttons">
	<div class="ciborg-theme flex flex-wrap gap-3 rounded-2xl bg-[var(--ciborg-canvas)] p-6">
		<Button>Primary action</Button>
		<Button variant="outline">Secondary action</Button>
		<Button variant="ghost">Ghost action</Button>
		<Button variant="danger">Destructive action</Button>
		<Button size="large">Connect worker</Button>
	</div>
</Story>

<Story name="Badges">
	<div class="ciborg-theme flex flex-wrap gap-3 rounded-2xl bg-[var(--ciborg-canvas)] p-6">
		<Badge label="Running" />
		<Badge label="Queued" variant="warning" />
		<Badge label="Healthy" variant="success" />
		<Badge label="Failed" variant="danger" />
		<Badge label="Detached" variant="outline" />
	</div>
</Story>

<Story name="Inputs">
	<div class="ciborg-theme grid w-[640px] gap-4 rounded-2xl bg-[var(--ciborg-canvas)] p-6 md:grid-cols-2">
		<Input label="Filter recent runs" placeholder="run id, trigger, worker..." />
		<Input label="Workspace" placeholder="default workspace" variant="subtle" />
		<Select
			label="Environment"
			placeholder="Select environment"
			options={['Production', 'Staging', 'Development']}
		/>
	</div>
</Story>

<Story name="Controls">
	<div class="ciborg-theme flex flex-col gap-4 rounded-2xl bg-[var(--ciborg-canvas)] p-6">
		<Switch label="Auto dispatch enabled" checked />
		<Switch label="Drain worker on idle" />
		<Checkbox label="Require explicit approval" checked />
		<Checkbox label="Keep chat detached by default" />
	</div>
</Story>

<Story name="Navigation">
	<div class="ciborg-theme flex flex-col gap-4 rounded-2xl bg-[var(--ciborg-canvas)] p-6">
		<Tabs
			tabs={[
				{ label: 'Overview', active: true },
				{ label: 'Events' },
				{ label: 'Logs' }
			]}
		/>
		<Pagination page={2} total={8} />
	</div>
</Story>

<Story name="Status">
	<div class="ciborg-theme flex w-[320px] flex-col gap-4 rounded-2xl bg-[var(--ciborg-canvas)] p-6">
		<div class="space-y-2">
			<div class="text-sm text-[var(--ciborg-text-soft)]">Queue utilization</div>
			<Progress value={68} />
		</div>
		<div class="flex items-center gap-4">
			<Avatar name="John Doe" size="sm" />
			<Avatar name="Jane Doe" size="md" />
			<Avatar name="Ops Bot" size="lg" />
		</div>
	</div>
</Story>

<Story name="Data Table">
	<div class="ciborg-theme w-[720px] rounded-2xl bg-[var(--ciborg-canvas)] p-6">
		<Table
			columns={[
				{ key: 'stage', label: 'Stage' },
				{ key: 'status', label: 'Status' },
				{ key: 'duration', label: 'Duration' }
			]}
			data={[
				{ stage: 'program-context', status: 'Done', duration: '11s' },
				{ stage: 'hydrate-inputs', status: 'Running', duration: '2m 4s' },
				{ stage: 'publish-results', status: 'Queued', duration: 'Pending' }
			]}
		/>
	</div>
</Story>
