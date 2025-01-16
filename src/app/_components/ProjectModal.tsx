'use client';

import { lazy, Suspense } from 'react';

export default function ProjectModal({ project }: { project: string }) {
	const ProjectPage = lazy(() => import('../projects/[slug]/page'));

	return (
		<dialog open className="card m-5 min-w-[50vw] max-w-[50vw] bg-base-100 shadow-xl">
			<Suspense fallback={<div>Loading...</div>}>
				<ProjectPage params={Promise.resolve({ slug: project })} />
			</Suspense>
		</dialog>
	);
}
