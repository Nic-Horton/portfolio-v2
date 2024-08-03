import React from 'react';

const ProjectTag = ({ name, onClick, isSelected }) => {
	const buttonStyles = isSelected
		? 'text-slate-800 dark:text-white border-primary-500'
		: 'text-slate-500 dark:text-[#ADB7BE] border-slate-600 hover:border-slate-800 dark:hover:border-white hover:text-slate-800 dark:hover:text-white';
	return (
		<button
			className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
			onClick={() => onClick(name)}
		>
			{name}
		</button>
	);
};

export default ProjectTag;
