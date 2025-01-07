import type { NextConfig } from 'next';
import createMdx from '@next/mdx';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'cordor.dev',
				protocol: 'https'
			}
		]
	},
	async redirects() {
		return [
			{
				source: '/projects/:project/docs',
				destination: '/projects/:project/docs/:project/index.html',
				// statusCode: 301,
				permanent: true
			},
			{
				source: '/projects/:project/docs/:project',
				destination: '/projects/:project/docs/:project/index.html',
				// statusCode: 301,
				permanent: true
			}
		];
	}
};

const withMdx = createMdx({
	extension: /\.mdx$/
});

export default withMdx(nextConfig);
