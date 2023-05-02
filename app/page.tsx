import ElementTitle from "@/components/misc/ElementTitle";
import ElementCube from "../components/misc/ElementCube";
import SectionProjects from "../components/SectionProjects";
import Splash from "../components/Splash";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function Page() {
	return (
		<>
			{/* <a href="#projects">asdasdasd</a> */}
			<ElementCube label="01" />
			{/* splash */}
			<Splash />
			{/* content */}
			<ElementCube label="02" id="projects" />

			<ElementTitle label="Projects" />
			{/* @ts-expect-error Async Server Component */}
			<SectionProjects displayLimit={4} seeMore />

			<div className="h-[400px]">TEST</div>
			<div className="h-[400px] bg-red-400">TEST</div>
		</>
	);
}
