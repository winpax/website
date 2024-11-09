import type { NextConfig } from 'next';

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

export default nextConfig;
