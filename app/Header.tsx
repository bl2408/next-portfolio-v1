import Link from "next/link";

export default function Header({ className }: { className?: string }) {
	return (
		<header className={`grid place-content-center ${className}`}>
			<Link href={"/"} className="w-[45px]">
				<img
					className=" max-h-full max-w-full transition-[filter,-webkit-filter] duration-1000 dark:invert dark:filter"
					src="/logo-bl.svg"
					alt="BL Logo"
				/>
			</Link>
		</header>
	);
}
