import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="flex max-md:col-span-2 max-md:col-start-1 max-md:row-start-3 md:items-end">
			<ul className="mb-8 flex w-full justify-center max-md:flex-wrap max-md:justify-around md:flex-col md:items-center md:gap-4">
				{[
					{
						icon: faAt,
						href: "/",
					},
					{
						icon: faGithub,
						href: "/",
					},
					{
						icon: faLinkedin,
						href: "/",
					},
				].map((obj, i) => (
					<li key={i} className="">
						<Link href={obj.href}>
							<FontAwesomeIcon
								icon={obj.icon}
								className="h-full w-[30px] p-1"
							/>
						</Link>
					</li>
				))}
			</ul>
		</footer>
	);
}
