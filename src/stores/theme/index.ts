import { theme } from 'sveltewind/stores';
import { sveltewind } from 'sveltewind/themes';
import { twMerge } from 'tailwind-merge';

// common classes
const commonClasses = {
	input:
		'hover:ring-offset-slate-800 focus:ring-offset-slate-800 focus:ring-slate-800/30 dark:hover:ring-offset-slate-50 dark:focus:ring-offset-slate-50 dark:focus:ring-slate-50/30'
};

theme.set(sveltewind);

theme.set({
	a: 'shadow-[inset] hover:shadow-[inset] hover:text-current font-bold',
	badge:
		'bg-slate-800 hover:bg-slate-900 focus:bg-slate-900 focus:ring-slate-800/30 dark:bg-slate-50 dark:hover:bg-slate-200 dark:focus:bg-slate-200 dark:focus:ring-slate-50/30 dark:text-slate-800',
	button:
		'bg-slate-800 hover:bg-slate-900 focus:bg-slate-900 focus:ring-slate-800/30 dark:bg-slate-50 dark:hover:bg-slate-200 dark:focus:bg-slate-200 dark:focus:ring-slate-50/30 dark:text-slate-800',
	checkbox: twMerge(
		commonClasses.input,
		'peer-focus:ring-offset-slate-800 peer-focus:ring-slate-800/30 peer-focus:ring-offset-slate-50 peer-focus:ring-slate-50/30 dark:text-slate-800'
	),
	checkboxChecked: 'bg-slate-800 text-white dark:bg-white dark:text-slate-800',
	input: commonClasses.input,
	radio: 'group-hover:ring-offset-slate-800 dark:group-hover:ring-offset-slate-50',
	radioSelected: 'bg-slate-800 dark:bg-slate-50 dark:after:bg-slate-800 after:scale-100',
	select: twMerge(commonClasses.input, 'py-3'),
	textarea: commonClasses.input
});

export { theme };
