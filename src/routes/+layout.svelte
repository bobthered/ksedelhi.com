<script lang="ts">
	import { type Snippet } from 'svelte';
	import { fly, slide } from 'svelte/transition';
	import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-svelte';
	import { twMerge } from 'tailwind-merge';
	import {page} from '$app/stores'
	import { A, Button, Card, Container, Div, H2, H4, Header, Logo, Nav, P, Pwa, Section, Title } from '$lib/components';
	import { theme } from '$lib/theme';
	import '../app.css';
	import { DateTime } from 'luxon';

	// props
	let events: {
		id: string;
		content: string;
		dateTime: Date;
		featured: boolean;
		public: boolean;
		slug: string;
		title: string;
	}[] = $state([]);
	const navigation = $state({
		close: () => navigation.isVisible = false,
		currentItemIndex: -1,
		isVisible: false,
		items: [
			{ isVisible: false, label: 'About Us', snippet:aboutUsNavItem },
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
	
	let photos: {
		currentIndex: number;
		delay: number;
		items: {
			id: string;
			dateAdded: Date;
			public: boolean;
			src: string;
			userId: string;
		}[];
		next: () => void;
		previous: () => void;
		startTimeStamp: number;
		timerFunction: (timestamp: number) => void;
		timeStamp: number;
		x: {
			in: string;
			out: string;
		};
	} = $state({
		currentIndex: 0,
		delay: 5000,
		items: [],
		next: () => {
			photos.x.in = '100%';
			photos.x.out = '-100%';
			photos.currentIndex++;
			if (photos.currentIndex > photos.items.length - 1) photos.currentIndex = 0;
			photos.startTimeStamp = photos.timeStamp;
		},
		previous: () => {
			photos.x.in = '-100%';
			photos.x.out = '100%';
			photos.currentIndex--;
			if (photos.currentIndex < 0) photos.currentIndex = photos.items.length - 1;
			photos.startTimeStamp = photos.timeStamp;
		},
		startTimeStamp: 0,
		timerFunction: (timeStamp: number) => {
			photos.timeStamp = timeStamp;
			if (photos.startTimeStamp === 0) photos.startTimeStamp = photos.timeStamp;
			const elapsed = timeStamp - photos.startTimeStamp;

			if (elapsed > photos.delay) photos.next();

			requestAnimationFrame(photos.timerFunction);
		},
		timeStamp: 0,
		x: {
			in: '100%',
			out: '-100%'
		}
	});
	let { children, data } = $props();

	// effects
	$effect(() => {
		if (events.length === 0 && data.events.length !== 0) events = data.events;
		if (photos.items.length === 0 && data.photos.length !== 0) {
			photos.items = data.photos;
			requestAnimationFrame(photos.timerFunction);
		}
	});
</script>

{#snippet aboutUsNavItem()}
	{@const subNav = [
		{href: '/about-us', label:'Overview'},
		{href: '/about-us/endowment-fund', label:'Endowment Fund'},
		{href: '/about-us/history', label:'History'},
		{href: '/about-us/housing', label:'Housing'},
		{href: '/about-us/student-health', label:'Student Health'},
	]}
	<Div class="border-l border-slate-950/10 lg:border-none dark:border-slate-50/10 flex flex-col">
		{#each subNav as {href, label}}
			<A class={twMerge("px-4 lg:px-0 py-2 whitespace-nowrap hover:shadow-current focus:shadow-current", $page.url.pathname !== href ? 'shadow-none' : 'shadow-current')} {href} onclick={navigation.close}>{label}</A>
		{/each}
	</Div>
{/snippet}

{#snippet navItem(close:(() => void) | undefined, href:string | undefined, isVisible:boolean | undefined, label:string, open:(() => void) | undefined, snippet:Snippet | undefined, toggle:(() => void) | undefined)}
	{#if href}
		<A class={twMerge("px-0 py-6 xl:px-6 xl:py-3 hover:shadow-current focus:shadow-current flex items-center", $page.url.pathname !== href ? 'shadow-none' : 'shadow-current')} {href} onclick={navigation.close}>{label}</A>
	{:else if isVisible !== undefined}
		<Div class="flex xl:hidden flex-col relative">
			<Button class="hover:text-current focus:text-current dark:hover:text-current dark:focus:text-current justify-between px-0 py-6 xl:px-6 xl:py-3 xl:space-x-2 text-current dark:text-current bg-transparent hover:bg-transparent focus:bg-transparent dark:bg-transparent dark:hover:bg-transparent dark:focus:bg-transparent" onclick={toggle}>
				<span>{label}</span>
				<ChevronDown class="h-4 w-4 transition duration-200 {isVisible ? 'rotate-180' : 'rotate-0'}" />
			</Button>
			{#if snippet}
				<Div class="flex flex-col pb-6" {isVisible} transition={[slide, {axis:'y', duration:200}]}>
					{@render snippet()}
				</Div>
			{/if}
		</Div>
		<Div class="hidden xl:flex flex-col relative justify-center" onmouseenter={open} onmouseleave={close}>
			<Button class="hover:text-current focus:text-current dark:hover:text-current dark:focus:text-current justify-between px-0 py-6 xl:px-6 xl:py-3 xl:space-x-2 text-current dark:text-current bg-transparent hover:bg-transparent focus:bg-transparent dark:bg-transparent dark:hover:bg-transparent dark:focus:bg-transparent">
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
	<Div class="fixed top-0 left-0 w-full flex flex-col max-h-screen overflow-auto xl:overflow-visible z-[1]">
		<Header class="z-[1]">
			<Container class="flex flex-row justify-between px-4 py-0 text-sm">
				<A class="shadow-none hover:shadow-none focus:shadow-none py-4" href="/">
					<Logo class="lg:hidden h-[2.5rem]" size="small" />
					<Logo class="hidden lg:flex" />
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

	<Section class="p-0 lg:p-0">
		<Div class="relative h-[30rem] overflow-hidden">
			{#each [...photos.items, ...photos.items] as photo, i}
				{#if i >= photos.currentIndex && i <= photos.currentIndex + 3}
					<img
						alt={photo.src}
						class="absolute top-0 flex h-full w-full object-cover opacity-30 md:hidden"
						in:fly={{ duration: 200, opacity: 1, x: photos.x.in }}
						out:fly={{ duration: 200, opacity: 1, x: photos.x.out }}
						style="left:{((i - photos.currentIndex) * 100) / 1}%;"
						src={photo.src}
					/>
					<img
						alt={photo.src}
						class="absolute top-0 hidden h-full w-1/2 object-cover opacity-30 md:flex lg:hidden"
						in:fly={{ duration: 200, opacity: 1, x: photos.x.in }}
						out:fly={{ duration: 200, opacity: 1, x: photos.x.out }}
						style="left:{((i - photos.currentIndex) * 100) / 2}%;"
						src={photo.src}
					/>
					<img
						alt={photo.src}
						class="absolute top-0 hidden h-full w-1/3 object-cover opacity-30 lg:flex"
						in:fly={{ duration: 200, opacity: 1, x: photos.x.in }}
						out:fly={{ duration: 200, opacity: 1, x: photos.x.out }}
						style="left:{((i - photos.currentIndex) * 100) / 3}%;"
						src={photo.src}
					/>
				{/if}
			{/each}
			<Div
				class="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center space-y-8"
			>
				<A
					class={twMerge(
						theme.get('button'),
						'bg-slate-100 text-slate-800 shadow-none hover:bg-slate-200 hover:text-current hover:shadow-none focus:bg-slate-200 focus:shadow-none dark:shadow-none'
					)}
					href="/gallery">Explore Our Gallery</A
				>
			</Div>
			<Button
				class="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-100 px-3 text-slate-800 shadow-none hover:bg-slate-200 hover:text-current hover:shadow-none focus:bg-slate-200 focus:shadow-none dark:shadow-none"
				onclick={photos.previous}
			>
				<ChevronLeft class="h-4 w-4" />
			</Button>
			<Button
				class="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-100 px-3 text-slate-800 shadow-none hover:bg-slate-200 hover:text-current hover:shadow-none focus:bg-slate-200 focus:shadow-none dark:shadow-none"
				onclick={photos.next}
			>
				<ChevronRight class="h-4 w-4" />
			</Button>
		</Div>
	</Section>

	<Section>
		<Container class="flex flex-col space-y-16 px-4 lg:items-center">
			<Div class="flex flex-col items-center">
				<H2 class="relative">
					Upcoming Events
					<Div class="absolute -bottom-4 left-1/2 h-[2px] w-[5rem] -translate-x-1/2 bg-current" />
				</H2>
			</Div>
			<Div
				class="flex flex-col divide-y divide-slate-950/10 lg:grid lg:grid-cols-3 lg:gap-12 lg:space-y-0 lg:divide-y-0 xl:gap-16 dark:divide-slate-50/10"
			>
				{#each events as event}
					<Div class="flex flex-col py-8">
						<H4 class="leading-[1.5em]">{event.title}</H4>
						<P class="mb-4 opacity-50"
							>{DateTime.fromJSDate(event.dateTime).toFormat('EEE. MMMM d, yyyy')}</P
						>
						<P class="mb-4 line-clamp-3 lg:mb-8">{event.content}</P>
						<A
							class={twMerge(
								theme.get('button'),
								'shadow-none hover:shadow-none focus:shadow-none lg:self-end'
							)}
							href="/events/{event.slug}">Read More</A
						>
					</Div>
				{/each}
			</Div>
			<A
				class={twMerge(theme.get('button'), 'shadow-none hover:shadow-none focus:shadow-none')}
				href="/events">See All Events</A
			>
		</Container>
	</Section>

	<Section class="bg-slate-900 text-sm text-white dark:bg-slate-100 dark:text-slate-800">
		<Container class="px-4 text-center lg:text-start">
			Copyright <A
				class="hover:text-white focus:text-white dark:hover:text-slate-800 dark:focus:text-slate-800"
				href="/">ksedelhi.com</A
			> 2020. All Rights Reserved
		</Container>
	</Section>
</Div>
