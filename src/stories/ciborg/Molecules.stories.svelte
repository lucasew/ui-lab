<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import '../../routes/layout.css';
	import './ciborg.css';
	import Card from './Card.svelte';
	import Sidebar from './Sidebar.svelte';
	import Button from './Button.svelte';
	import Badge from './Badge.svelte';

	const { Story } = defineMeta({
		title: 'Ciborg/Molecules',
		tags: ['autodocs'],
		parameters: {
			layout: 'centered'
		}
	});
</script>

<Story name="Metric Card">
	<div class="w-[360px] rounded-2xl bg-[var(--background)] p-6">
		<Card>
			{#snippet header()}
				<div class="space-y-1">
					<div class="text-sm text-[var(--muted-foreground)]">Connected workers</div>
					<div class="text-3xl font-semibold text-[var(--foreground)]">8</div>
				</div>
			{/snippet}
			<div class="flex items-center justify-between">
				<p class="text-sm text-[var(--card-foreground)]">Across all regions and ephemeral pools.</p>
				<Badge label="Healthy" variant="success" />
			</div>
		</Card>
	</div>
</Story>

<Story name="Worker Card">
	<div class="w-[480px] rounded-2xl bg-[var(--background)] p-6">
		<Card>
			{#snippet header()}
				<div class="flex items-start justify-between gap-4">
					<div class="space-y-1">
						<h3 class="text-lg font-semibold text-[var(--foreground)]">worker-eu-central-1</h3>
						<p class="text-sm text-[var(--muted-foreground)]">
							Connected 19 minutes ago. This worker does not publish hardware specs.
						</p>
					</div>
					<Badge label="Waiting" variant="neutral" />
				</div>
			{/snippet}
			<div class="space-y-2">
				<p class="text-sm text-[var(--card-foreground)]">
					Status: idle until requested by the next claimed run.
				</p>
				<p class="text-sm text-[var(--muted-foreground)]">
					Queue: 0 queued, 3 pending jobs in the last 12h.
				</p>
			</div>
			{#snippet footer()}
				<div class="flex gap-3">
					<Button variant="outline">Open shell</Button>
					<Button>View state</Button>
				</div>
			{/snippet}
		</Card>
	</div>
</Story>

<Story name="Sidebar">
	<div class="h-[680px] w-[256px] overflow-hidden rounded-2xl bg-[var(--background)]">
		<Sidebar
			items={[
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
				}
			]}
			user={{ name: 'John Doe' }}
		/>
	</div>
</Story>
