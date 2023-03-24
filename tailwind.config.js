/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-encode)"],
			},
			minHeight: {
				screen: [
					"100vh /* fallback for Opera, IE and etc. */",
					"100svh",
				],
			},
		},
	},
	plugins: [],
};
