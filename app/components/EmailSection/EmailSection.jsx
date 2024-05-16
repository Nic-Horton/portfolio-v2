import Image from 'next/image';
import Link from 'next/link';
import GithubIcon from '../../../public/github-icon.svg';
import LinkedinIcon from '../../../public/linkedin-icon.svg';
import { EnvelopeIcon } from '@heroicons/react/24/solid';

const EmailSection = () => {
	return (
		<section
			id="contact"
			className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
		>
			<div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
			<div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
			<div className="z-10 flex flex-col items-center md:block">
				<h5 className="text-4xl font-bold text-white my-2">
					Let&apos;s Connect
				</h5>
				<p className="text-[#ADB7BE] text-base sm:text-lg mb-4 max-w-md">
					{' '}
					I&apos;m actively seeking new opportunities, so feel free to reach out
					anytime. Whether you have a question or simply want to say hello,
					I&apos;ll do my best to respond!
				</p>
				<div className="socials flex flex-row gap-2 mb-4 md:mb-0">
					<Link href="https://github.com/Nic-Horton">
						<Image src={GithubIcon} alt="Github Icon" />
					</Link>
					<Link href="https://www.linkedin.com/in/nicolas-horton/">
						<Image src={LinkedinIcon} alt="Linkedin Icon" />
					</Link>
				</div>
			</div>
			<div className="flex justify-center items-center">
				<Link
					href="mailto:nic.horton00@gmail.com"
					className="flex justify-center items-center gap-2 text-xl font-semibold px-6 py-3 w-full md:w-2/3 rounded-full bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 hover:text-slate-200 text-white"
				>
					<EnvelopeIcon className="h-8 w-8" />
					Let&apos;s Chat!
				</Link>
			</div>
		</section>
	);
};

export default EmailSection;
