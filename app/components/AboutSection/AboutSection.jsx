'use client';
import { useTransition, useState, useEffect } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import { TAB_DATA } from './TabData';
import { motion } from 'framer-motion';

const images = ['/images/image/AboutMePic.png', '/images/image/aboutMe.png'];

const AboutSection = () => {
	const [tab, setTab] = useState('skills');
	const [isPending, startTransition] = useTransition();
	const [currentImage, setCurrentImage] = useState(images[0]);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage((prevImage) => {
				const currentIndex = images.indexOf(prevImage);
				const nextIndex = (currentIndex + 1) % images.length;
				return images[nextIndex];
			});
		}, 7000); // Change image every 5 seconds

		return () => clearInterval(interval); // Cleanup on component unmount
	}, []);

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};

	return (
		<section id="about" className="text-slate-800 dark:text-white">
			<div className="md:grid md:grid-cols-2 gap-8 items-center pt-24 px-4 xl:gap-16 sm:pt-32 xl:px-16">
				<motion.div
					className="relative h-500 w-500 self-start md:mt-16"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<Image
						src={currentImage}
						width={500}
						height={500}
						className="self-start md:mt-16"
						alt="about me section image"
					/>
				</motion.div>
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
						About Me
					</h2>
					<p className="text-base lg:text-lg ">
						Since I was a child, I’ve had a natural drive to conquer new
						challenges and a deep appreciation for technology. My journey in
						technology and engineering is not just a career path, but a passion
						fueled by curiosity, creativity, and the desire to build impactful
						solutions. Now pursuing a degree in Electrical Engineering, I’m
						focused on blending hardware and software to create innovative
						systems, from circuit design to embedded solutions. I’m excited to
						continue growing, learning, and pushing the boundaries of
						what&apos;s possible in the ever-evolving world of technology.
					</p>
					<div className="flex flex-row justify-start mt-8">
						{TAB_DATA.map((t, index) => (
							<TabButton
								key={index}
								selectTab={() => handleTabChange(t.id)}
								active={tab === t.id}
							>
								{t.title}
							</TabButton>
						))}
					</div>
					<div className="mt-8">
						{TAB_DATA.find((t) => t.id === tab).content}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
