<script lang="ts">
	import { HeroSection } from '$components';
	import List from './List.svelte';

	// props (external)
	export let data;

	$: console.log(data.events);
</script>

<HeroSection
	alt="People Partying with Confetti"
	src="https://ksedelhi.s3.amazonaws.com/heroes/pablo-heimplatz-ZODcBkEohk8-unsplash.jpg"
	title="KΣE Upcoming Events"
>
	<svelte:fragment slot="button"><div class="hidden" /></svelte:fragment>
</HeroSection>

<List events={data.events} />
