import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAt, faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Aside() {
	return (
		<aside className=" max-md:h-[50px] max-md:w-full max-md:px-3 md:sticky md:top-[80px] md:flex md:h-[calc(100vh-80px)] md:min-h-[300px] md:items-end">
			<ul className=" flex w-full justify-center max-md:flex-wrap max-md:justify-around max-md:p-2 md:mb-14 md:flex-col md:items-center md:gap-8">
				{[
					{
						icon: faAt,
						href: "/",
						label: "Email",
					},
					{
						icon: faGithub,
						href: "/",
						label: "GitHub",
					},
					{
						icon: faLinkedin,
						href: "/",
						label: "LinkedIn",
					},
					{
						icon: faCode,
						href: "/",
						label: "Source",
					},
				].map((obj, i) => (
					<li key={i} className="relative ">
						<Link
							href={obj.href}
							className=" [&>*]:hover:scale-125 [&>div]:hover:md:left-[300%]">
							<FontAwesomeIcon
								icon={obj.icon}
								className="h-full w-[16px] p-1 transition-transform"
							/>
							<div className="absolute  flex scale-0 items-center transition-all duration-200 max-md:hidden md:left-[200%] md:top-0">
								<div className="mr-[-1px] h-0 w-0 [border-bottom:5px_solid_transparent] [border-top:5px_solid_transparent] [border-right:6px_solid_black] dark:border-r-white"></div>
								<div className="bg-black px-2 py-1 text-[.5rem] font-bold uppercase text-white dark:bg-white dark:text-black">
									{obj.label}
								</div>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</aside>
	);
}
