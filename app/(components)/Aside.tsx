import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAt, faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Aside() {
	return (
		<aside className=" max-md:h-[50px] max-md:w-full max-md:px-3 md:sticky md:top-[80px] md:flex md:h-[calc(100vh-80px)] md:min-h-[200px] md:items-end">
			<ul className=" flex w-full justify-center max-md:flex-wrap max-md:justify-around max-md:p-2 md:mb-8 md:flex-col md:items-center md:gap-4">
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
					{
						icon: faCode,
						href: "/",
					},
				].map((obj, i) => (
					<li key={i} className="">
						<Link href={obj.href} className="[&>*]:hover:scale-125">
							<FontAwesomeIcon
								icon={obj.icon}
								className="h-full w-[16px] p-1 transition-transform"
							/>
						</Link>
					</li>
				))}
			</ul>
		</aside>
	);
}
