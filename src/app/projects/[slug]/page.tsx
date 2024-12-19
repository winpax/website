export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
	const slug = (await params).slug;
	const { default: Post, ...metadata } = await import(`$/lib/projects/${slug}.mdx`);

	console.log(metadata);

	return <Post />;
}

export function generateStaticParams() {
	return [{ slug: 'sfsu' }, { slug: 'sprinkles' }];
}

export const dynamicParams = false;
