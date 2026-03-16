<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import '../../routes/layout.css';
	import {
		Card,
		CardHeader,
		CardTitle,
		CardDescription,
		CardContent,
		CardFooter
	} from '$lib/shadcn/ui/card';
	import Sidebar from './Sidebar.svelte';

	const { Story } = defineMeta({
		title: 'Ciborg/Molecules',
		tags: ['autodocs'],
		parameters: {
			layout: 'centered'
		}
	});
</script>

<Story name="Card">
	<div class="p-4">
		<Card>
			<CardHeader>
				<CardTitle>Card Title</CardTitle>
				<CardDescription>Card description goes here.</CardDescription>
			</CardHeader>
			<CardContent>
				<p class="text-muted-foreground text-sm">Card content goes here.</p>
			</CardContent>
			<CardFooter>
				<p class="text-muted-foreground text-xs">Card footer</p>
			</CardFooter>
		</Card>
	</div>
</Story>

<Story name="Sidebar">
	<div class="h-96">
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
				},
				{
					label: 'Tokens',
					shortcut: '⌘5',
					icon: 'M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z'
				}
			]}
			user={{ name: 'User' }}
		/>
	</div>
</Story>
