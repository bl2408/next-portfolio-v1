import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faExternalLink,
	faFileCode,
	faIdCard,
} from "@fortawesome/free-solid-svg-icons";
import NavHamburger from "./NavHamburger";
import Link from "next/link";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import NavTheme from "./NavTheme";

const sideItems = [
	{
		icon: faEnvelope,
		href: "mailto:hi@brianlambert.dev",
		label: "Email",
	},
	{
		icon: faIdCard,
		href: "https://bl2408.github.io/resume-v1/",
		label: "CV",
	},
	{
		icon: faGithubSquare,
		href: "https://github.com/bl2408",
		label: "GitHub",
	},
	{
		icon: faLinkedin,
		href: "https://www.linkedin.com/in/bl24/",
		label: "LinkedIn",
	},
	{
		icon: faFileCode,
		href: "https://github.com/bl2408/next-portfolio-v1",
		label: "Source",
	},
];

export default function Nav({
	items,
	className,
}: {
	items: { label: string; to: string }[];
	className?: string;
}) {
	return (
		<nav id="nav-header" className="fixed left-0 right-0 top-0 z-30">
			<div className="bg-theme relative flex justify-between">
				<div className=" z-40 flex aspect-square w-[var(--navItemSize)] items-center justify-center text-2xl font-bold max-xs:nav-open:invert">
					<Link href={"/"}> BL</Link>
				</div>
				<div className="z-40">
					<NavHamburger className="z-10 w-[var(--navItemSize)] text-black nav-open:invert" />
				</div>
				<div
					className="pointer-events-none absolute top-0 z-[39] h-screen
					before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0
					before:-z-10 before:origin-top-right before:scale-x-[0.50] before:scale-y-[0.3] before:bg-black
					before:opacity-0 before:transition-all before:content-['_'] nav-open:pointer-events-auto before:nav-open:scale-100
					before:nav-open:opacity-100 before:dark:invert max-xs:left-0 max-xs:w-full xs:right-0 xs:max-h-[600px] xs:w-[280px]
					">
					<div
						className="scrollbar-reverse mt-[var(--navItemSize)] flex h-[calc(100%-var(--navItemSize))] w-full flex-col justify-between overscroll-y-contain px-6 
						pb-5  [scrollbar-gutter:stable] nav-open:overflow-auto nav-open:[animation:anim-no-scroll_0.8s_backwards]">
						<div className="anim-menu-appear-[200ms]">
							<ul className="w-full">
								{items.map((item) => (
									<li key={`${item.label}`}>
										<Link
											href={item.to}
											className="block p-5 text-3xl text-white hover:bg-white hover:text-black dark:invert">
											{item.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div className="anim-menu-appear-[300ms]">
							<ul className="max-xs:flex max-xs:flex-wrap max-xs:justify-evenly xs:grid xs:grid-cols-2">
								{sideItems.map((item, i) => (
									<li key={item.label}>
										<Link
											href={item.href}
											target="_blank"
											className="navButton h-full hover:bg-white hover:text-black dark:invert max-xs:w-[var(--navItemSize)] xs:w-full">
											<FontAwesomeIcon icon={item.icon} />
											<div className="navHoverMenu">
												<div>
													{item.label}
													<FontAwesomeIcon
														icon={faExternalLink}
														className="text-xs"
													/>
												</div>
											</div>
										</Link>
									</li>
								))}
								<li>
									<NavTheme className="navButton h-full hover:bg-white hover:text-black dark:invert max-xs:w-[var(--navItemSize)] xs:w-full">
										<div className="navHoverMenu">
											<div>Invert</div>
										</div>
									</NavTheme>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
