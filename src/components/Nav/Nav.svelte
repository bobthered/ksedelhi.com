<script lang="ts">
	// imports
	import { current_component } from 'svelte/internal';
	import { Nav } from 'sveltewind/components';
	import { twMerge } from 'tailwind-merge';
	import { getEvents } from '$actions';
	import { A } from '$components';
	import { nav, theme } from '$stores';
	import { links } from './links';
	import { page } from '$app/stores';

	// props (external)
	export let style: string | undefined = undefined;
	export let use: any[] = [];

	// props (internal)
	const events = getEvents(current_component);

	// props (dynamic)
	$: classes = twMerge($theme.nav, $$props.class);
</script>

<Nav class={classes} bind:isOpen={$nav.isOpen} {style} use={[events, ...use]}>
	<slot>
		{#each links as { href, label, ...link }}
			<A
				class={twMerge(
					'px-6 py-3 pr-[4.5rem] text-lg no-underline',
					$page.url.pathname === href
						? 'cursor-default bg-slate-800 text-white hover:text-white focus:text-white lg:bg-transparent lg:text-current lg:hover:text-current lg:focus:text-current dark:bg-slate-50 dark:text-slate-800 dark:hover:text-slate-800 dark:focus:text-slate-800 dark:lg:bg-transparent dark:lg:text-current dark:lg:hover:text-current dark:lg:focus:text-current'
						: 'hover:bg-slate-800/10 focus:bg-slate-800/10 lg:opacity-70 lg:hover:opacity-100 dark:hover:bg-slate-50/5 dark:focus:bg-slate-50/5',
					'lg:pr-6 lg:text-sm lg:font-medium',
					link?.class
				)}
				{href}
				tabindex={!$nav.isOpen || $page.url.pathname === href ? '-1' : undefined}
			>
				{label}
			</A>
		{/each}
	</slot>
</Nav>
