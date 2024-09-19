import React from 'react';
import Link from 'next/link';
import {
	CodeBracketIcon,
	EyeIcon,
	PlayIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';

const ProjectCard = ({
	imgURL,
	videoURL,
	title,
	description,
	gitUrl,
	previewUrl,
}) => {
	const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);

	const handlePlayVideo = () => {
		setIsVideoPlaying(true);
	};

	const handleBackToImage = () => {
		setIsVideoPlaying(false);
	};

	return (
		<div>
			<div className="h-52 md:h-72 rounded-t-xl relative group">
				{isVideoPlaying && videoURL ? (
					<div className="relative h-full w-full">
						<video
							src={videoURL}
							controls
							autoPlay
							className="absolute top-0 left-0 w-full h-full rounded-t-xl"
						/>
						<button
							onClick={handleBackToImage}
							className="hidden absolute group-hover:block top-4 right-4 bg-gray-500 hover:bg-gray-700 text-white p-2 rounded-full"
						>
							<XMarkIcon className="h-6 w-6" />
						</button>
					</div>
				) : (
					<div
						className="h-full w-full"
						style={{
							background: `url(${imgURL})`,
							backgroundPosition: '50%',
							backgroundSize: 'cover',
						}}
					>
						<div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
							<Link
								href={gitUrl}
								className="h-14 w-14 mr-6 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
							>
								<CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
							</Link>
							<Link
								href={previewUrl}
								className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
							>
								<EyeIcon className="h-10 w-10 text-[#ADB7BE] cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
							</Link>
							{videoURL && (
								<button
									onClick={handlePlayVideo}
									className="h-14 w-14 ml-6 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
								>
									<PlayIcon className="h-10 w-10 text-[#ADB7BE] cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
								</button>
							)}
						</div>
					</div>
				)}
			</div>

			<div className="text-white rounded-b-xl bg-slate-300 dark:bg-[#232323] py-6 px-4">
				<h5 className="text-slate-800 dark:text-white text-xl font-semibold mb-2">
					{title}
				</h5>
				<p className="text-slate-600 dark:text-[#ADB7BE]">{description}</p>
			</div>
		</div>
	);
};

export default ProjectCard;
