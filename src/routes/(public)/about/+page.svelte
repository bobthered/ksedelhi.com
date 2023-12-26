<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { tilt } from '$actions';
	import { A, Card, Container, H1, HeroSection, Section } from '$components';
	import { theme } from '$stores';
</script>

<HeroSection
	alt="grayscale photo of lion"
	imageClasses="object-center"
	src="https://ksedelhi.s3.amazonaws.com/heroes/glen-carrie-YpttEdPWpGs-unsplash.jpg"
>
	<div class="flex flex-col items-center">
		<H1 class="text-center text-white">About Kappa Sigma Epsilon</H1>
		<p class="text-center opacity-75">A “Men for Others!” Organization</p>
	</div>
</HeroSection>

<Section>
	<Container>
		<div class="flex flex-col space-y-6 lg:flex-row lg:items-center lg:space-x-8 lg:space-y-0">
			<div class="flex flex-col lg:items-end">
				<p class="mb-6">
					<span class="font-bold">Kappa Sigma Epsilon</span> is a group of men that work together through
					a shared vision and principles to achieve their goals. We are a Fraternal Order dedicated to
					being a "Men for Others!" organization.
				</p>

				<p class="mb-6">
					Membership in <span class="font-bold">Kappa Sigma Epsilon</span> provides our active
					chapter member with leadership and fellowship opportunities otherwise not had on a college
					campus.
					<span class="font-bold">Kappa Sigma Epsilon</span>
					encourages an extremely active and diverse social process for its' members, providing a lifelong
					bond nurtured by experiences that are a by-product of our values and approach to embracing
					the best that life has to offer.
				</p>

				<p class="mb-12">
					If you are looking to make a difference in life, and have a great time doing it, then
					check out… <span class="font-bold">Kappa Sigma Epsilon</span>.
				</p>
				<A class={twMerge($theme.button, 'no-underline dark:hover:text-slate-800')} href="/join"
					>Join Today</A
				>
			</div>
			<Card
				class="hidden overflow-hidden p-0 lg:block lg:max-w-[40rem]"
				use={[[tilt, { strength: 0.25 }]]}
			>
				<img
					alt="three man sitting on gray surface"
					class="aspect-square object-cover object-center"
					src="https://ksedelhi.s3.amazonaws.com/heroes/toa-heftiba-xLUwi3yDNb0-unsplash.jpg"
				/>
			</Card>
		</div>
	</Container>
</Section>

<HeroSection
	alt="wooden house near pine trees and pond coated with snow during daytime"
	imageClasses="object-center"
	src="https://ksedelhi.s3.amazonaws.com/heroes/ian-keefe-OgcJIKRnRC8-unsplash.jpg"
	title="Housing Like No Other"
>
	<svelte:fragment slot="button">
		<A
			class={twMerge($theme.button, 'no-underline dark:hover:text-slate-800')}
			href="/about/housing"
		>
			Learn More
		</A>
	</svelte:fragment>
</HeroSection>

<Section>
	<Container>
		<div class="flex flex-col space-y-6 lg:flex-row lg:items-center lg:space-x-8 lg:space-y-0">
			<Card
				class="hidden overflow-hidden p-0 lg:block lg:max-w-[40rem]"
				use={[[tilt, { strength: 0.25 }]]}
			>
				<img
					alt="person holding dartboard"
					class="aspect-square object-cover object-center"
					src="https://ksedelhi.s3.amazonaws.com/heroes/museums-victoria-Vurz96uZ7-I-unsplash.jpg"
				/>
			</Card>
			<div class="flex flex-col space-y-6">
				<H1>History</H1>
				<p>
					Established in 1960 <span class="font-bold">Kappa Sigma Epsilon</span> is one of the oldest
					Fraternities on campus.
				</p>

				<p>We returned to the Delhi campus from a 30 year gap stronger than ever.</p>

				<p>
					We are all about integrated individuality. Our members are diverse and unique. That said,
					when it counts, we come together as one to make a difference.
				</p>

				<p>
					Anyone is welcome! A brother of <span class="font-bold">Kappa Sigma Epsilon</span> is not judged
					by race, religion, orientation or beliefs. Come as you are.
				</p>

				<p>
					We feature a robust Alumni that supports us at every turn. Our current overall membership
					is made up of over 400 brothers. It's awesome when you need to network, especially when
					entering the job market, or just looking for answers from someone whose been there before.
				</p>

				<p>
					<span class="font-bold">Kappa Sigma Epsilon</span> is always looking to help out the college
					and the community, if you like community service and giving back, then look no further.
				</p>

				<p>
					We are currently renting our own fraternity house, but our alumni brothers are in the
					process of looking for our own home.
				</p>

				<p>
					The <span class="font-bold">Kappa Sigma Epsilon</span> Alumni have developed an incentive scholarship
					program that all active brothers qualify for that is based on points earned for GPA, community
					service, recruitment, and fundraising.
				</p>
			</div>
		</div>
	</Container>
</Section>
