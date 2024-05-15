'use client';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { PROJECTS_DATA } from './ProjectsData';
import ProjectTag from './ProjectTag';

const ProjectSection = () => {
	const [tag, setTag] = useState('All');

	const handleTagChange = (newTag) => {
		setTag(newTag);
	};

	const filteredProjects = PROJECTS_DATA.filter((project) =>
		project.tag.includes(tag)
	);

	return (
		<>
			<h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
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
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
				{filteredProjects.map((project) => (
					<ProjectCard
						key={project.id}
						title={project.title}
						description={project.description}
						imgURL={project.image}
						gitUrl={project.gitUrl}
						previewUrl={project.previewUrl}
					/>
				))}
			</div>
		</>
	);
};

export default ProjectSection;
