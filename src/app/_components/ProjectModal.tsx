'use client';

import { Suspense } from 'react';
import ProjectDisplay from './ProjectDisplay';
import wrapPromise from '$/lib/wrapPromise';
import { ProjectImport } from '$/lib/projects/metadata';

function ProjectData({ project }: { project: string }) {
	const projectData = wrapPromise<ProjectImport>(import(`$/lib/projects/${project}.mdx`)).read();

	return <ProjectDisplay {...projectData} slug={project} />;
}

export default function ProjectModal({ project }: { project: string }) {
	return (
		<dialog open className="card m-5 min-w-[50vw] max-w-[50vw] bg-base-100 shadow-xl">
			<Suspense fallback={<div>Loading...</div>}>
				<ProjectData project={project} />
			</Suspense>
		</dialog>
	);
}
