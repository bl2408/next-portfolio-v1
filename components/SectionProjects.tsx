import Link from "next/link";
import { listContents } from "@/lib/content-loader";
import CardProject from "./misc/CardProject";

export default async function SectionProjects({
	displayLimit,
	seeMore = false,
}: {
	displayLimit: number | undefined;
	seeMore: boolean;
}) {
	const projectsList = listContents({ folder: "projects" });

	const displayItems = () => {
		if (projectsList.length === 0) {
			return [];
		}
		const arr = [];
		let limit = displayLimit || projectsList.length;
		limit = limit > projectsList.length ? projectsList.length : limit;
		let i = 0;
		do {
			if (seeMore && i >= limit) {
				break;
			}
			arr.push(<CardProject {...projectsList[i]} path={"projects/"} />);
			i++;
		} while (i < projectsList.length);

		return arr;
	};

	return (
		<section className="">
			<div className="mb-4 grid content-center gap-6 sm2:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{displayItems()}
			</div>
			{seeMore ? (
				<div className="text-center">
					<Link href={"/projects"} className="btn-hl">
						See more
					</Link>
				</div>
			) : null}
		</section>
	);
}
