<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { A, Container, H1, HeroSection, Section } from '$components';
	import { theme } from '$stores';
	import EventList from './events/List.svelte';

	// props (external)
	export let data;
</script>

<HeroSection
	alt="three men laughing while looking in the laptop inside room"
	src="https://ksedelhi.s3.amazonaws.com/heroes/priscilla-du-preez-XkKCui44iM0-unsplash.jpg"
>
	<div class="flex flex-col items-center">
		<H1 class="text-center text-white">Want to Join Kappa Sigma Epsilon?</H1>
		<p class="opacity-75">Risus egestas tincidunt nec sit in vel arcu magna sollicitudin.</p>
	</div>
	<A
		class={twMerge(
			$theme.button,
			$theme.buttonLight,
			'w-full no-underline hover:text-white lg:w-auto dark:hover:text-slate-800'
		)}
		href="/join">Join Today</A
	>
</HeroSection>

<Section>
	<Container>
		<div
			class="lg:space-between flex flex-col space-y-6 lg:flex-row lg:items-end lg:justify-between"
		>
			<div class="flex w-full flex-col items-start space-y-6 lg:max-w-[75%]">
				<H1 class="text-center">We are Kappa Sigma Epsilon</H1>
				<p>
					Id morbi mauris aliquet mi. Odio nam vitae mauris habitasse diam, gravida diam,
					scelerisque. Nibh arcu eu tellus bibendum tellus. Pharetra tristique libero, ullamcorper
					montes, mauris, id eget. Duis velit velit tortor morbi sit duis.
				</p>
			</div>
			<A
				class={twMerge($theme.button, 'no-underline hover:text-white dark:hover:text-slate-800')}
				href="/about">About Us</A
			>
		</div>
	</Container>
</Section>

<HeroSection
	alt="silhouette group of people under sunset"
	src="https://ksedelhi.s3.amazonaws.com/heroes/tim-marshall-Wa-gS5R58gA-unsplash.jpg"
>
	<div class="flex flex-col items-center">
		<H1 class="text-center text-white">Photo Gallery</H1>
		<p class="opacity-75">Risus egestas tincidunt nec sit in vel arcu magna sollicitudin.</p>
	</div>
	<A
		class={twMerge(
			$theme.button,
			$theme.buttonLight,
			'w-full no-underline hover:text-white lg:w-auto dark:hover:text-slate-800'
		)}
		href="/gallery">View Gallery</A
	>
</HeroSection>

<EventList events={data.events} isHome={true} />
