import { theme } from 'sveltewind';
import { sveltewind } from 'sveltewind/themes';

theme.set(sveltewind);
theme.update({
	button:
		'font-medium shadow-none rounded-[.25rem] dark:bg-slate-100 dark:hover:bg-slate-200 dark:focus:bg-slate-200 dark:focus:ring-slate-100/30 bg-slate-800 hover:bg-slate-700 focus:bg-slate-700 focus:ring-slate-800/30 dark:text-slate-800 dark:hover:text-slate-800 dark:focus:text-slate-800',
	card: 'shadow-none dark:shadow-none ring-slate-950/10 dark:ring-slate-50/10',
	header:
		'ring-0 border-b border-slate-950/10 dark:border-slate-50/10 bg-slate-100/90 backdrop-blur dark:bg-slate-900/90',
	nav: 'ring-0 border-b border-slate-950/10 dark:border-slate-50/10 bg-slate-100/90 backdrop-blur dark:bg-slate-900/90'
});

export default theme;
export { theme };
