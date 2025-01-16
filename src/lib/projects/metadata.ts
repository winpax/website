import type { MDXContent } from 'mdx/types';
import type { StaticImageData } from 'next/image';
import { match } from 'ts-pattern';
import { Arch, Os, parseArch, parseOs } from './arch';

export function justifyRepoLink(repo: string) {
	return match(repo)
		.when(
			(repo) => repo.startsWith('http://'),
			() => repo.replace('http://', 'https://')
		)
		.when(
			(repo) => repo.startsWith('https://'),
			() => repo
		)
		.when(
			(repo) => /^[a-zA-Z0-9\-_.]+\/[a-zA-Z0-9\-_.]+$/.test(repo),
			() => `https://github.com/${repo}`
		)
		.when(
			(repo) => /^[a-zA-Z0-9\-_.]+$/.test(repo),
			() => `https://github.com/jewlexx/${repo}`
		)
		.otherwise(() => null);
}

export function justifyDownloadLink(download: Download): Download {
	return {
		...download,
		arch: download.arch?.map((arch) => parseArch(arch)).filter((arch) => arch !== null),
		os: download.os?.map((os) => parseOs(os)).filter((os) => os !== null)
	};
}

export function githubRelease(repo: string | undefined): string | undefined {
	if (!repo) {
		return undefined;
	}

	const repoUrl = justifyRepoLink(repo);

	if (!repoUrl) {
		return undefined;
	}

	if (repoUrl.startsWith('https://github.com/')) {
		return `${repoUrl}/releases/latest`;
	}

	return undefined;
}

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
	hasDocs?: boolean;
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
