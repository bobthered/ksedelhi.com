<script lang="ts">
	// imports
	import { current_component } from 'svelte/internal';
	import { twMerge } from 'tailwind-merge';
	import { getEvents } from '$actions';
	import { Button, ProgressIndicator } from '$components';
	import { slide } from '$transitions';

	// props (external)
	export let disabled: 'disabled' | undefined = undefined;
	export let style: string | undefined = undefined;
	export let type = 'submit';
	export let use: any[] = [];

	// props (internal)
	const events = getEvents(current_component);

	// props (dynamic)
	$: classes = twMerge(
		'relative',
		disabled === undefined ? '' : 'text-transparent dark:text-transparent',
		$$props.class
	);
</script>

<Button class={classes} {disabled} {style} {type} use={[events, ...use]}>
	<div class="relative">
		{#if disabled !== undefined}
			<div
				class={twMerge(
					'absolute left-0 top-0 flex h-full w-full items-center justify-center transition duration-200'
				)}
				transition:slide
			>
				<ProgressIndicator class="aspect-square h-full text-slate-50 dark:text-slate-800" />
			</div>
		{/if}
		<slot />
	</div>
</Button>
