<script lang="ts">
	import * as Components from '$components';

	// props (internal)
	const componentKeysWithNoSlots = [
		'Icon',
		'Input',
		'ProgressIndicator',
		'Pwa',
		'Textarea',
		'Title'
	];
	const componentKeysToFilterOut = [
		'Drawer',
		'Modal',
		'Nav',
		'Option',
		'Overlay',
		'Portal',
		'Pwa',
		'Title'
	];
	const props = {
		Modal: { isOpen: false },
		Overlay: { class: 'hidden' },
		Radio: { group: 0, value: 1 },
		Section: { class: 'py-0' },
		Select: {
			options: [...Array(3)].map((_, i) => ({ label: `Option ${i + 1}`, value: i })),
			value: 0
		}
	};
</script>

<div class="grid grid-cols-6">
	{#each Object.keys(Components).filter((key) => !componentKeysToFilterOut.includes(key)) as key}
		<Components.Card class="aspect-square">
			<div>{key}</div>
			<div class="flex flex-grow flex-col items-center justify-center">
				{#if componentKeysWithNoSlots.includes(key)}
					<svelte:component this={Components[key]} {...props?.[key]} />
				{/if}
				{#if !componentKeysWithNoSlots.includes(key)}
					<svelte:component this={Components[key]} {...props?.[key]}>{key}</svelte:component>
				{/if}
			</div>
		</Components.Card>
	{/each}
</div>
