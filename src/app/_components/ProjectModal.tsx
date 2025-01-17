'use client';

import { Suspense, useMemo } from 'react';
import ProjectDisplay from './ProjectDisplay';
import wrapPromise, { useDataFetch } from '$/lib/wrapPromise';
import { ProjectImport } from '$/lib/projects/metadata';

function ProjectData({ project }: { project: string }) {
	// const projectSuspense = useMemo(() => {
	// 	return wrapPromise<ProjectImport>(import(`$/lib/projects/${project}.mdx`));
	// }, []);

	const projectData = useDataFetch(import(`$/lib/projects/${project}.mdx`));

	// const projectData = projectSuspense.read();

	return <ProjectDisplay {...projectData} slug={project} />;
}

export default function ProjectModal({ project }: { project: string }) {
	return (
		<dialog open className="card fixed m-5 min-w-[50vw] max-w-[50vw] bg-base-100 shadow-xl">
			<Suspense fallback={<div>Loading...</div>}>
				<ProjectData project={project} />
			</Suspense>
		</dialog>
	);
}
