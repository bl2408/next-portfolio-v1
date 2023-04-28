import ElementCube from "./(components)/ElementCube";
import SectionProjects from "./(components)/SectionProjects";
import Splash from "./(components)/Splash";

export default function Home() {
	return (
		<>
			{/* <a href="#cheese">asdasdasd</a> */}
			<ElementCube label="01" />
			{/* splash */}
			<Splash />
			{/* content */}
			<ElementCube label="02" id="projects" />
			<SectionProjects />
		</>
	);
}
