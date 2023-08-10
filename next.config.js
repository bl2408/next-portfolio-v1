/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/cv",
				destination: "https://cv.brianlambert.dev/",
				permanent: false,
				basePath: false,
			},
		];
	},
};

module.exports = nextConfig;
