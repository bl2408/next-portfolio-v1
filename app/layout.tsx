import { Metadata } from "next";
import "./globals.css";
import { Encode_Sans } from "next/font/google";
import Footer from "./(components)/Aside";
import Header from "./(components)/Header";
import Nav from "./(components)/Nav";
import { Providers } from "./(components)/Providers";
import Aside from "./(components)/Aside";

const encodeSans = Encode_Sans({
	subsets: ["latin", "latin-ext"],
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
		<html
			lang="en"
			className={`${encodeSans.variable} `}
			suppressHydrationWarning>
			<body className=" min-h-screen min-w-[320px] [&>*]:bg-neutral-50 [&>*]:transition [&>*]:duration-700 [&>*]:dark:bg-zinc-900 [&_*]:text-inherit">
				<Providers>
					<div className="fixed z-40 flex w-full place-content-center">
						<div className=" grid w-full max-w-screen-2xl grid-cols-[80px_1fr] grid-rows-[60px]">
							<Header />
							<Nav />
						</div>
					</div>

					<div className=" flex min-h-screen w-full place-content-center ">
						<div className="mt-[60px] grid w-full max-w-screen-2xl md:grid-cols-[80px_1fr]">
							<div className="bg-neutral-50 transition duration-700 dark:bg-zinc-900 max-md:fixed max-md:bottom-0 max-md:left-0 max-md:w-full">
								<Aside />
							</div>
							<main className=" border-zinc-200 py-[10px] px-4 dark:border-zinc-800 max-md:mb-[60px] md:border-l md:transition-[border] md:duration-700">
								{children}
							</main>
						</div>
					</div>
				</Providers>
			</body>
		</html>
	);
}
