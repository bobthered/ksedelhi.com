<script lang="ts">
	import { DateTime } from 'luxon';
	import { twMerge } from 'tailwind-merge';
	import { A, Container, H1, H2, Section, SvelteMarkdown } from '$components';
	import { theme } from '$stores';

	// props (external)
	export let events: {
		content: string;
		dateTime: DateTime;
		featured: boolean;
		public: boolean;
		title: string;
	}[];
	export let isHome: boolean = false;
</script>

<Section>
	<Container>
		<div class="flex flex-col space-y-12 lg:items-start">
			{#if isHome}
				<H1 class="text-center">Upcoming Events</H1>
			{/if}
			<div class="grid gap-12 lg:grid-cols-3">
				{#each events as { content, dateTime, slug, title }}
					{@const year = DateTime.fromMillis(+dateTime).toFormat('yyyy')}
					{@const month = DateTime.fromMillis(+dateTime).toFormat('MM')}
					{@const day = DateTime.fromMillis(+dateTime).toFormat('dd')}
					<A
						class="group flex flex-col font-normal no-underline lg:items-start"
						href="/events/{year}/{month}/{day}/{slug}"
					>
						<H2 class="mb-2 underline decoration-1 underline-offset-4 group-hover:decoration-2">
							{title}
						</H2>
						<span class="mb-4 opacity-70">
							{DateTime.fromMillis(+dateTime).toFormat('ccc. LLLL M, yyyy')}
						</span>
						<div
							class="mb-6 flex max-h-[7.5rem] flex-grow truncate whitespace-normal lg:min-h-[7.5rem]"
						>
							<SvelteMarkdown source={content} />
						</div>
					</A>
				{/each}
			</div>
			{#if isHome}
				<A
					class={twMerge($theme.button, 'no-underline lg:self-center dark:hover:text-slate-800')}
					href="/events"
				>
					See All Events
				</A>
			{/if}
		</div>
	</Container>
</Section>
