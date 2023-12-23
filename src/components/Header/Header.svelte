<script lang="ts">
	// imports
	import { current_component } from 'svelte/internal';
	import { Header } from 'sveltewind/components';
	import { twMerge } from 'tailwind-merge';
	import { getEvents } from '$actions';
	import { A, Container, Drawer, Logo, Nav, NavToggleButton, Portal } from '$components';
	import { nav, theme } from '$stores';

	// handlers
	const mousemoveHandler = (e: MouseEvent) => {
		mouse.x = e.clientX;
		mouse.y = e.clientY;
	};

	// props (external)
	export let use: any[] = [];

	// props (internal)
	const events = getEvents(current_component);
	const mouse = {
		start: 165,
		x: 0,
		y: 0
	};
	let outerWidth = 0;
	let previousScrollY = 0;
	let scrollDirection: 'down' | 'up' = 'down';
	let scrollStart = 200;
	let scrollY = 0;

	// props (dynamic
	$: if (scrollY !== undefined) {
		scrollDirection = previousScrollY < scrollY ? 'down' : 'up';
		previousScrollY = scrollY;
	}
	$: top = outerWidth < 1024 || mouse.y < mouse.start ? 0 : Math.min(0, -(scrollY - scrollStart));
	$: classes = twMerge($$props.class);
</script>

<svelte:window bind:outerWidth bind:scrollY on:mousemove={mousemoveHandler} />

<Header class={classes} style="top:{top}px" use={[events, ...use]}>
	<slot>
		<Container>
			<div class="flex flex-col">
				<div class="flex items-center justify-between">
					<A
						class="-m-3 border-0 p-3 hover:bg-slate-800/10 focus:bg-slate-800/10 dark:hover:bg-white/5 dark:focus:bg-white/5"
						href="/"
					>
						<Logo class="h-[2rem] w-auto lg:hidden" />
						<Logo class="hidden lg:block" variant="large" />
					</A>
					<NavToggleButton />
					<A
						class={twMerge(
							$theme.button,
							'hidden no-underline hover:text-white lg:flex dark:hover:text-slate-800'
						)}
						href="/sign-in"
					>
						Brother's Only
					</A>
				</div>
				<Drawer bind:isOpen={$nav.isOpen} class="w-full max-w-[calc(100dvw_-_3rem)] lg:hidden">
					<Nav />
				</Drawer>
				<Nav class="hidden lg:flex lg:flex-row" />
			</div>
		</Container>
	</slot>
</Header>
