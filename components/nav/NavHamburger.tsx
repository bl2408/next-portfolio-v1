"use client";
import { useEffect, useState } from "react";

export default function NavHamburger({ className }: { className?: string }) {
	const [menu, setMenu] = useState(false);

	const toggleMenuClass = (bool: boolean) => {
		if (bool) {
			document.documentElement.classList.add("nav-open");
		} else {
			document.documentElement.classList.remove("nav-open");
		}
	};

	const toggleMenu = (set: "off" | "on" | null) => {
		let bool = menu;
		switch (set) {
			case "on":
				bool = false;
				break;
			case "off":
				bool = true;
				break;
		}
		toggleMenuClass(!bool);
		setMenu((state) => {
			return !bool;
		});
	};

	useEffect(() => {
		toggleMenu("off");
		window.addEventListener("resize", () => toggleMenu("off"));
		const navHeaderLinks = document.querySelectorAll("#nav-header a");

		if (!!navHeaderLinks) {
			navHeaderLinks.forEach((link) =>
				link.addEventListener("click", () => {
					toggleMenu("off");
				})
			);
		}

		return () =>
			window.removeEventListener("resize", () => toggleMenu("off"));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<button
			onClick={() => toggleMenu(null)}
			className={`navButton ${className}`}>
			<div className="navMenuBars">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</button>
	);
}
