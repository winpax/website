import { json } from '@sveltejs/kit';

import { fetchIconUrl } from '$lib/icons/org.server';

export async function GET() {
	try {
		const iconUrl = await fetchIconUrl();

		if (!iconUrl) {
			return json(
				{
					error: 'No icon found'
				},
				{
					status: 404
				}
			);
		}

		return json({
			iconUrl
		});
	} catch (error: unknown) {
		return json(
			{
				error: error
			},
			{
				status: 500
			}
		);
	}
}
