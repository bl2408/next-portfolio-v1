import Link from "next/link";

export default function Header() {
	return (
		<header className="grid place-content-center">
			<Link href={"/"} className="w-[45px]">
				<img
					className=" max-h-full max-w-full"
					src="./logo-bl.svg"
					alt="BL Logo"
				/>
			</Link>
		</header>
	);
}
