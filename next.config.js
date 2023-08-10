/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: "/cv",
				destination: "https://resume.brianlambert.dev/",
				basePath: false,
			},
		];
	},
};

module.exports = nextConfig;
