import Link from 'next/link';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import GitHubSVG from '../svgs/GitHubSVG';
import LinkedInSVG from '../svgs/LinkedInSVG';

const ContactSection = () => {
	return (
		<section
			id="contact"
			className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
		>
			<div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-1/4 -left-4 transform -translate-x-1/2 -translate-y-1/3"></div>
			<div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary-800 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/3 -translate-y-1/3"></div>

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
						<GitHubSVG className="fill-white hover:fill-secondary-400" />
					</Link>
					<Link href="https://www.linkedin.com/in/nicolas-horton/">
						<LinkedInSVG className="fill-white hover:fill-secondary-400" />
					</Link>
				</div>
			</div>
			<div className="flex justify-center items-center">
				<Link
					href="mailto:nic.horton00@gmail.com"
					className="z-10 flex justify-center items-center gap-2 text-xl font-semibold px-6 py-3 w-full md:w-2/3 rounded-full bg-gradient-to-br from-primary-600 via-secondary-500 to-yellow-400 hover:opacity-80 text-white"
				>
					<EnvelopeIcon className="h-8 w-8" />
					Let&apos;s Chat!
				</Link>
			</div>
		</section>
	);
};

export default ContactSection;
