"use client";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import ButtonTheme from "./ButtonTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function Nav() {
	const [menu, setMenu] = useState(false);
	const [hamMenu, setHamMenu] = useState(false);

	const toggleBodyScroll = (bool: boolean) => {
		document.body.style.overflow = `${bool ? "auto" : "hidden"}`;
	};

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 640) {
				setHamMenu((state) => true);
			} else {
				setHamMenu((state) => false);
			}
			setMenu((state) => false);
			toggleBodyScroll(true);
		};
		handleResize();

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const toggleMenu = () => {
		toggleBodyScroll(menu);
		setMenu((state) => !menu);
	};

	return (
		<nav className="flex justify-items-stretch border-zinc-200 pr-4 dark:border-zinc-800 md:border-l md:transition-[border] md:duration-700">
			<div className="flex w-full items-center justify-end gap-1">
				<ul
					className={`w-full gap-4 overflow-auto bg-neutral-50 text-center font-semibold uppercase transition duration-700 dark:bg-zinc-900 max-sm:absolute max-sm:top-[60px] max-sm:left-0 max-sm:h-[calc(100vh-60px-50px)] max-sm:flex-col sm:justify-end sm:text-xs [&>*]:p-2  ${
						!hamMenu ? "flex" : menu ? "flex" : "hidden"
					}`}>
					<li>About</li>
					<li>Projects</li>
				</ul>

				<ButtonTheme />

				<button
					className="aspect-square h-full flex-wrap items-center justify-center p-4 max-sm:flex sm:hidden"
					onClick={toggleMenu}>
					{menu ? (
						<FontAwesomeIcon icon={faXmark} />
					) : (
						<FontAwesomeIcon icon={faBars} />
					)}
				</button>
			</div>
		</nav>
	);
}
