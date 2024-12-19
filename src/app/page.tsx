import Image from 'next/image';
import { projects } from '$/lib/projects';
import Project from './_components/Project';

export default function Home() {
	return (
		<main className="column">
			<div className="column prose mb-4 mt-12 gap-4">
				<Image src="/icons/org.png" alt="Winpax Icon" width="150" height="150" priority />
				<h1>Welcome to Winpax</h1>
				<p>Creating blazing fast, package management solutions for the Windows platform.</p>
			</div>

			{projects.map((project, index) => (
				<Project {...project} alternate={index % 2 === 1} key={project.title} />
			))}
		</main>
	);
}
