import {
	faCode,
	faImage,
	faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function CardProject({
	slug,
	title,
	path,
	thumb,
	tech,
	shortDesc,
}: {
	slug?: string;
	title?: string;
	path?: string;
	thumb?: string;
	tech?: string[];
	shortDesc?: string;
}) {
	return (
		<Link
			href={`${path}${slug}`}
			className="hover: relative z-0 flex aspect-square
            items-end overflow-clip rounded-md
			 bg-zinc-900 trans-col-main-theme
			 [&>:first-child]:hover:translate-y-0 [&>:first-child]:hover:opacity-100 [&>:last-child>*]:hover:opacity-80
			 [&>:last-child]:hover:bg-[99%_99%] [&>:last-child]:hover:opacity-40
            ">
			<div
				className="z-[11] flex h-full translate-y-1/3 flex-col justify-end gap-3 bg-gradient-to-t
                    from-black to-black/0 p-6 opacity-0 transition-all duration-300 [&>*]:text-left
                ">
				<h3
					className="table w-full table-fixed 
                    break-words text-2xl font-semibold tracking-normal text-white
                ">
					{title}
				</h3>
				{shortDesc ? (
					<p className="max-h-18 hide-sb overflow-auto text-neutral-200">
						{shortDesc}
					</p>
				) : null}

				<div className=" hide-sb flex max-h-14 flex-wrap gap-1 overflow-auto text-neutral-200">
					{tech?.map((pill) => (
						<div
							key={pill}
							className="flex-[0_0_auto] rounded-lg bg-neutral-500 px-3 py-1 text-xs">
							{pill}
						</div>
					))}
				</div>
			</div>
			<div
				className="absolute bottom-0 left-0 right-0 top-0 z-10 rounded-md bg-[0%_0%] 
				p-[2px] transition-[background-position,color,background-color,opacity]
				duration-1000 hlGradient1
			">
				{!!thumb ? (
					<img
						src={`${path}images/${thumb}`}
						alt={title}
						className="h-full w-full rounded-md opacity-100"
					/>
				) : (
					<div className="flex h-full w-full items-center justify-center rounded-md bg-zinc-800 p-4">
						<FontAwesomeIcon
							icon={faCode}
							className="h-full w-[100px] opacity-80"
						/>
					</div>
				)}
			</div>
		</Link>
	);
}
