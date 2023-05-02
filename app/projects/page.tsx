import SectionProjects from "@/components/SectionProjects";

export default async function Page() {
	return (
		<>
			{/* @ts-expect-error Async Server Component */}
			<SectionProjects displayLimit={5} />
		</>
	);
}
