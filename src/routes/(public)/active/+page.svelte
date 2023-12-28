<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { tilt } from '$actions';
	import { A, Card, Container, H4, HeroSection, Section, SvelteMarkdown } from '$components';
	import { theme } from '$stores';

	// props (external)
	export let data;

	// props (internal)
	const userProfileSortMap = new Map([
		['President', 0],
		['Vice President', 1],
		['Secretary', 2],
		['Treasurer', 3],
		['Sergeant at Arms', 4],
		['Pledge Master', 5],
		['Asst. Pledge Master', 6],
		['House Manager', 7],
		['Historian', 8],
		['Quartermaster', 9],
		['Chaplain', 10],
		['Community Service Rep.', 11]
	]);
</script>

<HeroSection
	alt="A group of people sitting next to a dog photo"
	src="https://ksedelhi.s3.amazonaws.com/heroes/nima-sarram-GLE2B4BZQqs-unsplash.jpg"
	title="Active Chapter"
>
	<svelte:fragment slot="button"><div class="hidden" /></svelte:fragment>
</HeroSection>

<Section>
	<Container>
		<div
			class="lg:gap-y-18 grid grid-cols-1 gap-x-6 gap-y-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
		>
			{#each data.userProfiles.sort( (a, b) => (userProfileSortMap.get(a.title) < userProfileSortMap.get(b.title) ? -1 : userProfileSortMap.get(a.title) > userProfileSortMap.get(b.title) ? 1 : 0) ) as { firstName, imageSrc, lastName, title }}
				<div class="flex scale-100 flex-col transition duration-200 hover:scale-[1.05]">
					<Card class="mb-4 overflow-hidden p-0" use={[[tilt, { strength: 0.5 }]]}>
						<img
							alt="{firstName} {lastName}"
							class="aspect-square object-cover object-center"
							src={imageSrc}
						/>
					</Card>
					<H4 class="mb-2">{firstName} {lastName}</H4>
					<p class="mb-6 opacity-70">{title}</p>
					<A
						class={twMerge($theme.button, 'no-underline lg:self-end dark:hover:text-slate-800')}
						href="/active/{firstName.toLowerCase()}-{lastName.toLowerCase()}"
					>
						Read More
					</A>
				</div>
			{/each}
		</div>
	</Container>
</Section>
