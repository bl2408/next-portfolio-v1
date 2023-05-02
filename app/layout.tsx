import "./globals.css";
import { Metadata } from "next";
import Header from "./Header";
import Nav from "../components/nav/Nav";
import { Providers } from "../components/misc/Providers";
import Aside from "../components/Aside";
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
			className={`${encodeSans.className} ${encodeSans.variable} ${robotoMono.variable} scroll-pt-[var(--navTopHeight)] [scroll-behavior:smooth!important] [scrollbar-gutter:stable]`}
			suppressHydrationWarning>
			<body
				className=" min-w-[320px] overflow-auto overscroll-y-contain bg-neutral-50 
				 text-neutral-500 trans-col-main-theme dark:bg-zinc-900 dark:text-neutral-400 max-sm:nav-open:overflow-hidden
			">
				<Providers>
					<div className="mx-auto min-h-screen w-full max-w-screen-2xl trans-col-main-theme">
						<div
							className="sticky top-0 z-10 grid h-[var(--navTopHeight)] w-full grid-cols-[var(--navSideWidth)_1fr] 
							bg-neutral-50 trans-col-main-theme dark:bg-zinc-900
						">
							<Header />
							<Nav
								className="border-zinc-200 trans-col-main-theme dark:border-zinc-800 
								md:border-l"
								items={[
									{ label: "about", to: "/" },
									{ label: "projects", to: "projects" },
								]}
							/>
						</div>
						<div className="grid w-full md:grid-cols-[var(--navSideWidth)_1fr]">
							<div
								className="left-0 z-[9] w-full 
									 max-md:fixed max-md:bottom-0 max-md:h-[var(--navBottomHeight)]
									md:sticky md:top-[var(--navTopHeight)]
									md:h-[calc(100vh-var(--navTopHeight))] md:min-h-[400px]
									
								">
								<Aside className="bg-neutral-50 trans-col-main-theme dark:bg-zinc-900" />
							</div>
							<div
								className="border-zinc-200 pb-[var(--contentBottomPad)]
									pt-3 trans-col-main-theme dark:border-zinc-800 max-md:px-6 md:border-l md:px-4
								">
								{children}
							</div>
						</div>
					</div>
				</Providers>
			</body>
		</html>
	);
}
