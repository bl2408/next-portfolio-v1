"use client";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";
import ButtonIcon from "../misc/ButtonIcon";

export default function NavTheme() {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<ButtonIcon
			icon={faCircleHalfStroke}
			onClick={toggleTheme}
			className="[&>*]:rotate-180 [&>*]:transition-transform [&>*]:dark:rotate-0"
		/>
	);
}
