import { readFile, listContents } from "@/lib/content-loader";
import type { Metadata } from "next";

// const startDir = "projects";

// export async function generateMetadata({
// 	params,
// }: {
// 	params: { slug: string };
// }): Promise<Metadata> {
// 	const data = readFile(startDir, params.slug);
// 	return { title: `${data.title} | Brian Lambert` };
// }

// export async function generateStaticParams() {
// 	const data = listContents({ folder: startDir });

// 	return data.map((file) => ({
// 		slug: file.slug,
// 	}));
// }

export default async function Page({ params }: { params: { slug: string } }) {
	return null;

	// const { title, about, date, splash, tech, shortDesc, links, thumb, media } =
	// 	readFile(startDir, params.slug);

	// return (
	// 	<article>

	// 		{/* Col 1 */}
	// 		<div className="grid gap-6">
	// 			{/* Thumb */}
	// 			<div className="grid grid-cols-[50px_1fr] gap-4">
	// 				<div>
	// 					<div className="hlGradient1 aspect-square w-full p-[1px]">
	// 						<img
	// 							src={`/${startDir}/images/${thumb}`}
	// 							alt={`${title} thumbnail`}
	// 						/>
	// 					</div>
	// 				</div>
	// 				<div className="flex flex-col justify-center">
	// 					<p className="text-xs text-neutral-400 dark:text-zinc-600">
	// 						{new Date(date).toDateString()}
	// 					</p>
	// 					<h2 className="text-sm font-medium">{shortDesc}</h2>
	// 				</div>
	// 			</div>

	// 			{/* About */}
	// 			<div className="">{about}</div>
	// 		</div>
	// 		{/* Col 2 */}
	// 		<div></div>
	// 	</article>
	// );
}
