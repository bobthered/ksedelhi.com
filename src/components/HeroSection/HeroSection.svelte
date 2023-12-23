<script lang="ts">
	// imports
	import { current_component } from 'svelte/internal';
	import { twMerge } from 'tailwind-merge';
	import { getEvents } from '$actions';
	import { A, H1, Container, Section } from '$components';
	import { theme } from '$stores';

	// props (external)
	export let alt = '';
	export let src = '';
	export let style: string | undefined = undefined;
	export let use: any[] = [];

	// props (internal)
	const events = getEvents(current_component);

	// props (dynamic)
	$: classes = twMerge(
		'pwa:min-h-[100vh] relative flex min-h-[100dvh] flex-grow items-center justify-center bg-black text-white dark:text-white',
		$$props.class
	);
</script>

<Section class={classes} {style} use={[events, ...use]}>
	<slot name="image">
		<img
			{alt}
			class="absolute left-0 top-0 h-full w-full object-cover object-[50%_75%] opacity-50"
			{src}
		/>
	</slot>
	<div class="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center">
		<Container class="items-center justify-center space-y-6">
			<slot>
				<H1 class="text-center text-white">Want to Join Kappa Sigma Epsilon?</H1>
				<A
					class={twMerge(
						$theme.button,
						$theme.buttonLight,
						'no-underline hover:text-white dark:hover:text-slate-800'
					)}
					href="/join"
				>
					Join Today
				</A>
			</slot>
		</Container>
	</div>
</Section>
