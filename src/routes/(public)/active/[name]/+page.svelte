<script lang="ts">
	import { page } from '$app/stores';
	import { tilt } from '$actions';
	import { Card, Container, H1, Section, SvelteMarkdown } from '$components';

	// props (external)
	export let data;

	$: ({ bio, firstName, imageSrc, lastName, title } = data?.user || {});
</script>

<Section class="lg:py-[15rem]">
	<Container>
		<div class="flex flex-col space-y-6 lg:flex-row lg:items-start lg:space-x-8 lg:space-y-0">
			<Card class="max-w-[30rem] overflow-hidden p-0" use={[[tilt, { strength: 0.5 }]]}>
				<img
					alt="{firstName} {lastName}"
					class="aspect-square object-cover object-center"
					src={imageSrc}
				/>
			</Card>
			<div class="flex flex-col">
				<H1 class="mb-2 leading-[2rem]">{firstName} {lastName}</H1>
				<p class="mb-6 opacity-70">{title}</p>
				<div class="flex flex-col space-y-6">
					<SvelteMarkdown source={bio} />
				</div>
			</div>
		</div>
	</Container>
</Section>
