import Image from 'next/image';
import { projects } from '$/lib/projects';
import { description, title } from '$/lib/winpax';
import orgIcon from '$/lib/assets/org-icon.webp';
import Project from './_components/Project';

// Page never changes
export const dynamic = 'force-static';

export default function Home() {
	return (
		<main className="column">
			<div className="column prose mb-4 mt-12 gap-4">
				<Image
					src={orgIcon}
					alt="Winpax Icon"
					width="150"
					height="150"
					priority
					placeholder="blur"
				/>
				<h1>Welcome to {title}</h1>
				<p>{description}</p>
			</div>

			{projects.map((project, index) => (
				<Project {...project} alternate={index % 2 === 1} key={project.title} />
			))}
		</main>
	);
}
