import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import {
	faAt,
	faCode,
	faExternalLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Aside() {
	return (
		<aside className=" max-md:h-[50px] max-md:w-full max-md:px-3 md:sticky md:top-[80px] md:flex md:h-[calc(100vh-80px)] md:min-h-[350px] md:items-end">
			<ul className=" flex w-full justify-center max-md:flex-wrap max-md:justify-around max-md:p-2 md:mb-14 md:flex-col md:items-center md:gap-8">
				{[
					{
						icon: faAt,
						href: "mailto:hi@brianlambert.dev",
						label: "Email",
					},
					{
						icon: faAddressCard,
						href: "https://bl2408.github.io/resume-v1/",
						label: "CV",
					},
					{
						icon: faGithub,
						href: "https://github.com/bl2408",
						label: "GitHub",
					},
					{
						icon: faLinkedin,
						href: "https://www.linkedin.com/in/bl24/",
						label: "LinkedIn",
					},
					{
						icon: faCode,
						href: "https://github.com/bl2408/next-portfolio-v1",
						label: "Source",
					},
				].map((obj, i) => (
					<li key={i} className="relative ">
						<Link
							href={obj.href}
							target="_blank"
							className=" [&>*]:hover:scale-125 [&>div]:hover:md:left-[200%]">
							<FontAwesomeIcon
								icon={obj.icon}
								className="h-full w-[16px] p-1 transition-transform"
							/>
							<div className="absolute flex scale-0 items-center transition-all duration-200 max-md:hidden md:left-[100%] md:top-0">
								<div className="mr-[-1px] h-0 w-0 [border-bottom:5px_solid_transparent] [border-right:6px_solid_black] [border-top:5px_solid_transparent] dark:border-r-white"></div>
								<div className="flex items-center gap-2 bg-black px-2 py-1 font-mono text-[.6rem] font-bold uppercase text-white dark:bg-white dark:text-black">
									{obj.label}
									<FontAwesomeIcon
										icon={faExternalLink}
										className="h-full w-[8px]"
									/>
								</div>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</aside>
	);
}
