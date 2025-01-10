import { justifyRepoLink, type ProjectImport } from '$/lib/projects/metadata';
import Image from 'next/image';
import { FaBook, FaGitAlt, FaHome } from 'react-icons/fa';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
	const slug = (await params).slug;
	const {
		default: Post,
		title,
		description,
		heroImage,
		pubDate,
		shields,
		hideHero,
		homepage,
		repo,
		hasDocs
	}: ProjectImport = await import(`$/lib/projects/${slug}.mdx`);

	const links = [
		{ link: homepage, icon: <FaHome />, title: 'Visit the project website' },
		{
			link: repo ? (justifyRepoLink(repo) ?? undefined) : undefined,
			icon: <FaGitAlt />,
			title: 'View the project on GitHub'
		},
		{ link: hasDocs ? `docs` : undefined, icon: <FaBook />, title: 'View the docs' }
	].filter(({ link }) => link);

	return (
		<div className="column prose min-w-full prose-headings:mt-8 prose-headings:font-semibold prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white">
			{hideHero ? null : <Image src={heroImage} alt={title} width={500} height={200} priority />}
			<h1>{title}</h1>
			<p>{description}</p>
			<small>Published {new Date(pubDate).toLocaleDateString()}</small>
			<div className="flex flex-wrap gap-2">
				{shields?.map(({ alt, src, href }) => (
					<a key={alt} href={href} target="_blank" rel="noopener noreferrer">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src={src} alt={alt} />
					</a>
				))}
			</div>
			<div className="join flex flex-wrap gap-2">
				{links.map(({ link, icon, title }) => (
					<a
						key={link}
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						className="btn btn-link join-item text-3xl"
						title={title}
					>
						{icon}
					</a>
				))}
			</div>
			<main className="mx-10 max-w-screen-sm">
				<Post />
			</main>
		</div>
	);
}

export function generateStaticParams() {
	return [{ slug: 'sfsu' }, { slug: 'sprinkles' }];
}

export const dynamicParams = false;
