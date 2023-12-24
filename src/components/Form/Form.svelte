<script lang="ts">
	// imports
	import { current_component } from 'svelte/internal';
	import { Form } from 'sveltewind/components';
	import { twMerge } from 'tailwind-merge';
	import { getEvents } from '$actions';
	import { applyAction, enhance } from '$app/forms';
	import { goto, invalidateAll } from '$app/navigation';
	import { SubmitButton, Toast } from '$components';
	import { theme, toast as toastStore } from '$stores';

	// props (external)
	export let disabled: 'disabled' | undefined = undefined;
	export let form;
	export let enhanceHandler = () => {
		disabled = 'disabled';
		return async ({ result }) => {
			disabled = undefined;
			if (result.type === 'redirect') return goto(result.location);
			if (result.type === 'success') await invalidateAll();
			toastStore.custom(Toast, {
				componentProps: { message: 'Successfully received comment', variant: 'success' }
			});
			await applyAction(result);
		};
	};
	export let toast = '';
	export let style: string | undefined = undefined;
	export let use: any[] = [[enhance, enhanceHandler]];

	// props (internal)
	const events = getEvents(current_component);

	// props (dynamic)
	$: classes = twMerge('', $theme.Form, $$props.class);
</script>

<Form class={classes} {disabled} {style} use={[events, ...use]}>
	<slot {disabled} {SubmitButton} />
</Form>
