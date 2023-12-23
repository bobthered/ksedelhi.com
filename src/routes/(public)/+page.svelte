<script lang="ts">
	import { LoremIpsum } from 'lorem-ipsum';
	import { DateTime } from 'luxon';
	import { twMerge } from 'tailwind-merge';
	import { A, Container, H1, H2, HeroSection, Section } from '$components';
	import { theme } from '$stores';

	// props (internal)
	const lorem = new LoremIpsum();
	const events = [
		{ body: lorem.generateParagraphs(1), date: '2024-06-08', title: 'Annual Alumni Meeting' },
		{ body: lorem.generateParagraphs(1), date: '2024-07-06', title: 'SUNY Delhi Spring Festival' },
		{ body: lorem.generateParagraphs(1), date: '2024-09-09', title: 'Fall Semester Starts' }
	];
</script>

<HeroSection
	alt="three men laughing while looking in the laptop inside room"
	src="/heros/priscilla-du-preez-XkKCui44iM0-unsplash.jpg"
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
	src="/heros/tim-marshall-Wa-gS5R58gA-unsplash.jpg"
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

<Section>
	<Container>
		<div class="flex flex-col space-y-6 lg:items-start">
			<H1 class="text-center">Upcoming Events</H1>
			<div class="grid gap-12 lg:grid-cols-3">
				{#each events as { body, date, title }}
					<div class="flex flex-col items-start">
						<H2 class="mb-2">{title}</H2>
						<span class="mb-4 opacity-70">
							{DateTime.fromFormat(date, 'yyyy-MM-dd').toFormat('ccc. LLLL M, yyyy')}
						</span>
						<p
							class="mb-6 flex max-h-[7.5rem] min-h-[7.5rem] flex-grow truncate whitespace-normal opacity-70"
						>
							{body}
						</p>
						<A
							class={twMerge($theme.button, 'self-end no-underline dark:hover:text-slate-800')}
							href="/events"
						>
							Read More
						</A>
					</div>
				{/each}
			</div>
			<A
				class={twMerge($theme.button, 'self-center no-underline dark:hover:text-slate-800')}
				href="/events"
			>
				See All Events
			</A>
		</div>
	</Container>
</Section>
