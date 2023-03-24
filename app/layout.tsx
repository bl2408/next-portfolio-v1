import { Metadata } from "next";
import "./globals.css";
import { Encode_Sans } from "next/font/google";
import Link from "next/link";
import Footer from "./(components)/Footer";
import Header from "./(components)/Header";
import Nav from "./(components)/Nav";

const encodeSans = Encode_Sans({
	subsets: ["latin"],
	variable: "--font-encode",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Brian Lambert",
	description: "",
	icons: {
		icon: "./logo-bl.svg",
		shortcut: "./logo-bl.svg",
		apple: "./logo-bl.svg",
		other: {
			rel: "apple-touch-icon-precomposed",
			url: "./logo-bl.svg",
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
		<html lang="en" className={`${encodeSans.variable}`}>
			<body className="flex min-h-screen w-screen min-w-[320px] place-content-center px-3">
				<div className="grid w-full max-w-screen-2xl grid-cols-[80px_auto] grid-rows-[80px_auto_max-content]">
					<Header />
					<Nav />
					<Footer />
					<main className="h-full min-h-[200px] max-md:col-span-2 max-md:row-start-2 max-md:px-2 md:border-l md:px-4">
						{children}
					</main>
				</div>
			</body>
		</html>
	);
}