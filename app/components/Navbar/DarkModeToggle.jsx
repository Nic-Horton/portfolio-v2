import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const DarkModeToggle = () => {
	const [theme, setTheme] = useState('system');

	useEffect(() => {
		const storedTheme = localStorage.getItem('theme');
		if (storedTheme) {
			setTheme(storedTheme);
		} else {
			const prefersDark = window.matchMedia(
				'(prefers-color-scheme: dark)'
			).matches;
			setTheme(prefersDark ? 'dark' : 'light');
		}
	}, []);

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else if (theme === 'light') {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
	};

	return (
		<button
			onClick={toggleTheme}
			className="p-2 bg-gray-800 text-white dark:bg-gray-200 dark:text-black rounded-full flex justify-center items-center"
		>
			{theme === 'dark' ? (
				<>
					<SunIcon className="h-5 w-5 inline-block" />
				</>
			) : (
				<>
					<MoonIcon className="h-5 w-5 inline-block" />
				</>
			)}
		</button>
	);
};

export default DarkModeToggle;
