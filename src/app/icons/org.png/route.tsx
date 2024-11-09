import { fetchIconUrl } from '$/lib/icons/org';

export async function GET(): Promise<Response> {
	try {
		const iconUrl = await fetchIconUrl();

		if (!iconUrl) {
			return Response.json(
				{
					error: 'No icon found'
				},
				{
					status: 404
				}
			);
		}

		try {
			const imageRes = await fetch(iconUrl, {
				next: {
					// Revalidate every 24 hours
					revalidate: 60 * 60 * 60 * 24
				}
			});

			if (!imageRes.ok) {
				return imageRes;
			}

			const headers = new Headers();

			headers.set('Content-Type', 'image/png');
			headers.set('Cache-Control', 'public, max-age=31536000');
			headers.set('Content-Disposition', 'inline; filename="org.png"');

			if (imageRes.headers.get('Content-Length')) {
				headers.set('Content-Length', imageRes.headers.get('Content-Length')!);
			}

			if (imageRes.headers.get('Content-Encoding')) {
				headers.set('Content-Encoding', imageRes.headers.get('Content-Encoding')!);
			}

			return new Response(imageRes.body, {
				headers: headers
			});

			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (_e) {
			return Response.json(
				{
					error: 'Failed to fetch icon'
				},
				{
					status: 500
				}
			);
		}

		return Response.json({
			iconUrl
		});
	} catch (error: unknown) {
		return Response.json(
			{
				error: error
			},
			{
				status: 500
			}
		);
	}
}
