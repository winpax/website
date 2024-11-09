export interface LatestRelease {
	url?: string;
	assets_url?: string;
	upload_url?: string;
	html_url?: string;
	id?: number;
	author?: Author;
	node_id?: string;
	tag_name?: string;
	target_commitish?: string;
	name?: string;
	draft?: boolean;
	prerelease?: boolean;
	created_at?: Date;
	published_at?: Date;
	assets?: Asset[];
	tarball_url?: string;
	zipball_url?: string;
	body?: string;
}

export interface Asset {
	url?: string;
	id?: number;
	node_id?: string;
	name?: string;
	label?: null;
	uploader?: Author;
	content_type?: string;
	state?: string;
	size?: number;
	download_count?: number;
	created_at?: Date;
	updated_at?: Date;
	browser_download_url?: string;
}

export interface Author {
	login?: string;
	id?: number;
	node_id?: string;
	avatar_url?: string;
	gravatar_id?: string;
	url?: string;
	html_url?: string;
	followers_url?: string;
	following_url?: string;
	gists_url?: string;
	starred_url?: string;
	subscriptions_url?: string;
	organizations_url?: string;
	repos_url?: string;
	events_url?: string;
	received_events_url?: string;
	type?: string;
	user_view_type?: string;
	site_admin?: boolean;
}

// Converts JSON strings to/from your types
export class Convert {
	public static toLatestRelease(json: string): LatestRelease {
		return JSON.parse(json);
	}

	public static latestReleaseToJson(value: LatestRelease): string {
		return JSON.stringify(value);
	}
}

const url = 'https://api.github.com/repos/winpax/logo/releases/latest';

export function fetchLatestRelease(): Promise<LatestRelease> {
	return fetch(url).then((response) => response.json());
}

export function fetchIconUrl(): Promise<string | undefined> {
	return fetchLatestRelease().then((release) => {
		const assets = release.assets;
		const imageAsset = assets?.find((asset) => asset?.browser_download_url?.endsWith('.png'));

		return imageAsset?.browser_download_url;
	});
}
