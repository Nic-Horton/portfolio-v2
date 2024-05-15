import NavLink from './NavLink';

const MenuOverlay = ({ links, setNavOpen }) => {
	return (
		<ul className="flex flex-col p-y-4 items-center">
			{links.map((link, index) => (
				<li key={index} onClick={() => setNavOpen(false)}>
					<NavLink href={link.path} title={link.title} />
				</li>
			))}
		</ul>
	);
};

export default MenuOverlay;
