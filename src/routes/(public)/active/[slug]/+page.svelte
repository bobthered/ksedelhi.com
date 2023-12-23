<script lang="ts">
	import { LoremIpsum } from 'lorem-ipsum';
	import { page } from '$app/stores';
	import { tilt } from '$actions';
	import { Card, Container, H1, Section } from '$components';
	import { users } from '../dummyUsers';

	// props (internal)
	const lorem = new LoremIpsum();
	const user = users.find((user) => user.slug === $page.params.slug) || {
		name: '',
		src: '',
		slug: '',
		title: ''
	};

	$: ({ name, src, slug, title } = user);
</script>

<Section class="lg:py-[15rem]">
	<Container>
		<div class="flex flex-col space-y-6 lg:flex-row lg:items-start lg:space-x-8 lg:space-y-0">
			<Card class="max-w-[30rem] overflow-hidden p-0" use={[[tilt, { strength: 0.5 }]]}>
				<img alt={name} class="aspect-square object-cover object-center" {src} />
			</Card>
			<div class="flex flex-col">
				<H1 class="mb-2 leading-[2rem]">{name}</H1>
				<p class="mb-6 opacity-70">{title}</p>
				<div class="flex flex-col space-y-6">
					{#each lorem.generateParagraphs(3).split('\n') as paragraph}
						<p>{paragraph}</p>
					{/each}
				</div>
			</div>
		</div>
	</Container>
</Section>
