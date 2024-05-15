import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const MenuButtons = ({ navOpen, setNavOpen }) => {
	return !navOpen ? (
		<button
			onClick={() => setNavOpen(!navOpen)}
			className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
		>
			<Bars3Icon className="h-5 w-5" />
		</button>
	) : (
		<button
			onClick={() => setNavOpen(!navOpen)}
			className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
		>
			<XMarkIcon className="h-5 w-5" />
		</button>
	);
};

export default MenuButtons;
