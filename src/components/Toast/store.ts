import { Toast } from '$components';
import { toast as toastStore } from 'svelte-sonner';

export const store = (
	message: string,
	options: { variant: 'default' | 'error' | 'success' | 'warning' } = { variant: 'default' }
) => {
	toastStore.custom(Toast, {
		componentProps: { message, variant: options.variant }
	});
};
