import fs from 'fs';
import { join } from 'path';

import { type MDXContent } from 'mdx/types';
import { match } from 'ts-pattern';
import matter from 'gray-matter';
import { Arch, Os, parseArch, parseOs } from './arch';
import { StaticImageData } from 'next/image';

const projectsDirectory = join(process.cwd(), 'src/content/projects');

export interface ProjectImport extends Metadata {
	default: MDXContent;
}

export interface Metadata {
	featured?: boolean;
	title: string;
	description: string;
	emoji?: string;
	pubDate: string;
	repo?: string;
	homepage?: string;
	heroImage: string | StaticImageData;
	profileImage?: string;
	shields?: Shield[];
	toy?: boolean;
	hideHero?: boolean;
	download?: Download;
}

export interface Download {
	src: 'github';
	infoExtractor: RegExp;
	arch: Arch[];
	os: Os[];
}

export interface Shield {
	alt?: string;
	src?: string;
	href?: string;
}

export interface ProjectInfo extends Metadata {
	slug: string;
	content: string;
}

export function getProjectSlugs() {
	return fs
		.readdirSync(projectsDirectory)
		.filter((file) => file.endsWith('.md'))
		.map((file) => file.replace('.md', ''));
}

export function getProjectBySlug(slug: string): ProjectInfo | null {
	try {
		return getProjectBySlugInner(slug);
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (_e) {
		return null;
	}
}

function getProjectBySlugInner(slug: string): ProjectInfo | null {
	const fullPath = join(projectsDirectory, `${slug}.md`);

	if (!fs.existsSync(fullPath)) {
		return null;
	}

	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const { data, content } = matter(fileContents);

	if (data.repo) {
		const repo: string = data.repo;

		const repoUrl = match(repo)
			.when(
				(repo) => repo.startsWith('http://'),
				() => repo.replace('http://', 'https://')
			)
			.when(
				(repo) => repo.startsWith('https://'),
				() => repo
			)
			.when(
				(repo) => /^[a-zA-Z0-9\-_\.]+\/[a-zA-Z0-9\-_\.]+$/.test(repo),
				() => `https://github.com/${repo}`
			)
			.when(
				(repo) => /^[a-zA-Z0-9\-_\.]+$/.test(repo),
				() => `https://github.com/jewlexx/${repo}`
			)
			.otherwise(() => null);

		if (repoUrl) {
			data.repo = repoUrl;
		} else {
			throw new Error(`Invalid repo url for ${slug}`);
		}

		data.repo = repoUrl;
	}

	if (data.download) {
		const download = data.download;

		if (download.arch) {
			download.arch = download.arch.map((arch: string) => parseArch(arch));
		}
		if (download.os) {
			download.os = download.os.map((os: string) => parseOs(os));
		}

		data.download = download;
	}

	return {
		...(data as Metadata),
		slug,
		content
	};
}

export function getAllProjects() {
	const slugs = getProjectSlugs();

	return slugs
		.map((slug) => getProjectBySlug(slug))
		.filter((project) => project !== null)
		.sort(sortProject);
}

export function sortProject(a: ProjectInfo, b: ProjectInfo) {
	if (a.featured) {
		return -1;
	}
	if (b.featured) {
		return 1;
	}

	if (a.pubDate === undefined || b.pubDate === undefined) {
		return 0;
	}

	if (new Date(a.pubDate) > new Date(b.pubDate)) {
		return -1;
	} else {
		return 1;
	}
}
