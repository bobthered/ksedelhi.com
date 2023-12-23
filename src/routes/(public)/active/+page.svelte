<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { tilt } from '$actions';
	import { A, Card, Container, H6, HeroSection, Section } from '$components';
	import { theme } from '$stores';
	import { users } from './dummyUsers';
</script>

<HeroSection
	alt="A group of people sitting next to a dog photo"
	src="/heros/nima-sarram-GLE2B4BZQqs-unsplash.jpg"
	title="Active Chapter"
>
	<svelte:fragment slot="button"><div class="hidden" /></svelte:fragment>
</HeroSection>

<Section>
	<Container>
		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{#each users.filter((_, i) => i < 12) as { name, slug, src, title }, i}
				<div class="flex scale-100 flex-col transition duration-200 hover:scale-[1.05]">
					<Card class="mb-4 overflow-hidden p-0" use={[[tilt, { strength: 0.5 }]]}>
						<img alt={name} class="aspect-square object-cover object-center" {src} />
					</Card>
					<H6 class="mb-2">{name}</H6>
					<p class="mb-6 opacity-70">{title}</p>
					<A
						class={twMerge($theme.button, 'no-underline lg:self-end dark:hover:text-slate-800')}
						href="/active/{slug}"
					>
						Read More
					</A>
				</div>
			{/each}
		</div>
	</Container>
</Section>
