import { motion } from 'framer-motion';

const variants = {
	default: { width: 0 },
	active: { width: 'calc(100% - 0.75rem)' },
};

const TabButton = ({ active, selectTab, children }) => {
	const buttonClasses = active
		? 'text-slate-800 dark:text-white '
		: 'text-slate-500 dark:text-[#ADB7BE] ';

	return (
		<button onClick={selectTab}>
			<p
				className={`mr-3 font-semibold hover:text-slate-800 dark:hover:text-white ${buttonClasses}`}
			>
				{children}
			</p>
			<motion.div
				animate={active ? 'active' : 'default'}
				variants={variants}
				className="h-2 bg-primary-500 mt-2 mr-3"
			></motion.div>
		</button>
	);
};

export default TabButton;
