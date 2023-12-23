<script lang="ts">
	import { A, Container, Header, Section } from '$components';
</script>

<Header />

<main
	class="flex max-h-[100dvh] min-h-[100dvh] flex-col pwa:max-h-[100vh] pwa:min-h-[100vh] pwa:pb-[env(safe-area-inset-bottom)] pwa:pl-[env(safe-area-inset-left)] pwa:pr-[env(safe-area-inset-right)]"
>
	<slot />
	<Section
		class="bg-slate-900 text-white selection:bg-slate-100 selection:text-slate-800 dark:bg-slate-100 dark:text-slate-800 dark:selection:bg-slate-900 dark:selection:text-white"
	>
		<Container>
			<div class="text-center lg:text-left">
				Copyright <A href="/">ksedelhi.com</A> 2020. <br class="lg:hidden" />All Rights Reserved
			</div>
		</Container>
	</Section>
</main>
