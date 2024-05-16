'use client';
import { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import { TAB_DATA } from './TabData';

const AboutSection = () => {
	const [tab, setTab] = useState('skills');
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};

	return (
		<section id="about" className="text-white">
			<div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
				<Image
					src={'/images/aboutIMG.png'}
					width={500}
					height={500}
					className="self-start md:mt-16"
					alt="about me section image"
				/>
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
					<p className="text-base lg:text-lg ">
						I am a software developer with a drive to conquer new challenges and
						an appreciation for technology. I enjoy utilizing software
						engineering to transform ideas into reality. My journey in
						technology is not just a career path, it&apos;s a pursuit fueled by
						my curiosity and desire to create meaningful impact. I&apos;m
						excited to continue growing, learning, and pushing the boundaries of
						what&apos;s possible in the ever-evolving world of software
						development. I am a dog dad and consider myself a foodie. To balance
						my love for food, I am also a fitness enthusiast, committed to
						maintaining a healthy lifestyle.
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
