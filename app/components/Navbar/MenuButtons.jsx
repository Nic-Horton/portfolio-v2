import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const MenuButtons = ({ navOpen, setNavOpen }) => {
	return !navOpen ? (
		<button
			onClick={() => setNavOpen(!navOpen)}
			className="flex items-center px-3 py-2 border rounded border-slate-500 text-slate-500 hover:text-slate-800 hover:border-slate-800 dark:border-slate-200 dark:text-slate-200 dark:hover:text-white dark:hover:border-white"
		>
			<Bars3Icon className="h-5 w-5" />
		</button>
	) : (
		<button
			onClick={() => setNavOpen(!navOpen)}
			className="flex items-center px-3 py-2 border rounded border-slate-500 text-slate-500 hover:text-slate-800 hover:border-slate-800 dark:border-slate-200 dark:text-slate-200 dark:hover:text-white dark:hover:border-white"
		>
			<XMarkIcon className="h-5 w-5" />
		</button>
	);
};

export default MenuButtons;
