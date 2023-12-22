<script lang="ts">
	// imports
	import { current_component } from 'svelte/internal';
	import { twMerge } from 'tailwind-merge';
	import { getEvents } from '$actions';
	import { Card, Overlay } from '$components';
	import { theme } from '$stores';

	// props (external)
	export const close = () => (isOpen = false);
	export let isOpen = false;
	export const open = () => (isOpen = true);
	export let position: 'bottom' | 'left' | 'right' | 'top' = 'right';
	export let style: string | undefined = undefined;
	export const toggle = () => (isOpen = !isOpen);
	export let use: any[] = [];

	// props (internal)
	const events = getEvents(current_component);
	let positionClasses = {
		default: '',
		false: '',
		true: ''
	};

	// props (dynamic)
	$: if (position === 'bottom')
		positionClasses = {
			default:
				'pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)] pb-[env(safe-area-inset-bottom)] bottom-0 left-0 max-w-[100dvh] min-w-[100dvh]',
			false: 'translate-y-full',
			true: 'translate-y-0'
		};
	$: if (position === 'left')
		positionClasses = {
			default:
				'pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)] top-0 left-0 min-h-[100dvh] max-h-[100dvh]',
			false: '-translate-x-full',
			true: 'translate-x-0'
		};
	$: if (position === 'right')
		positionClasses = {
			default:
				'pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] pr-[env(safe-area-inset-right)] top-0 right-0 min-h-[100dvh] max-h-[100dvh]',
			false: 'translate-x-full',
			true: 'translate-x-0'
		};
	$: if (position === 'top')
		positionClasses = {
			default:
				'pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)] pt-[env(safe-area-inset-top)] top-0 left-0 max-w-[100dvh] min-w-[100dvh]',
			false: '-translate-y-full',
			true: 'translate-y-0'
		};
	$: classes = twMerge(
		$theme.drawer,
		positionClasses.default,
		positionClasses[isOpen ? 'true' : 'false'],
		$$props.class
	);
</script>

<Overlay bind:isOpen />
<Card class={classes} {style} use={[events, ...use]}>
	<slot />
</Card>
