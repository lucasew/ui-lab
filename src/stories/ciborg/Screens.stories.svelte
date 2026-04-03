<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import '../../routes/layout.css';
	import './ciborg.css';
	import Screen from './Screen.svelte';
	import Button from './Button.svelte';
	import Badge from './Badge.svelte';
	import Card from './Card.svelte';
	import Tabs from './Tabs.svelte';
	import Table from './Table.svelte';
	import Input from './Input.svelte';

	const sidebarItems = [
		{
			label: 'Overview',
			shortcut: '⌘1',
			icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
			active: true
		},
		{
			label: 'Chats',
			shortcut: '⌘2',
			icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
		},
		{
			label: 'Runs',
			shortcut: '⌘3',
			icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
		},
		{
			label: 'Workers',
			shortcut: '⌘4',
			icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
		},
		{
			label: 'Tokens',
			shortcut: '⌘5',
			icon: 'M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z'
		},
		{
			label: 'Issues',
			shortcut: '⌘6',
			icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
		}
	];

	const { Story } = defineMeta({
		title: 'Ciborg/Screens',
		tags: ['autodocs'],
		parameters: { layout: 'fullscreen' }
	});
</script>

<Story name="Overview">
	<Screen
		{sidebarItems}
		user={{ name: 'John Doe' }}
		fab={true}
		mainWidth="1024"
	>
		<div class="space-y-6">
			<div class="flex items-center justify-between">
				<div class="space-y-1">
					<h1 class="text-[30px] font-bold text-[var(--foreground)]">Control plane overview</h1>
					<p class="text-sm text-[var(--muted-foreground)]">
						Track workers, queue depth, and recent executions from a single entry point.
					</p>
				</div>
				<div class="flex gap-3">
					<Button variant="outline">View queue</Button>
					<Button>New run</Button>
				</div>
			</div>
			<div class="grid grid-cols-3 gap-4">
				{#each [{ label: 'Pending jobs', value: '14' }, { label: 'Workers online', value: '8' }, { label: 'Success rate', value: '98.4%' }] as metric (metric.label)}
					<Card>
						<div class="space-y-1">
							<div class="text-sm text-[var(--muted-foreground)]">{metric.label}</div>
							<div class="text-3xl font-semibold text-[var(--foreground)]">{metric.value}</div>
						</div>
					</Card>
				{/each}
			</div>
			<Card>
				{#snippet header()}
					<div class="flex items-center justify-between gap-4">
						<div>
							<h2 class="text-lg font-semibold text-[var(--foreground)]">Recent runs</h2>
							<p class="text-sm text-[var(--muted-foreground)]">
								Latest executions across manual, scheduled and webhook triggers.
							</p>
						</div>
						<div class="flex gap-2">
							<Input placeholder="Filter recent runs" class="w-56" />
							<Button variant="ghost">Dispatch</Button>
						</div>
					</div>
				{/snippet}
				<Table
					columns={[
						{ key: 'id', label: 'ID' },
						{ key: 'status', label: 'Status' },
						{ key: 'duration', label: 'Duration' },
						{ key: 'trigger', label: 'Trigger' }
					]}
					data={[
						{ id: 'run-001', status: 'Completed', duration: '2m 34s', trigger: 'Manual' },
						{ id: 'run-002', status: 'Running', duration: '1m 12s', trigger: 'Webhook' },
						{ id: 'run-003', status: 'Failed', duration: '45s', trigger: 'Schedule' },
						{ id: 'run-004', status: 'Completed', duration: '3m 21s', trigger: 'Manual' }
					]}
				/>
			</Card>
		</div>
	</Screen>
</Story>

<Story name="Chats">
	<Screen {sidebarItems} user={{ name: 'John Doe' }}>
		<div class="space-y-5">
			<div class="flex items-center justify-between">
				<div class="space-y-1">
					<h1 class="text-[30px] font-bold text-[var(--foreground)]">Agent chats</h1>
					<p class="max-w-xl text-sm text-[var(--muted-foreground)]">
						Persistent threads for coding help, reviews, and operations. Attach a project only when
						the conversation actually needs repository context.
					</p>
				</div>
				<div class="flex gap-2">
					<Button variant="outline">View queue</Button>
					<Button>New chat</Button>
				</div>
			</div>
			<div class="grid grid-cols-3 gap-4">
				{#each [{ label: 'Open threads', value: '18', note: 'Across coding, review, and ops workflows.' }, { label: 'Waiting on user', value: '5', note: 'Threads paused on approvals, replies, or missing details.' }, { label: 'Project-linked', value: '7', note: 'Optional context, not the default starting point.' }] as metric (metric.label)}
					<Card>
						<div class="space-y-1">
							<div class="text-sm text-[var(--muted-foreground)]">{metric.label}</div>
							<div class="text-3xl font-semibold text-[var(--foreground)]">{metric.value}</div>
							<p class="text-xs text-[var(--muted-foreground)]">{metric.note}</p>
						</div>
					</Card>
				{/each}
			</div>
			<Card>
				{#snippet header()}
					<div class="space-y-3">
						<Tabs
							tabs={[
								{ label: 'All threads', active: true },
								{ label: 'Needs reply' },
								{ label: 'Detached' },
								{ label: 'Project-linked' }
							]}
						/>
						<div class="flex items-center gap-2">
							<Badge label="Default view: detached-friendly" variant="neutral" />
							<Button variant="ghost">Filters</Button>
						</div>
					</div>
				{/snippet}
				<div class="space-y-3">
					{#each [{ title: 'Review the migration plan for the relay artifact cleanup...', type: 'coding' }, { title: 'Summarize the behavioural risks in the shell approval changes...', type: 'review' }, { title: 'Check the flaky image pipeline in infra / worker-images...', type: 'ops' }] as thread (thread.title)}
						<div class="rounded-xl border border-[var(--border)] bg-[var(--secondary)] p-4">
							<div class="flex items-center justify-between gap-3">
								<span class="font-medium text-[var(--foreground)]">{thread.title}</span>
								<Badge label={thread.type} variant="outline" />
							</div>
						</div>
					{/each}
				</div>
			</Card>
		</div>
	</Screen>
</Story>

<Story name="Workers">
	<Screen {sidebarItems} user={{ name: 'John Doe' }}>
		<div class="space-y-6">
			<div class="flex items-center justify-between">
				<div class="space-y-1">
					<h1 class="text-[30px] font-bold text-[var(--foreground)]">Ephemeral workers</h1>
					<p class="text-sm text-[var(--muted-foreground)]">
						Workers appear only while connected. Surface live status, queue pressure, and what the
						worker actually reports.
					</p>
				</div>
				<div class="flex gap-3">
					<Button variant="outline">Refresh</Button>
					<Button>Connect worker</Button>
				</div>
			</div>
			<Tabs
				tabs={[{ label: 'All workers', active: true }, { label: 'Busy' }, { label: 'Waiting' }]}
			/>
			<div class="grid grid-cols-3 gap-4">
				{#each [{ label: 'Running jobs', value: '12' }, { label: 'Queued jobs', value: '34' }, { label: 'Connected workers', value: '8' }] as metric (metric.label)}
					<Card>
						<div class="space-y-1">
							<div class="text-sm text-[var(--muted-foreground)]">{metric.label}</div>
							<div class="text-3xl font-semibold text-[var(--foreground)]">{metric.value}</div>
						</div>
					</Card>
				{/each}
			</div>
			<div class="grid grid-cols-2 gap-4">
				{#each [{ name: 'worker-eu-central-1', status: 'Waiting', copy: 'Connected 19 minutes ago. This worker does not publish hardware specs.', actions: ['Open shell', 'View state'] }, { name: 'worker-us-east-gpu', status: 'Busy', copy: 'Connected 4 minutes ago. This worker reports 2 jobs with 1 more waiting in queue.', actions: ['Drain', 'Queue details'] }] as worker (worker.name)}
					<Card>
						{#snippet header()}
							<div class="flex items-start justify-between gap-3">
								<div class="space-y-1">
									<h3 class="text-lg font-semibold text-[var(--foreground)]">{worker.name}</h3>
									<p class="text-sm text-[var(--muted-foreground)]">{worker.copy}</p>
								</div>
								<Badge
									label={worker.status}
									variant={worker.status === 'Busy' ? 'default' : 'neutral'}
								/>
							</div>
						{/snippet}
						{#snippet footer()}
							<div class="flex gap-3">
								<Button variant="outline">{worker.actions[0]}</Button>
								<Button variant={worker.status === 'Busy' ? 'ghost' : 'default'}
									>{worker.actions[1]}</Button
								>
							</div>
						{/snippet}
					</Card>
				{/each}
			</div>
			<Card>
				{#snippet header()}
					<div class="space-y-1">
						<h2 class="text-lg font-semibold text-[var(--foreground)]">Recent session changes</h2>
						<p class="text-sm text-[var(--muted-foreground)]">
							Connection and drain events for ephemeral workers, without inferred hardware specs.
						</p>
					</div>
				{/snippet}
				<div class="space-y-3">
					{#each [{ title: 'worker-eu-central-1 connected from fra1', state: 'Waiting' }, { title: 'worker-us-east-gpu picked up 2 queued jobs', state: 'Busy' }, { title: 'worker-ap-south-1 drained and disconnected', state: 'Ended' }] as event (event.title)}
						<div
							class="flex items-center justify-between rounded-lg bg-[var(--secondary)] px-4 py-3"
						>
							<span class="text-sm text-[var(--card-foreground)]">{event.title}</span>
							<Badge
								label={event.state}
								variant={event.state === 'Busy'
									? 'default'
									: event.state === 'Ended'
										? 'danger'
										: 'neutral'}
							/>
						</div>
					{/each}
				</div>
			</Card>
		</div>
	</Screen>
</Story>
