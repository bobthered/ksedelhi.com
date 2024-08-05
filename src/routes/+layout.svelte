<script lang="ts">
	import { type Snippet } from 'svelte';
	import { ChevronDown, Menu, X } from 'lucide-svelte';
	import { A, Button, Container, Div, Header, Nav, Pwa, Title } from '$lib/components';
	import Logo from '$lib/components/Logo.svelte';
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
			{ isVisible: false, label: 'Brother\'s Only', snippet:brothersOnly}
		],
		open:() => navigation.isVisible = true,
		toggle:() => navigation.isVisible = !navigation.isVisible
	});
	let { children } = $props();
</script>

{#snippet brothersOnly()}
	<Div class="flex flex-col px-4">
		<Button>Login</Button>
		<Button>SignUp</Button>
	</Div>
{/snippet}

{#snippet navItem(href:string | undefined, isVisible:boolean | undefined, label:string, snippet:Snippet | undefined, toggle:() => void | undefined)}
	{#if href}
		<A class="px-0 py-6 shadow-none hover:shadow-none focus:shadow-none" {href}>{label}</A>
	{:else}
		<Div class="flex flex-col">
			<Button class="justify-between px-0 py-6 text-current dark:text-current bg-transparent hover:bg-transparent focus:bg-transparent dark:bg-transparent dark:hover:bg-transparent dark:focus:bg-transparent" onclick={toggle}>
				<span>{label}</span>
				<ChevronDown class="h-4 w-4 transition duration-200 {isVisible ? 'rotate-180' : 'rotate-0'}" />
			</Button>
			{#if isVisible && snippet}
					{@render snippet()}
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
	<Div class="fixed top-0 left-0 w-full flex flex-col max-h-screen overflow-auto">
		<Header>
			<Container class="flex flex-row items-center justify-between px-4 py-4 text-sm">
				<A class="shadow-none hover:shadow-none focus:shadow-none" href="/">
					<Logo class="w-28" />
				</A>
				<Div class="hidden lg:flex items-center">
					{#each navigation.items as { href, isVisible, label, snippet }, i}
						{@const toggle = () => {navigation.items[i].isVisible = !navigation.items[i].isVisible}}
						{@render navItem(href, isVisible, label, snippet, toggle)}
					{/each}
				</Div>
				<Button class="px-3 lg:hidden" onclick={navigation.toggle}>
					{#if navigation.isVisible}
						<X />
					{:else}
						<Menu />
					{/if}
				</Button>
			</Container>
		</Header>
		<Nav bind:isVisible={navigation.isVisible} class="px-6 lg:hidden">
			<Div class="divide-y divide-slate-950/10 flex flex-col dark:divide-slate-50/10">
				{#each navigation.items as { href, isVisible, label, snippet }, i}
					{@const toggle = () => {navigation.items[i].isVisible = !navigation.items[i].isVisible}}
					{@render navItem(href, isVisible, label, snippet, toggle)}
				{/each}
			</Div>
		</Nav>
	</Div>
	{#if children}
		{@render children()}
	{/if}
</Div>
