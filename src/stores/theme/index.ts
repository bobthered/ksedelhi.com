import { theme } from 'sveltewind/stores';
import { sveltewind } from 'sveltewind/themes';
import { twMerge } from 'tailwind-merge';

// common classes
const commonClasses = {
	input:
		'bg-transparent appearance-none rounded-lg leading-6 px-6 py-3 transition duration-200 outline-none ring ring-transparent ring-offset-1 ring-offset-slate-300 dark:ring-offset-slate-500 hover:ring-offset-slate-800 focus:ring-offset-slate-800 focus:ring-slate-800/30 dark:hover:ring-offset-slate-50 dark:focus:ring-offset-slate-50 dark:focus:ring-slate-50/30'
};

theme.set(sveltewind);

theme.set({
	a: 'shadow-none hover:shadow-none hover:text-current font-semibold underline underline-offset-4 decoration-1 hover:decoration-2 transition-all',
	badge:
		'rounded-lg px-3 text-sm bg-slate-800 hover:bg-slate-900 focus:bg-slate-900 focus:ring-slate-800/30 dark:bg-slate-50 dark:hover:bg-slate-200 dark:focus:bg-slate-200 dark:focus:ring-slate-50/30 dark:text-slate-800',
	button:
		'whitespace-nowrap text-sm leading-6 font-bold px-6 py-3 rounded-lg outline-none ring ring-transparent transition duration-200 bg-slate-800 hover:bg-slate-900 focus:bg-slate-900 focus:ring-slate-800/30 dark:bg-slate-50 dark:hover:bg-slate-200 dark:focus:bg-slate-200 dark:focus:ring-slate-50/30 dark:text-slate-800',
	buttonIcon: 'py-0 aspect-square',
	buttonLight:
		'text-slate-800 dark:text-slate-800 bg-slate-50 hover:bg-slate-200 focus:bg-slate-200 focus:ring-slate-50/30 dark:bg-slate-50 dark:hover:bg-slate-200 dark:focus:bg-slate-200 dark:focus:ring-slate-50/30',
	card: 'shadow-md bg-white dark:bg-slate-900 dark:shadow-[inset_0_1px_0_0_#ffffff0d,_0_4px_6px_-1px_rgb(0_0_0_/_0.3),_0_2px_4px_-2px_rgb(0_0_0_/_0.3)] ring-1 rounded-lg flex flex-col p-6 ring-slate-800/10 dark:ring-white/5',
	checkbox: twMerge(
		commonClasses.input,
		'px-0 py-0 mr-2',
		'peer-focus:ring-offset-slate-800 peer-focus:ring-slate-800/30 peer-focus:ring-offset-slate-50 peer-focus:ring-slate-50/30 dark:text-slate-800'
	),
	checkboxChecked: 'bg-slate-800 text-white dark:bg-white dark:text-slate-800',
	container: 'px-6 mx-auto flex flex-col flex-grow lg:max-w-[90rem]',
	drawer:
		'z-[2] p-0 fixed transition duration-200 bg-white rounded-none dark:bg-slate-900 overflow-auto',
	h1: 'uppercase leading-[3rem]',
	h2: 'uppercase',
	h3: 'uppercase',
	h4: 'uppercase',
	h5: 'uppercase',
	h6: 'uppercase',
	header:
		'shadow-md dark:shadow-[inset_0_1px_0_0_#ffffff0d,_0_4px_6px_-1px_rgb(0_0_0_/_0.3),_0_2px_4px_-2px_rgb(0_0_0_/_0.3)] w-full bg-white dark:bg-slate-900 fixed top-0 left-0 z-[1] py-3 lg:py-6 pwa:pt-[calc(env(safe-area-inset-top)_+_1.5rem)] lg:pwa:pt-[calc(env(safe-area-inset-top)_+_3rem)] flex ring-1 ring-slate-800/10 dark:ring-white/5 lg:pb-3',
	icon: 'h-6 w-6',
	input: commonClasses.input,
	overlay:
		'fixed h-[100dvh] z-[2] bg-black/70 dark:bg-black/70 hover:bg-black/70 focus:bg-black/70 dark:hover:bg-black/70 dark:focus:bg-black/70 rounded-none',
	nav: 'relative overflow-visible lg:border-t lg:border-slate-800/10 dark:lg:border-white/5 lg:mt-3 lg:pt-3',
	navToggleButton:
		'z-[3] w-[3rem] relative lg:hidden ring-offset-2 ring-offset-white dark:ring-offset-slate-800',
	radio: 'group-hover:ring-offset-slate-800 dark:group-hover:ring-offset-slate-50',
	radioSelected: 'bg-slate-800 dark:bg-slate-50 dark:after:bg-slate-800 after:scale-100',
	select: twMerge(commonClasses.input, 'py-3'),
	textarea: commonClasses.input
});

export { theme };
