import { writable } from 'svelte/store';

const createStore = () => {
	// initialize store
	const { set, subscribe, update } = writable({ isOpen: false });

	// methods
	const close = () => {
		update((state) => {
			return {
				...state,
				isOpen: false
			};
		});
	};
	const open = () => {
		update((state) => {
			return {
				...state,
				isOpen: true
			};
		});
	};
	const toggle = () => {
		update((state) => {
			return {
				...state,
				isOpen: !state.isOpen
			};
		});
	};

	return {
		close,
		open,
		set,
		subscribe,
		toggle
	};
};

export const nav = createStore();
