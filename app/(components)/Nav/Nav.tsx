import NavTheme from "./NavTheme";
import Link from "next/link";
import NavHamburger from "./NavHamburger";

export type NavMenuProp = {
	items: Array<{ label: string; to: string }>;
};

export default function Nav({ items }: NavMenuProp) {
	return (
		<nav className="flex justify-items-stretch border-zinc-200 pr-4 transition-[border] dark:border-zinc-800 md:border-l">
			<div className="flex w-full items-center justify-end gap-1">
				<ul
					className={`w-full gap-4 overflow-auto bg-neutral-50 p-4 text-center font-semibold uppercase
					 trans-col-main-theme dark:bg-zinc-900 max-sm:absolute max-sm:left-0 max-sm:top-[60px] max-sm:hidden 
					max-sm:h-[calc(100vh-60px-50px)] max-sm:flex-col max-sm:nav-open:flex sm:flex sm:justify-end sm:text-xs [&>*]:p-2
					`}>
					{items.map((item) => (
						<li key={`${item.label}`}>
							<Link
								href={item.to}
								className="hover:text-neutral-500 hover:dark:text-zinc-300">
								{item.label}
							</Link>
						</li>
					))}
				</ul>

				<NavTheme />
				<NavHamburger />
			</div>
		</nav>
	);
}
