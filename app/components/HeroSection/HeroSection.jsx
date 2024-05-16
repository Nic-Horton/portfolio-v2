'use client';
import React from 'react';
import Image from 'next/image';
import TypeAnimation from './TypeAnimation';
import { motion } from 'framer-motion';

const HeroSection = () => {
	return (
		<section id="#hero">
			<div className="grid grid-cols-1 sm:grid-cols-12">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-7 place-self-center text-center sm:text-left"
				>
					<h1 className="text-white mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">
							Hello, I&apos;m{' '}
						</span>
						<br />
						<TypeAnimation />
					</h1>
					<p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, eum
						amet nobis laboriosam quisquam ducimus debitis blanditiis vero.
					</p>
					<div>
						<button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-600 via-secondary-500 to-yellow-400 hover:text-slate-200 text-white">
							Contact me
						</button>
						<button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-600 via-secondary-500 to-yellow-400 hover:bg-slate-800 text-white mt-3">
							<span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
								Download Resume
							</span>
						</button>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-5 place-self-center mt-4 lg:mt-0"
				>
					<div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
						<Image
							src={'/images/avatarIMG.png'}
							alt="hero image"
							className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							width={300}
							height={300}
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;
