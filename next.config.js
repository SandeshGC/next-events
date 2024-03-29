/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{ protocol: "https", hostname: "images.unsplash.com" },
			{ protocol: "https", hostname: "hydeparkwinterwonderland.com" },
			{ protocol: "https", hostname: "wembleypark.com" },
			{ protocol: "http", hostname: "wembleypark.com" },
		],
	},
}

module.exports = nextConfig
