/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
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
			// transitionProperty: {
			// 	"border-color": "border-color",
			// },
		},
	},
	plugins: [],
};
