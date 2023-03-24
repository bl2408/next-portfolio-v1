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
		<button onClick={toggleTheme}>
			<FontAwesomeIcon
				icon={faCircleHalfStroke}
				className="h-full w-[20px] p-1"
			/>
		</button>
	);
}
