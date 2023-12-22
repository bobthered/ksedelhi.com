<script lang="ts">
	// imports
	import { current_component } from 'svelte/internal';
	import { Header } from 'sveltewind/components';
	import { twMerge } from 'tailwind-merge';
	import { getEvents } from '$actions';
	import { A, Button, Container, Drawer, Logo, Nav, NavToggleButton } from '$components';
	import { nav, theme } from '$stores';

	// props (external)
	export let style: string | undefined = undefined;
	export let use: any[] = [];

	// props (internal)
	const events = getEvents(current_component);

	// props (dynamic)
	$: classes = twMerge($$props.class);
</script>

<Header class={classes} {style} use={[events, ...use]}>
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
