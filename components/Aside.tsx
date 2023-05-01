import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import {
	faAt,
	faCode,
	faExternalLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Aside({
	className,
}: {
	className?: string | undefined;
}) {
	return (
		<aside
			className={`flex h-full w-full items-center max-md:p-2 md:items-end ${className}`}>
			<ul className="flex w-full items-center gap-8 max-md:justify-around md:w-full md:flex-col md:pb-10">
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
					<li key={i} className="relative">
						<Link
							href={obj.href}
							target="_blank"
							className="flex justify-center p-2 [&>*]:hover:scale-125 [&>*]:hover:text-neutral-500 [&>*]:hover:dark:text-zinc-300 [&>div]:hover:md:left-[220%]">
							<FontAwesomeIcon
								icon={obj.icon}
								className=" h-full w-[16px] text-black  transition-transform  dark:text-white"
							/>
							<div className="absolute flex scale-0 items-center transition-all duration-200 max-md:hidden md:left-[100%] md:top-1">
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
