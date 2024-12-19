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
	}
};

const withMdx = createMdx({
	extension: /\.mdx$/
});

export default withMdx(nextConfig);
