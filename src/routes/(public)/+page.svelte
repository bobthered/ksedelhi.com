<script lang="ts">
	import { A, Button, Container, Div, H1 } from '$lib/components';
	import { theme } from '$lib/theme';
	import { fly } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	// props
	const hero = $state({
		currentIndex: 0,
		slides: [
			{
				title: 'Want to Join Kappa Sigma Epsilon?',
				anchor: { href: '/join', label: 'Join Today' },
				imgSrc:
					'https://ksedelhi.s3.amazonaws.com/heroes/priscilla-du-preez-XkKCui44iM0-unsplash.jpg'
			},
			{
				title: 'Housing Like no Other',
				anchor: { href: '/about-us/housing', label: 'Housing Benefits' },
				imgSrc: 'https://ksedelhi.s3.amazonaws.com/heroes/ian-keefe-OgcJIKRnRC8-unsplash.jpg'
			},
			{
				title: 'kΣE endowment fund',
				anchor: { href: '/about-us/endowment-fund', label: 'Help a Future Student' },
				imgSrc: 'https://ksedelhi.s3.amazonaws.com/heroes/nima-sarram-GLE2B4BZQqs-unsplash.jpg'
			}
		]
	});
</script>

<Div
	class="min-w-screen max-w-screen relative flex max-h-screen min-h-screen overflow-hidden bg-black text-slate-50"
>
	{#each hero.slides as { title, anchor, imgSrc }, i}
		{#if i === hero.currentIndex}
			<div
				class="absolute left-0 top-0 h-full w-full"
				in:fly={{ duration: 200, opacity: 1, x: '100%' }}
				out:fly={{ duration: 200, opacity: 1, x: '-50%' }}
			>
				<img alt={title} class="h-full w-full object-cover opacity-30" src={imgSrc} />
				<Container
					class="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col space-y-12 px-4 text-center md:items-center"
				>
					<H1 class="uppercase lg:text-6xl">{title}</H1>
					<A
						class={twMerge(
							theme.get('button'),
							'bg-slate-100 text-slate-800 shadow-none hover:bg-slate-200 hover:text-current hover:shadow-none focus:bg-slate-200 focus:shadow-none dark:shadow-none'
						)}
						href={anchor.href}>{anchor.label}</A
					>
				</Container>
			</div>
		{/if}
	{/each}
	<Div class="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center space-x-4 lg:bottom-12">
		{#each hero.slides as _, i}
			<Button
				class={twMerge(
					'rounded-full py-2 ring ring-slate-50 transition-all duration-200 hover:ring-slate-50 focus:ring-slate-50',
					i === hero.currentIndex
						? 'bg-slate-50 px-4 hover:bg-slate-50 focus:bg-slate-50'
						: 'bg-transparent px-2 hover:bg-transparent focus:bg-transparent dark:bg-transparent dark:hover:bg-transparent dark:focus:bg-transparent'
				)}
				onclick={() => (hero.currentIndex = i)}
			></Button>
		{/each}
	</Div>
</Div>
