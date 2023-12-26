<script lang="ts">
	import { A, Card, Container, H1, HeroSection, Section } from '$components';

	// props (external)
	export let data;
</script>

<HeroSection
	alt="Two people reaching out their hands to touch each other"
	src="https://ksedelhi.s3.amazonaws.com/heroes/nsiries-G9LWpmD_1oc-unsplash.jpg"
	title="Partnered Charities"
>
	<svelte:fragment slot="button"><div class="hidden" /></svelte:fragment>
</HeroSection>

<Section>
	<Container>
		<div
			class="flex flex-col space-y-12 lg:grid lg:grid-cols-[20rem_1fr] lg:gap-x-6 lg:gap-y-12 lg:space-y-0"
		>
			{#each data.donates as { body, imageSrc, subtitle, title }}
				<div class="flex lg:hidden">
					<div class="flex flex-col">
						<img alt={title} class="mb-4" src={imageSrc} />
						<H1 class="mb-4 text-center">{title}</H1>
						<p class="mb-2 opacity-70">{subtitle}</p>
						<p>{body}</p>
					</div>
				</div>
				<img alt={title} class="mb-4 hidden lg:block" src={imageSrc} />
				<div class="hidden flex-col lg:flex">
					<H1 class="mb-4 leading-[2rem]">{title}</H1>
					<p class="mb-2 opacity-70">{subtitle}</p>
					<p>{body}</p>
				</div>
			{/each}
		</div>
	</Container>
</Section>
