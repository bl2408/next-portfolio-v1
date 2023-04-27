import ButtonNormal from "./ButtonNormal";
import ElementTitle from "./ElementTitle";

export default function SectionProjects() {
	return (
		<section className="">
			<ElementTitle label="Somethinglongers" />
			<div
				className="mb-4 grid content-start gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 [&>*]:aspect-square [&>*]:bg-neutral-100 
			[&>*]:dark:bg-zinc-800
			">
				<div>1</div>
				<div>2</div>
				<div>3</div>
				<div>4</div>
			</div>
			<div className="text-center">
				<ButtonNormal label={"See more"} href="/" />
			</div>
		</section>
	);
}
