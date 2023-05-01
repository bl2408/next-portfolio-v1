import NavTheme from "./NavTheme";
import Link from "next/link";
import NavHamburger from "./NavHamburger";

export default function Nav({
	items,
	className,
}: {
	items: { label: string; to: string }[];
	className?: string;
}) {
	return (
		<nav
			id="nav-header"
			className={`flex justify-items-stretch pr-4 ${className}`}>
			<div className="flex w-full items-center justify-end gap-1">
				<ul
					className={`[&>*]: [&>*]: w-full gap-4 overflow-auto bg-neutral-50
					 text-center font-semibold uppercase trans-col-main-theme dark:bg-zinc-900 
					max-sm:absolute max-sm:left-0 max-sm:top-[60px] max-sm:hidden max-sm:h-[calc(100vh-var(--navTopHeight)-var(--navBottomHeight))] max-sm:flex-col max-sm:nav-open:flex
					sm:flex sm:justify-end sm:text-xs [&>*]:p-2
					`}>
					{items.map((item) => (
						<li key={`${item.label}`}>
							<Link
								href={item.to}
								className="text-black hover:text-neutral-500 dark:text-white hover:dark:text-zinc-300">
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
