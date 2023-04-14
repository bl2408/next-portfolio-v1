"use client";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";

export default function ButtonTheme() {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<button
			onClick={toggleTheme}
			className={`aspect-square h-full flex-wrap items-center justify-center`}>
			<FontAwesomeIcon
				icon={faCircleHalfStroke}
				className="h-full w-[16px] rotate-180 transition-transform dark:rotate-0"
			/>
		</button>
	);
}
