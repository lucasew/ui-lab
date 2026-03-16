<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import '../../routes/layout.css';
	import Screen from './Screen.svelte';
	import { Button } from '$lib/shadcn/ui/button';
	import { Badge } from '$lib/shadcn/ui/badge';
	import {
		Card,
		CardHeader,
		CardTitle,
		CardDescription,
		CardContent,
		CardFooter
	} from '$lib/shadcn/ui/card';
	import Tabs from './Tabs.svelte';
	import Table from './Table.svelte';
	import Progress from './Progress.svelte';
	import Avatar from './Avatar.svelte';
	import { Switch } from '$lib/shadcn/ui/switch';
	import { Input } from '$lib/shadcn/ui/input';

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

<Story name="Main">
	<Screen {sidebarItems} activeNav="Overview" user={{ name: 'User' }} fab={true}>
		<div class="space-y-6">
			<div class="flex items-center justify-between">
				<div class="space-y-1">
					<h1 class="text-3xl font-bold">Control plane overview</h1>
					<p class="text-muted-foreground text-sm">
						Track workers, queue depth, and recent executions from a single entry point.
					</p>
				</div>
				<div class="flex gap-3">
					<Button variant="outline">View queue</Button>
					<Button>New run</Button>
				</div>
			</div>
			<div class="grid grid-cols-3 gap-4">
				<Card
					><CardContent class="pt-6"
						><div class="text-muted-foreground text-sm">Pending jobs</div>
						<div class="mt-1 text-3xl font-bold">14</div></CardContent
					></Card
				>
				<Card
					><CardContent class="pt-6"
						><div class="text-muted-foreground text-sm">Workers online</div>
						<div class="mt-1 text-3xl font-bold">8</div></CardContent
					></Card
				>
				<Card
					><CardContent class="pt-6"
						><div class="text-muted-foreground text-sm">Success rate</div>
						<div class="mt-1 text-3xl font-bold">98.4%</div></CardContent
					></Card
				>
			</div>
			<Card>
				<CardHeader>
					<div class="flex items-center justify-between">
						<CardTitle>Showing 4 recent runs</CardTitle>
						<Button variant="ghost" size="sm">Dispatch</Button>
					</div>
				</CardHeader>
				<CardContent>
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
				</CardContent>
			</Card>
		</div>
	</Screen>
</Story>

<Story name="Chats">
	<Screen {sidebarItems} activeNav="Chats" user={{ name: 'User' }}>
		<div class="space-y-6">
			<div class="flex items-center justify-between">
				<div class="space-y-1">
					<h1 class="text-3xl font-bold">Chats</h1>
					<p class="text-muted-foreground text-sm">Interactive conversations with your agents.</p>
				</div>
				<Button>New Chat</Button>
			</div>
			<div class="grid grid-cols-3 gap-4">
				<Card class="col-span-2">
					<CardHeader><CardTitle>Select a conversation</CardTitle></CardHeader>
					<CardContent class="text-muted-foreground flex h-96 items-center justify-center">
						Choose a conversation from the sidebar
					</CardContent>
				</Card>
				<Card>
					<CardHeader><CardTitle>Recent</CardTitle></CardHeader>
					<CardContent class="space-y-3">
						<div class="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-lg p-2">
							<Avatar name="User 1" size="sm" />
							<div class="min-w-0 flex-1">
								<p class="truncate text-sm font-medium">Project Alpha Discussion</p>
								<p class="text-muted-foreground text-xs">2 messages</p>
							</div>
						</div>
						<div class="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-lg p-2">
							<Avatar name="User 2" size="sm" />
							<div class="min-w-0 flex-1">
								<p class="truncate text-sm font-medium">Bug Report #123</p>
								<p class="text-muted-foreground text-xs">5 messages</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	</Screen>
</Story>

<Story name="Workers">
	<Screen {sidebarItems} activeNav="Workers" user={{ name: 'User' }}>
		<div class="space-y-6">
			<div class="flex items-center justify-between">
				<div class="space-y-1">
					<h1 class="text-3xl font-bold">Workers</h1>
					<p class="text-muted-foreground text-sm">Manage your worker fleet.</p>
				</div>
				<Button>Add Worker</Button>
			</div>
			<Tabs
				tabs={[{ label: 'All workers', active: true }, { label: 'Busy' }, { label: 'Waiting' }]}
			/>
			<div class="grid grid-cols-3 gap-4">
				<Card
					><CardContent class="pt-6"
						><div class="text-muted-foreground text-sm">Running jobs</div>
						<div class="mt-1 text-3xl font-bold">12</div></CardContent
					></Card
				>
				<Card
					><CardContent class="pt-6"
						><div class="text-muted-foreground text-sm">Queued jobs</div>
						<div class="mt-1 text-3xl font-bold">34</div></CardContent
					></Card
				>
				<Card
					><CardContent class="pt-6"
						><div class="text-muted-foreground text-sm">Connected workers</div>
						<div class="mt-1 text-3xl font-bold">8</div></CardContent
					></Card
				>
			</div>
			<div class="grid grid-cols-2 gap-4">
				<Card>
					<CardHeader>
						<CardTitle>worker-sfo-03</CardTitle>
						<CardDescription>Running 3 jobs</CardDescription>
					</CardHeader>
					<CardFooter class="gap-2">
						<Button variant="outline" size="sm">Open shell</Button>
						<Button size="sm">View state</Button>
					</CardFooter>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>worker-nyc-01</CardTitle>
						<CardDescription>Idle</CardDescription>
					</CardHeader>
					<CardFooter class="gap-2">
						<Button variant="outline" size="sm">Drain</Button>
						<Button variant="ghost" size="sm">Details</Button>
					</CardFooter>
				</Card>
			</div>
		</div>
	</Screen>
</Story>

<Story name="Tokens">
	<Screen {sidebarItems} activeNav="Tokens" user={{ name: 'User' }}>
		<div class="space-y-6">
			<div class="flex items-center justify-between">
				<div class="space-y-1">
					<h1 class="text-3xl font-bold">Tokens</h1>
					<p class="text-muted-foreground text-sm">Manage API tokens for programmatic access.</p>
				</div>
				<div class="flex gap-3">
					<Button variant="ghost">?</Button>
					<Button variant="outline">Create Token</Button>
				</div>
			</div>
			<div class="grid grid-cols-3 gap-4">
				<Card
					><CardContent class="pt-6"
						><div class="text-muted-foreground text-sm">Input tokens</div>
						<div class="mt-1 text-3xl font-bold">1.2M</div></CardContent
					></Card
				>
				<Card
					><CardContent class="pt-6"
						><div class="text-muted-foreground text-sm">Output tokens</div>
						<div class="mt-1 text-3xl font-bold">850K</div></CardContent
					></Card
				>
				<Card
					><CardContent class="pt-6"
						><div class="text-muted-foreground text-sm">Total</div>
						<div class="mt-1 text-3xl font-bold">2.05M</div></CardContent
					></Card
				>
			</div>
			<Card>
				<CardHeader>
					<div class="flex items-center justify-between">
						<div>
							<CardTitle>Issued tokens</CardTitle><CardDescription
								>Showing 3 tokens with 2 requiring rotation this month</CardDescription
							>
						</div>
						<Button variant="destructive" size="sm">Revoke selected</Button>
					</div>
				</CardHeader>
				<CardContent>
					<Table
						columns={[
							{ key: 'name', label: 'Name' },
							{ key: 'created', label: 'Created' },
							{ key: 'expires', label: 'Expires' },
							{ key: 'status', label: 'Status' }
						]}
						data={[
							{
								name: 'prod-deploy-key',
								created: '2024-01-15',
								expires: '2024-04-15',
								status: 'Active'
							},
							{
								name: 'ci-pipeline',
								created: '2024-02-01',
								expires: '2024-05-01',
								status: 'Expires soon'
							},
							{
								name: 'staging-access',
								created: '2024-01-20',
								expires: '2024-04-20',
								status: 'Active'
							}
						]}
					/>
				</CardContent>
			</Card>
		</div>
	</Screen>
</Story>

<Story name="Issues">
	<Screen {sidebarItems} activeNav="Issues" user={{ name: 'User' }}>
		<div class="space-y-6">
			<div class="flex items-center justify-between">
				<div class="space-y-1">
					<h1 class="text-3xl font-bold">Issues</h1>
					<p class="text-muted-foreground text-sm">
						Track and resolve issues in your infrastructure.
					</p>
				</div>
			</div>
			<div class="grid grid-cols-3 gap-4">
				<Card>
					<CardHeader><CardDescription>Open findings</CardDescription></CardHeader>
					<CardContent class="pt-2"
						><div class="flex items-center gap-2">
							<span class="text-4xl font-bold">12</span><Badge variant="destructive">+3 today</Badge
							>
						</div></CardContent
					>
				</Card>
				<Card>
					<CardHeader><CardDescription>Blocking issues</CardDescription></CardHeader>
					<CardContent class="pt-2"
						><div class="flex items-center gap-2">
							<span class="text-4xl font-bold">4</span><Badge variant="destructive"
								>2 critical</Badge
							>
						</div></CardContent
					>
				</Card>
				<Card>
					<CardHeader><CardDescription>Affected repos</CardDescription></CardHeader>
					<CardContent class="pt-2"
						><div class="flex items-center gap-2">
							<span class="text-4xl font-bold">7</span><Badge variant="secondary"
								>stable spread</Badge
							>
						</div></CardContent
					>
				</Card>
			</div>
			<Card>
				<CardHeader><CardTitle>Issues</CardTitle></CardHeader>
				<CardContent>
					<Table
						columns={[
							{ key: 'severity', label: 'Severity' },
							{ key: 'title', label: 'Title' },
							{ key: 'repo', label: 'Repository' },
							{ key: 'status', label: 'Status' }
						]}
						data={[
							{
								severity: 'Critical',
								title: 'Memory leak in worker',
								repo: 'worker-service',
								status: 'Open'
							},
							{
								severity: 'High',
								title: 'API rate limit exceeded',
								repo: 'api-gateway',
								status: 'Open'
							},
							{
								severity: 'Medium',
								title: 'Slow query detected',
								repo: 'database',
								status: 'In Progress'
							}
						]}
					/>
				</CardContent>
			</Card>
		</div>
	</Screen>
</Story>

<Story name="Run">
	<Screen {sidebarItems} activeNav="Runs" user={{ name: 'User' }}>
		<div class="space-y-6">
			<div class="flex items-center justify-between">
				<div class="space-y-2">
					<div class="text-muted-foreground flex items-center gap-2 text-sm">
						<span>Runs</span><span>/</span><span class="text-foreground">Run detail</span>
					</div>
					<div class="flex items-center gap-3">
						<h1 class="text-3xl font-bold">Run 01JX4W2R9V8N6M3K1T5P7Q4A2B</h1>
						<Badge>Running</Badge>
					</div>
					<p class="text-muted-foreground text-sm">
						Manual execution started by lucasew for the default workspace target. This run is shown
						independently from any repository binding.
					</p>
				</div>
				<div class="flex gap-3">
					<Button variant="outline">Copy ID</Button>
					<Button variant="outline">Rerun</Button>
					<Button>Open shell</Button>
				</div>
			</div>
			<Tabs tabs={[{ label: 'Overview', active: true }, { label: 'Events' }, { label: 'Logs' }]} />
			<div class="grid grid-cols-3 gap-4">
				<Card
					><CardHeader><CardTitle>Run Summary</CardTitle></CardHeader><CardContent class="space-y-2"
						><div class="flex justify-between text-sm">
							<span>Status</span><Badge>Running</Badge>
						</div>
						<div class="flex justify-between text-sm"><span>Duration</span><span>2m 34s</span></div>
						<div class="flex justify-between text-sm">
							<span>Worker</span><span>worker-sfo-03</span>
						</div></CardContent
					></Card
				>
				<Card
					><CardHeader><CardTitle>Stages</CardTitle></CardHeader><CardContent class="space-y-3"
						><div class="space-y-2">
							<div class="flex justify-between text-sm">
								<span>Setup</span><span>Completed</span>
							</div>
							<Progress value={100} />
						</div>
						<div class="space-y-2">
							<div class="flex justify-between text-sm"><span>Build</span><span>Running</span></div>
							<Progress value={65} />
						</div>
						<div class="space-y-2">
							<div class="flex justify-between text-sm">
								<span>Deploy</span><span>Pending</span>
							</div>
							<Progress value={0} />
						</div></CardContent
					></Card
				>
				<Card
					><CardHeader><CardTitle>Events</CardTitle></CardHeader><CardContent class="space-y-2"
						><div class="text-muted-foreground text-sm">No events yet</div></CardContent
					></Card
				>
			</div>
		</div>
	</Screen>
</Story>

<Story name="InteractiveShell">
	<div class="flex h-screen flex-col bg-black">
		<div class="flex items-center justify-between border-b border-neutral-800 px-4 py-3">
			<div class="font-mono text-sm text-neutral-400">Run: 01JX4W2R9V8N6M3K1T5P7Q4A2B</div>
			<div class="flex items-center gap-3">
				<Badge variant="outline">Connected</Badge>
				<Badge variant="secondary">Running</Badge>
				<Button variant="ghost" size="sm">Close</Button>
			</div>
		</div>
		<div class="flex-1 overflow-auto p-4 font-mono text-sm">
			<div class="text-neutral-400">
				worker-sfo-03@run-01JX4W2R9V8N6M3K1T5P7Q4A2B:~$ env | grep CIBORG
			</div>
			<div class="text-neutral-500">CIBORG_RUN_ID=01JX4W2R9V8N6M3K1T5P7Q4A2B</div>
			<div class="text-neutral-500">CIBORG_SESSION_ID=sh_01J_shell</div>
			<div class="mt-2 text-neutral-400">
				worker-sfo-03@run-01JX4W2R9V8N6M3K1T5P7Q4A2B:~$ tail -f /workspace/.ciborg/stdout.log
			</div>
			<div class="text-neutral-500">[14:23:11] hydrate-inputs completed</div>
			<div class="text-neutral-400">
				worker-sfo-03@run-01JX4W2R9V8N6M3K1T5P7Q4A2B:~$ <span class="animate-pulse">_</span>
			</div>
		</div>
		<div
			class="flex items-center justify-center gap-3 rounded-xl border border-neutral-700 bg-neutral-900 p-3"
		>
			<Button variant="ghost" size="sm">Ctrl</Button>
			<Button variant="ghost" size="sm">Alt</Button>
			<Button variant="ghost" size="sm">Shift</Button>
			<Button variant="ghost" size="sm">Tab</Button>
			<Button variant="ghost" size="sm">Esc</Button>
			<Button variant="ghost" size="sm">▼</Button>
		</div>
	</div>
</Story>

<Story name="AgentSettings">
	<Screen {sidebarItems} activeNav="Workers" user={{ name: 'User' }}>
		<div class="space-y-6">
			<div class="flex items-center justify-between">
				<div class="space-y-1">
					<h1 class="text-3xl font-bold">Agent settings</h1>
					<p class="text-muted-foreground max-w-xl text-sm">
						Tune execution defaults, routing behavior, and reusable presets from the standardized
						control surface.
					</p>
				</div>
				<div class="flex gap-3">
					<Button variant="outline">Reset defaults</Button>
					<Button>Save changes</Button>
				</div>
			</div>
			<Card>
				<CardHeader><CardTitle>Execution defaults</CardTitle></CardHeader>
				<CardContent class="space-y-4">
					<div class="grid grid-cols-2 gap-4">
						<div class="space-y-2">
							<label class="text-sm font-medium">Default timeout</label>
							<Input placeholder="300" />
						</div>
						<div class="space-y-2">
							<label class="text-sm font-medium">Max retries</label>
							<Input placeholder="3" />
						</div>
					</div>
					<div class="space-y-2">
						<label class="text-sm font-medium">Environment variables</label>
						<Input placeholder="KEY=value" />
					</div>
				</CardContent>
			</Card>
			<Card>
				<CardHeader><CardTitle>Routing behavior</CardTitle></CardHeader>
				<CardContent class="space-y-4">
					<div class="flex items-center justify-between">
						<div>
							<p class="text-sm font-medium">Auto-scaling</p>
							<p class="text-muted-foreground text-xs">
								Automatically scale workers based on queue depth
							</p>
						</div>
						<Switch checked />
					</div>
					<div class="flex items-center justify-between">
						<div>
							<p class="text-sm font-medium">Priority routing</p>
							<p class="text-muted-foreground text-xs">
								Route high-priority jobs to dedicated workers
							</p>
						</div>
						<Switch />
					</div>
				</CardContent>
			</Card>
			<Card>
				<CardHeader><CardTitle>Presets</CardTitle></CardHeader>
				<CardContent>
					<Table
						columns={[
							{ key: 'name', label: 'Name' },
							{ key: 'type', label: 'Type' },
							{ key: 'workers', label: 'Workers' }
						]}
						data={[
							{ name: 'Default', type: 'Standard', workers: 'All' },
							{ name: 'High Priority', type: 'Priority', workers: 'dedicated-1, dedicated-2' },
							{ name: 'GPU', type: 'GPU', workers: 'gpu-1, gpu-2' }
						]}
					/>
				</CardContent>
			</Card>
		</div>
	</Screen>
</Story>
