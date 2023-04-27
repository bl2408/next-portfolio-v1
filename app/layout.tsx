import { Metadata } from "next";
import "./globals.css";
import Header from "./Header";
import Nav from "./(components)/Nav/Nav";
import { Providers } from "./(components)/Providers";
import Aside from "./(components)/Aside";
import { Encode_Sans, Roboto_Mono } from "next/font/google";

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
		<html
			lang="en"
			className={`${encodeSans.className} ${encodeSans.variable} ${robotoMono.variable}`}
			suppressHydrationWarning>
			<body
				className="relative min-h-screen min-w-[320px] text-neutral-500 dark:text-neutral-400
			max-sm:nav-open:overflow-hidden [&>*]:bg-neutral-50 [&>*]:trans-col-main-theme
			[&>*]:dark:bg-zinc-900
			">
				<Providers>
					<div className="fixed z-40 flex w-full place-content-center text-black dark:text-white">
						<div className=" grid w-full max-w-screen-2xl grid-cols-[80px_1fr] grid-rows-[60px]">
							<Header />
							<Nav
								items={[
									{ label: "about", to: "/" },
									{ label: "projects", to: "/" },
								]}
							/>
						</div>
					</div>

					<div className=" flex min-h-screen w-full place-content-center ">
						<div className="mt-[60px] grid w-full max-w-screen-2xl md:grid-cols-[80px_1fr]">
							<div
								className="z-10 bg-neutral-50 text-black trans-col-main-theme dark:bg-zinc-900 dark:text-white max-md:fixed
							max-md:bottom-0 max-md:left-0 max-md:w-full">
								<Aside />
							</div>
							<main
								className=" mb-40 border-zinc-200 py-[10px] transition-[border]
							 dark:border-zinc-800 max-md:mb-[60px] max-md:px-6 md:border-l md:px-4
							 ">
								{children}
							</main>
						</div>
					</div>
				</Providers>
			</body>
		</html>
	);
}
