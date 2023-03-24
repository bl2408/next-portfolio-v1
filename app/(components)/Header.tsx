import Link from "next/link";

export default function Header() {
	return (
		<header className="grid content-center p-4">
			<Link href={"/"}>
				<img
					className="m-w-full max-h-full"
					src="./logo-bl.svg"
					alt="BL Logo"
				/>
			</Link>
		</header>
	);
}
