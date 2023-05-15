import ElementPills from "./ElementPills";

export default function CardProject({
	cardNo,
	title,
	description,
	pills,
	imgSrc,
	className,
}: {
	cardNo?: string;
	title?: string;
	description?: string;
	pills?: string[];
	imgSrc?: string;
	className?: string;
}) {
	return (
		<div
			className={`relative aspect-square min-w-[300px]
					max-w-[475px] border-[5px]
					border-black transition-all duration-200 
					hover:scale-[.99]  [&_.card-img]:hover:grayscale-0
					[&_.card-line]:hover:w-[50%] [&_.card-number]:hover:opacity-100
			${className}
		`}>
			<div className="card-number absolute right-1 top-1 z-10 text-right font-mono text-2xl font-extrabold opacity-10 transition-[opacity]">
				{cardNo}
			</div>
			<img
				src={imgSrc}
				alt={title}
				className="card-img h-[50%] w-full object-cover grayscale transition-[filter] duration-300 xl:h-[60%]"
			/>
			<div className="relative grid h-[50%] grid-rows-[2fr_2fr_30px] gap-2 p-3 xl:h-[40%]">
				<div>
					<h1 className="mb-2 text-3xl font-semibold ">{title}</h1>
					<div className="card-line h-[4px] w-[20%] bg-black transition-[width]"></div>
				</div>

				<p className=" scrollbar justify-self-start overflow-auto overscroll-contain tracking-wider">
					{description}
				</p>
				<div className="hide-sb overflow-auto">
					<ElementPills items={pills} />
				</div>
			</div>
		</div>
		// <div
		// 	className={`grid aspect-square
		// 		w-full grid-rows-[2fr_1fr]

		// 		${className}
		// 	`}>
		// 	<div className="card-img grayscale transition-[filter] duration-300">
		// 		<img
		// 			src={imgSrc}
		// 			alt={title}
		// 			className="max-h-full w-full object-cover"
		// 		/>
		// 	</div>

		// </div>
	);
}

// import {
// 	faCode,
// 	faImage,
// 	faLaptopCode,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Link from "next/link";
// import ElementPills from "./ElementPills";

// export default function CardProject({
// 	slug,
// 	title,
// 	path,
// 	thumb,
// 	tech,
// 	shortDesc,
// }: {
// 	slug?: string;
// 	title?: string;
// 	path?: string;
// 	thumb?: string;
// 	tech?: string[];
// 	shortDesc?: string;
// }) {
// 	return (
// 		<Link
// 			href={`${path}${slug}`}
// 			className="hover: relative z-0 flex aspect-square
//             items-end overflow-clip rounded-md
// 			 bg-zinc-900 trans-col-main-theme
// 			 [&>:first-child]:hover:translate-y-0 [&>:first-child]:hover:opacity-100 [&>:last-child>*]:hover:opacity-80
// 			 [&>:last-child]:hover:bg-[99%_99%] [&>:last-child]:hover:opacity-40
//             ">
// 			<div
// 				className="z-[11] flex h-full translate-y-1/3 flex-col justify-end gap-3 bg-gradient-to-t
//                     from-black to-black/0 p-6 opacity-0 transition-all duration-300 [&>*]:text-left
//                 ">
// 				<h3
// 					className="table w-full table-fixed
//                     break-words text-2xl font-semibold tracking-normal text-white
//                 ">
// 					{title}
// 				</h3>
// 				{shortDesc ? (
// 					<p className="max-h-18 hide-sb overflow-auto text-neutral-200">
// 						{shortDesc}
// 					</p>
// 				) : null}

// 				<ElementPills
// 					items={tech}
// 					className="max-h-14 overflow-auto text-neutral-200"
// 					classNameItem="bg-neutral-500 px-3 py-1 text-xs"
// 				/>
// 			</div>
// 			<div
// 				className="absolute bottom-0 left-0 right-0 top-0 z-10 rounded-md bg-[0%_0%]
// 				p-[2px] transition-[background-position,color,background-color,opacity]
// 				duration-1000 hlGradient1
// 			">
// 				{!!thumb ? (
// 					<img
// 						src={`${path}images/${thumb}`}
// 						alt={title}
// 						className="h-full w-full rounded-md opacity-100"
// 					/>
// 				) : (
// 					<div className="flex h-full w-full items-center justify-center rounded-md bg-zinc-800 p-4">
// 						<FontAwesomeIcon
// 							icon={faCode}
// 							className="h-full w-[100px] opacity-80"
// 						/>
// 					</div>
// 				)}
// 			</div>
// 		</Link>
// 	);
// }
