import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="footer border z-10 border-t-[#33353F] border-b-black border-l-transparent border-r-transparent text-white">
			<div className="container px-12 py-6 flex justify-between items-center">
				<Link href={'/'} className="rounded-full">
					<Image
						src={'/images/nh-logo.png'}
						width={50}
						height={50}
						alt="logo"
					/>
				</Link>
				<p className="text-slate-600 text-center">
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
