"use client";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

export default function NavTheme({
	className,
	children,
}: {
	className?: string;
	children?: ReactNode;
}) {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<button
			onClick={toggleTheme}
			className={`[&>svg]:rotate-180 [&>svg]:transition-transform [&>svg]:dark:rotate-0 ${className}`}>
			<FontAwesomeIcon icon={faCircleHalfStroke} className="text-xl" />
			{children}
		</button>
	);
}
