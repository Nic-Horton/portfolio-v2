import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="footer border z-10 border-t-[#33353F] border-b-black border-l-transparent border-r-transparent text-white">
			<div className="container p-12 flex justify-between">
				<span>LOGO</span>
				<p className="text-slate-600">
					{'Copyright © '}
					{new Date().getFullYear()}{' '}
					<Link className="hover:text-white" href="https://nichorton.dev/">
						Nicolas Horton
					</Link>
					{'.'}
				</p>
			</div>
		</footer>
	);
};

export default Footer;
