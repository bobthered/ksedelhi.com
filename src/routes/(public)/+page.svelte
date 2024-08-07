<script lang="ts">
	import { A, Button, Container, Div, H1, H2, P, Section } from '$lib/components';
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
				title: 'Housing Like No Other',
				anchor: { href: '/about-us/housing', label: 'Housing Benefits' },
				imgSrc: 'https://ksedelhi.s3.amazonaws.com/heroes/ian-keefe-OgcJIKRnRC8-unsplash.jpg'
			},
			{
				title: 'KΣE Endowment Fund',
				anchor: { href: '/about-us/endowment-fund', label: 'Help a Future Student' },
				imgSrc: 'https://ksedelhi.s3.amazonaws.com/heroes/nima-sarram-GLE2B4BZQqs-unsplash.jpg'
			}
		]
	});
</script>

<Section
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
					<H1 class="leading-[1.25em] lg:text-6xl">{title}</H1>
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
					'rounded-full bg-slate-50 py-2 transition-all duration-200 hover:bg-slate-50 focus:bg-slate-50 dark:bg-slate-50 dark:hover:bg-slate-50 dark:focus:bg-slate-50',
					i === hero.currentIndex ? 'px-4' : 'px-2 opacity-50 hover:opacity-100 focus:opacity-100'
				)}
				onclick={() => (hero.currentIndex = i)}
			></Button>
		{/each}
	</Div>
</Section>

<Section>
	<Container class="flex flex-col space-y-16 px-4">
		<Div class="flex flex-col items-center">
			<H2 class="relative">
				Who are we?
				<Div class="absolute -bottom-4 left-1/2 h-[2px] w-[5rem] -translate-x-1/2 bg-current" />
			</H2>
		</Div>
		<Div
			class="flex flex-col space-y-12 lg:grid lg:grid-cols-[6fr_6fr] lg:items-center lg:gap-16 lg:space-y-0"
		>
			<img
				alt="Welcome"
				class="object-cover lg:order-2"
				src="https://ksedelhi.s3.amazonaws.com/heroes/museums-victoria-Vurz96uZ7-I-unsplash.jpg"
			/>
			<Div class="flex flex-col space-y-12 lg:items-start">
				<P>
					<span class="font-bold">Kappa Sigma Epsilon</span> is a group of men that work together through
					a shared vision and principles to achieve their goals. We are a Fraternal Order dedicated to
					being a "Men for Others!" organization.</P
				>
				<P>
					Membership in <span class="font-bold">Kappa Sigma Epsilon</span> provides our active
					chapter member with leadership and fellowship opportunities otherwise not had on a college
					campus. <span class="font-bold">Kappa Sigma Epsilon</span>
					encourages an extremely active and diverse social process for its' members, providing a lifelong
					bond nurtured by experiences that are a by-product of our values and approach to embracing
					the best that life has to offer.
				</P>
				<P>
					If you are looking to make a difference in life, and have a great time doing it, then
					check out… <span class="font-bold">Kappa Sigma Epsilon</span>.
				</P>
				<A
					class={twMerge(theme.get('button'), 'shadow-none hover:shadow-none focus:shadow-none')}
					href="/about-us">Learn More</A
				>
			</Div>
		</Div>
	</Container>
</Section>
