/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: process.env.IMAGES_DOMAIN,
				port: '',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;
