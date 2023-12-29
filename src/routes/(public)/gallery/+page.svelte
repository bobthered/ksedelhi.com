<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { tilt } from '$actions';
	import { Button, Card, Container, Overlay, Portal, Section } from '$components';
	import { theme } from '$stores';

	// props (external)
	export let data;

	// props (internal)
	const modal = {
		close: () => (modal.isOpen = false),
		isOpen: false,
		open: () => (modal.isOpen = true),
		src: '',
		toggle: () => (modal.isOpen = !modal.isOpen)
	};
</script>

<Section class="lg:py-[15rem]">
	<Container>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{#each data.photos as { src }}
				<Button
					class={twMerge($theme.card, 'overflow-hidden p-0')}
					on:click={() => {
						modal.src = src;
						modal.open();
					}}
					use={[[tilt, { strength: 0.25 }]]}
				>
					<img alt={src} class="aspect-square object-cover object-center" {src} />
				</Button>
			{/each}
		</div>
	</Container>
</Section>

<Portal>
	<Overlay
		class={modal.isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}
		on:click={modal.close}
	/>
	<div
		class={twMerge(
			'pointer-events-none fixed left-0 top-0 z-[2] flex h-full max-h-[100dvh] w-full max-w-[100dvw] items-center justify-center p-6 transition duration-200',
			modal.isOpen ? 'opacity-100' : 'opacity-0'
		)}
	>
		<img
			alt={modal.src}
			class={twMerge(
				$theme.card,
				'max-h-full max-w-full overflow-hidden object-contain p-0',
				modal.isOpen ? 'pointer-events-auto' : 'pointer-events-none'
			)}
			src={modal.src}
		/>
	</div>
</Portal>
