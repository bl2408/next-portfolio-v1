const plugin = require("tailwindcss/plugin");

const highlightFx1 = plugin(
	function ({ addUtilities, matchUtilities, theme }) {
		addUtilities({
			".hlGradient1": {
				backgroundSize: "400% 400%",
				backgroundImage: `linear-gradient(135deg,
					rgb(134, 239, 172),
					rgb(59, 130, 246),
					rgb(147, 51, 234),
					rgb(134, 239, 172),
					rgb(59, 130, 246)
				)`,
			},
		});
		matchUtilities(
			{
				"text-hl": (value) => ({
					"-webkit-text-stroke": `${value} transparent`,
					backgroundClip: "text",
					color: theme("colors.neutral.700"),
					".dark &": {
						color: theme("colors.neutral.300"),
					},
				}),
			},
			{ values: theme("hlStroke") }
		);
	},
	{
		theme: {
			hlStroke: {
				1: ".1rem",
				2: ".2rem",
				3: ".3rem",
				4: ".4rem",
			},
			extend: {
				keyframes: {
					hl1: {
						"0%": {
							backgroundPosition: "100% 100%",
						},
						"99%": {
							backgroundPosition: "1% 1%",
						},
					},
				},
				animation: {
					hl1: "hl1 3s linear infinite",
				},
			},
		},
	}
);
module.exports = highlightFx1;
