<script lang="ts">
	import { DateTime } from 'luxon';
	import { Container, H1, Section, SvelteMarkdown } from '$components';

	// props (external)
	export let data;
</script>

<svelte:head>
	<title>{data.event.title} - Events - KΣE at SUNY Delhi</title>
</svelte:head>

<Section class="lg:min-h-[100vh] lg:pt-[20rem]">
	<Container>
		<H1>{data.event.title}</H1>
		<span class="mb-4 opacity-70">
			{DateTime.fromMillis(+data.event.dateTime).toFormat('ccc. LLLL M, yyyy')}
		</span>
		<SvelteMarkdown source={data.event.content} />
	</Container>
</Section>
