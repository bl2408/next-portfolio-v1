"use client";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ButtonIcon from "../ButtonIcon";

export default function NavHamburger() {
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
		return () =>
			window.removeEventListener("resize", () => toggleMenu("off"));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<ButtonIcon
			icon={menu ? faXmark : faBars}
			onClick={() => toggleMenu(null)}
			className="max-sm:flex sm:hidden"
		/>
	);
}
