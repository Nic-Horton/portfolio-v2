'use client';
import { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { PROJECTS_DATA } from './ProjectsData';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const ProjectSection = () => {
	const [tag, setTag] = useState('All');
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const handleTagChange = (newTag) => {
		setTag(newTag);
	};

	const filteredProjects = PROJECTS_DATA.filter((project) =>
		project.tag.includes(tag)
	);

	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	};

	return (
		<section id="projects" className="pt-24 sm:pt-32">
			<h2 className="text-center text-4xl font-bold text-white mb-4 ">
				My Projects
			</h2>
			<div className="text-slate-600 flex flex-row justify-center items-center gap-2 py-6">
				<ProjectTag
					onClick={handleTagChange}
					name="All"
					isSelected={tag === 'All'}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name="Web"
					isSelected={tag === 'Web'}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name="Mobile"
					isSelected={tag === 'Mobile'}
				/>
			</div>
			<ul
				ref={ref}
				className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
			>
				{filteredProjects.map((project, index) => (
					<motion.li
						key={index}
						variants={cardVariants}
						initial="initial"
						animate={isInView ? 'animate' : 'initial'}
						transition={{ duration: 0.3, delay: index * 0.4 }}
					>
						<ProjectCard
							key={project.id}
							title={project.title}
							description={project.description}
							imgURL={project.image}
							gitUrl={project.gitUrl}
							previewUrl={project.previewUrl}
						/>
					</motion.li>
				))}
			</ul>
		</section>
	);
};

export default ProjectSection;
