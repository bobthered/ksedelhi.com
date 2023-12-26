<script lang="ts">
	// imports
	import { current_component } from 'svelte/internal';
	import { Form } from 'sveltewind/components';
	import { twMerge } from 'tailwind-merge';
	import { getEvents } from '$actions';
	import { applyAction, enhance } from '$app/forms';
	import { goto, invalidateAll } from '$app/navigation';
	import { SubmitButton } from '$components';
	import { theme, toast } from '$stores';

	// props (external)
	export let disabled: 'disabled' | undefined = undefined;
	export let enhanceHandler = () => {
		disabled = 'disabled';
		return async ({ result }) => {
			disabled = undefined;
			if (result.type === 'redirect') return goto(result.location);
			if (result.type === 'success') await successHandler(result);
		};
	};
	export let successHandler = async (result) => {
		await invalidateAll();
		toast(successToastMessage, { variant: 'success' });
		await applyAction(result);
	};
	export let successToastMessage = 'Successfully received comment';
	export let style: string | undefined = undefined;
	export let use: any[] = [[enhance, enhanceHandler]];

	// props (internal)
	const events = getEvents(current_component);

	// props (dynamic)
	$: classes = twMerge('', $theme.Form, $$props.class);
</script>

<Form {...$$restProps} class={classes} {disabled} {style} use={[events, ...use]}>
	<slot {disabled} {SubmitButton} />
</Form>
