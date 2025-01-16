'use client';

import { lazy, Suspense } from 'react';

export default function ProjectModal({ project }: { project: string }) {
	const ProjectPage = lazy(() => import('../projects/[slug]/page'));

	return (
		<dialog open>
			<Suspense fallback={<div>Loading...</div>}>
				<ProjectPage params={Promise.resolve({ slug: project })} />
			</Suspense>
		</dialog>
	);
}
