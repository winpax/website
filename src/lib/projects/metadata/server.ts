import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

import {
	justifyDownloadLink,
	justifyRepoLink,
	Metadata,
	ProjectInfo,
	sortProject
} from '../metadata';

const projectsDirectory = join(process.cwd(), 'src/content/projects');

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
		const repo = justifyRepoLink(data.repo);

		if (!repo) {
			throw new Error(`Invalid repo url for ${slug}`);
		}

		data.repo = repo;
	}

	if (data.download) {
		data.download = justifyDownloadLink(data.download);
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
