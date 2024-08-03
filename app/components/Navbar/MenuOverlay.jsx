import DarkModeToggle from './DarkModeToggle';
import NavLink from './NavLink';

const MenuOverlay = ({ links, setNavOpen }) => {
	return (
		<ul className="md:hidden flex flex-col p-y-4 items-center mb-4">
			{links.map((link, index) => (
				<li key={index} onClick={() => setNavOpen(false)}>
					<NavLink href={link.path} title={link.title} />
				</li>
			))}
			<li>
				<DarkModeToggle />
			</li>
		</ul>
	);
};

export default MenuOverlay;
