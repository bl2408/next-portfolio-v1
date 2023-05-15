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
		animMenuAppear: {
			1: "50ms",
			2: "100ms",
		},
	},
	plugins: [
		plugin(({ addVariant, matchUtilities, theme }) => {
			addVariant("nav-open", ["html.nav-open &"]);

			matchUtilities(
				{
					"anim-menu-appear": (value) => ({
						transitionProperty: "transform, opacity",
						visibility: "hidden",
						transitionTimingFunction:
							"cubic-bezier(0.4, 0, 0.2, 1)",
						transitionDuration: "0ms",
						transitionDelay: value,
						transform: "translateY(50%)",
						opacity: 0,
						"html.nav-open &": {
							visibility: "visible",
							transform: "translateY(0%)",
							opacity: 1,
							transitionDuration: "200ms",
						},
					}),
				},
				{ values: theme("animMenuAppear") }
			);
		}),
	],
};
