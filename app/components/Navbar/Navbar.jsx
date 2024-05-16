'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';
import MenuButtons from './MenuButtons';
import Image from 'next/image';

const navLinks = [
	{
		title: 'About',
		path: '#about',
	},
	{
		title: 'Projects',
		path: '#projects',
	},
	{
		title: 'Contact',
		path: '#contact',
	},
];

const Navbar = () => {
	const [navOpen, setNavOpen] = useState(false);
	const menuRef = useRef(null);

	const handleClickOutside = (event) => {
		if (menuRef.current && !menuRef.current.contains(event.target)) {
			setNavOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<nav
			ref={menuRef}
			className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] md:bg-opacity-90"
		>
			<div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-10 py-2">
				<Link
					href={'/'}
					className="text-2xl md:text-5xl text-white font-semibold"
				>
					<Image
						src={'/images/nh-logo.png'}
						width={70}
						height={70}
						alt="logo"
					/>
				</Link>
				<div className="mobile-menu block md:hidden">
					<MenuButtons navOpen={navOpen} setNavOpen={setNavOpen} />
				</div>
				<div className="menu hidden md:block md:w-auto" id="navbar">
					<ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
						{navLinks.map((link, index) => (
							<li key={index}>
								<NavLink href={link.path} title={link.title} />
							</li>
						))}
					</ul>
				</div>
			</div>
			{navOpen && <MenuOverlay links={navLinks} setNavOpen={setNavOpen} />}
		</nav>
	);
};

export default Navbar;
