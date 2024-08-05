<script lang="ts">
	import { type Snippet } from 'svelte';
	import { fly, slide } from 'svelte/transition';
	import { ChevronDown } from 'lucide-svelte';
	import { twMerge } from 'tailwind-merge';
	import { A, Button, Card, Container, Div, Header, Logo, Nav, Pwa, Title } from '$lib/components';
	import { theme } from '$lib/theme';
	import '../app.css';

	// props
	const navigation = $state({
		close: () => navigation.isVisible = false,
		currentItemIndex: -1,
		isVisible: false,
		items: [
			{ href: '/about-us', label: 'About Us' },
			{ href: '/active-chapter', label: 'Active Chapter' },
			{ href: '/donate-charities', label: 'Donate / Charities' },
			{ href: '/events', label: 'Events' },
			{ href: '/join', label: 'Join' },
			{ href: '/gallery', label: 'Gallery' },
			{ href: '/contact', label: 'Contact' },
			{ href: '/brothers-only', label: 'Brother\'s Only' },
		],
		open:() => navigation.isVisible = true,
		toggle:() => navigation.isVisible = !navigation.isVisible
	});
	let { children } = $props();
</script>

{#snippet navItem(close:() => void | undefined, href:string | undefined, isVisible:boolean | undefined, label:string, open:() => void | undefined, snippet:Snippet | undefined, toggle:() => void | undefined)}
	{#if href}
		<A class="px-0 py-6 xl:px-6 xl:py-3 shadow-none hover:shadow-none focus:shadow-none flex items-center" {href} onclick={navigation.close}>{label}</A>
	{:else if isVisible !== undefined}
		<Div class="flex xl:hidden flex-col relative">
			<Button class="justify-between px-0 py-6 xl:px-6 xl:py-3 xl:space-x-2 text-current dark:text-current bg-transparent hover:bg-transparent focus:bg-transparent dark:bg-transparent dark:hover:bg-transparent dark:focus:bg-transparent" onclick={toggle}>
				<span>{label}</span>
				<ChevronDown class="h-4 w-4 transition duration-200 {isVisible ? 'rotate-180' : 'rotate-0'}" />
			</Button>
			{#if snippet}
				<Div class="flex flex-col" {isVisible} transition={[slide, {axis:'y', duration:200}]}>
					{@render snippet()}
				</Div>
			{/if}
		</Div>
		<Div class="hidden xl:flex flex-col relative" onmouseenter={open} onmouseleave={close}>
			<Button class="justify-between px-0 py-6 xl:px-6 xl:py-3 xl:space-x-2 text-current dark:text-current bg-transparent hover:bg-transparent focus:bg-transparent dark:bg-transparent dark:hover:bg-transparent dark:focus:bg-transparent">
				<span>{label}</span>
				<ChevronDown class="h-4 w-4 transition duration-200 {isVisible ? 'rotate-180' : 'rotate-0'}" />
			</Button>
			{#if snippet}
				<Card class="flex flex-col absolute bottom-0 right-0 translate-y-full" {isVisible} transition={[slide, {axis:'y', duration:200}]}>
					{@render snippet()}
				</Card>
			{/if}
		</Div>
	{/if}
{/snippet}

<Pwa themeColor="#292929">
	<link rel="alternate icon" href="/icons/icon-16x16.png" />
	<link rel="apple-touch-icon" href="/icons/icon-apple-touch.png" />
	<link rel="icon" type="image/svg+xml" href="/icons/icon.svg" />
	<link rel="manifest" href="/manifest.json" />
	<meta
		name="viewport"
		content="width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover"
	/>
	<meta name="theme-color" content="#292929" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
</Pwa>
<Title base="KΣE at SUNY Delhi" />

<Div class="flex max-h-screen min-h-screen flex-col overflow-auto">
	<Div class="fixed top-0 left-0 w-full flex flex-col max-h-screen overflow-auto xl:overflow-visible">
		<Header class="z-[1]">
			<Container class="flex flex-row justify-between px-4 py-0 text-sm">
				<A class="shadow-none hover:shadow-none focus:shadow-none py-4" href="/">
					<Logo class="w-28" />
				</A>
				<Div class="hidden xl:flex">
					{#each navigation.items as { href, isVisible, label, snippet }, i}
						{@const close = () => {navigation.items[i].isVisible = false}}
						{@const open = () => {navigation.items[i].isVisible = true}}
						{@const toggle = () => {navigation.items[i].isVisible = !navigation.items[i].isVisible}}
						{@render navItem(close, href, isVisible, label, open, snippet, toggle)}
					{/each}
				</Div>
				<Button class="px-3 xl:hidden self-center" onclick={navigation.toggle}>
					<Div class="w-4 aspect-square relative">
						<Div class={twMerge("w-full h-[2px] absolute top-1/2 left-0 transition duration-200 bg-current", navigation.isVisible ? '-translate-y-1/2 rotate-45' : 'translate-y-[calc(-50%_-_4px)]')} />
						<Div class={twMerge("w-full h-[2px] absolute top-1/2 left-0 transition duration-200 bg-current", navigation.isVisible ? '-translate-y-1/2 -rotate-45' : 'translate-y-[calc(-50%_+_4px)]')} />
					</Div>
				</Button>
			</Container>
		</Header>
		<Nav bind:isVisible={navigation.isVisible} class="px-6 xl:hidden" transition={[fly, {duration:200, opacity:1, y:'-100%'}]}>
			<Div class="divide-y divide-slate-950/10 flex flex-col dark:divide-slate-50/10">
				{#each navigation.items as { href, isVisible, label, snippet }, i}
					{@const close = () => {navigation.items[i].isVisible = false}}
					{@const open = () => {navigation.items[i].isVisible = true}}
					{@const toggle = () => {navigation.items[i].isVisible = !navigation.items[i].isVisible}}
					{@render navItem(close, href, isVisible, label, open, snippet, toggle)}
				{/each}
			</Div>
		</Nav>
	</Div>
	{#if children}
		{@render children()}
	{/if}
</Div>
