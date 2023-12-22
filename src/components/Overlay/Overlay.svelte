<script lang="ts">
	// imports
	import { current_component } from 'svelte/internal';
	import { twMerge } from 'tailwind-merge';
	import { getEvents } from '$actions';
	import { Button } from '$components';
	import { theme } from '$stores';

	// props (external)
	export const close = () => (isOpen = false);
	export let isOpen = false;
	export let style: string | undefined = undefined;
	export let use: any[] = [];

	// props (internal)
	const events = getEvents(current_component);

	// props (dynamic)
	$: classes = twMerge(
		'',
		$theme.overlay,
		isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
		$$props.class
	);
</script>

<Button class={classes} on:click={close} {style} use={[events, ...use]}>
	<slot />
</Button>
