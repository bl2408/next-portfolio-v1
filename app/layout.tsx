import "./globals.css";
import { Metadata } from "next";
import { Providers } from "../components/misc/Providers";
import { Encode_Sans, Roboto_Mono } from "next/font/google";
import Nav from "@/components/nav/Nav";

const encodeSans = Encode_Sans({
	subsets: ["latin-ext"],
	variable: "--font-encode",
	display: "swap",
});
const robotoMono = Roboto_Mono({
	subsets: ["latin-ext"],
	variable: "--font-roboto-mono",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Brian Lambert",
	description: "",
	icons: {
		icon: "/logo-bl.svg",
		shortcut: "/logo-bl.svg",
		apple: "/logo-bl.svg",
		other: {
			rel: "apple-touch-icon-precomposed",
			url: "/logo-bl.svg",
		},
	},
	viewport: {
		initialScale: 1,
		width: "device-width",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${encodeSans.className} ${encodeSans.variable} ${robotoMono.variable} scroll-pt-[var(--navTopPad)] [scroll-behavior:smooth!important]`}
			suppressHydrationWarning>
			<body
				className="bg-theme scrollbar min-w-[320px] overflow-auto overscroll-y-contain
			">
				<Providers>
					<Nav
						items={[
							{
								label: "Sit tight, content coming soon :)",
								to: "/",
							},
						]}
						// items={[
						//     { label: "about", to: "/" },
						//     { label: "projects", to: "/projects" },
						//     {
						//         label: "projects that is a bit long",
						//         to: "projects",
						//     },
						//     { label: "hello", to: "/projects" },
						//     { label: "welcome", to: "/projects" },
						// ]}
					/>
					<div>{children}</div>
				</Providers>
			</body>
		</html>
	);
}
