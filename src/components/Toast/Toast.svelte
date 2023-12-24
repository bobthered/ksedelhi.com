<script lang="ts">
	import { Card } from '$components';

	// props (external)
	export let message = '';
	export let variant: 'default' | 'error' | 'success' | 'warning' = 'default';

	// props (internal)
	const variantClasses = {
		default: '',
		error: 'bg-red-500 text-white dark:bg-red-500',
		success: 'bg-green-500 text-white dark:bg-green-500',
		warning: 'bg-yellow-500 text-slate-800 dark:bg-yellow-500'
	};
</script>

<Card class={variantClasses[variant]}>
	{message}
</Card>
