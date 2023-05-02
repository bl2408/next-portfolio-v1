/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	darkMode: "class",
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			"2xs": "360px",
			xs: "475px",
			sm2: "550px",
			...defaultTheme.screens,
		},
		extend: {
			fontFamily: {
				sans: ["var(--font-encode)"],
				mono: ["var(--font-roboto-mono)"],
			},
			minHeight: {
				screen: [
					"100vh /* fallback for Opera, IE and etc. */",
					"100svh",
				],
			},
		},
	},
	plugins: [
		require(`./tailwind-plugins/highlightFx`),
		plugin(({ addVariant, addUtilities }) => {
			addVariant("nav-open", ["html.nav-open &"]);
			addUtilities({
				".trans-col-main-theme": {
					transitionProperty:
						"color, background-color, border-color, text-decoration-color, opacity",
					transitionDuration: "300ms",
					transitionTimingFunction: "linear",
				},
			});
		}),
	],
};
