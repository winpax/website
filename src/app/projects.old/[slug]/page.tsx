import type { ProjectImport } from '$/lib/projects/metadata';
import ProjectDisplay from '$/app/_components/ProjectDisplay';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const project: ProjectImport = await import(`$/lib/projects/${slug}.mdx`);

	return <ProjectDisplay {...project} slug={slug} />;
}

export function generateStaticParams() {
	return [{ slug: 'sfsu' }, { slug: 'sprinkles' }];
}

export const dynamicParams = false;
