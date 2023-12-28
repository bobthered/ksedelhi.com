<script lang="ts">
	import {
		A,
		Card,
		Container,
		Fieldset,
		Form,
		H1,
		HeroSection,
		Input,
		Section,
		Textarea
	} from '$components';

	// props (external)
	export let form;

	// props (internal)
	const addresses = [
		{
			address: '727 Scotch Mountain',
			city: 'Delhi',
			description: 'Kappa Sigma Epsilon',
			href: 'https://www.google.com/maps/place/Kappa+Sigma+Epsilon/@42.2495498,-74.9169276,17z/data=!4m6!3m5!1s0x89dc7ed4c8302ca9:0xe83d322170368edc!8m2!3d42.250428!4d-74.91654!16s%2Fg%2F11dyxwzlx9?entry=ttu',
			state: 'NY',
			title: 'Active Chapter Address',
			zip: '13753'
		},
		{
			address: '310 Crest Drive',
			city: 'Roxbury',
			description: 'KΣE Alumni Association c/o Manny Birittieri',
			href: 'https://www.google.com/maps/place/310+Crest+Dr,+Roxbury,+NY+12474/@42.2894131,-74.5591786,17z/data=!3m1!4b1!4m6!3m5!1s0x89dc42dabd504b43:0xde7fd8ccbcb3fe8d!8m2!3d42.2894092!4d-74.5566037!16s%2Fg%2F11c26k31sm?entry=ttu',
			state: 'NY',
			title: 'Alumni Mailing Address',
			zip: '12474'
		}
	];
</script>

<HeroSection
	alt="person holding smartphone"
	src="https://ksedelhi.s3.amazonaws.com/heroes/rodion-kutsaiev-0VGG7cqTwCo-unsplash.jpg"
	title="Contact Us"
>
	<svelte:fragment slot="button"><div class="hidden"></div></svelte:fragment>
</HeroSection>

<Section>
	<Container>
		<div class="flex flex-col space-y-6 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
			{#each addresses as { address, city, description, href, state, title, zip }}
				<Card class="flex flex-col">
					<H1 class="mb-6">{title}</H1>
					<A class="flex flex-col space-y-2" {href}>
						<div>{description}</div>
						<div>{address}</div>
						<div>{city}, {state} {zip}</div>
					</A>
				</Card>
			{/each}
		</div>
	</Container>
</Section>

<Section class="bg-white dark:bg-slate-950">
	<Container>
		<div class="flex flex-col space-y-6">
			<H1>Contact Form</H1>
			<Form bind:form let:disabled let:SubmitButton toast="Successfully received comment">
				<div class="flex flex-col space-y-6 lg:flex-row lg:space-x-4 lg:space-y-0">
					<Fieldset class="lg:w-[20%]" legend="First Name">
						<Input name="firstName" required="required" />
					</Fieldset>
					<Fieldset class="lg:w-[30%]" legend="Last Name">
						<Input name="lastName" required="required" />
					</Fieldset>
					<Fieldset class="lg:w-[50%]" legend="Email">
						<Input name="email" required="required" type="email" />
					</Fieldset>
				</div>
				<Fieldset legend="Comment">
					<Textarea class="h-[6rem]" name="comment" required="required" />
				</Fieldset>
				<SubmitButton class="lg:self-end" {disabled}>Submit</SubmitButton>
			</Form>
		</div>
	</Container>
</Section>
