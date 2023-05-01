import { readFile, listContents } from "@/lib/content-loader";
import type { Metadata } from "next";

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const data = readFile("projects", params.slug);
	return { title: data.title };
}

export async function generateStaticParams() {
	const data = listContents({ folder: "projects" });

	return data.map((file) => ({
		slug: file.slug,
	}));
}

export default async function Page({ params }: { params: { slug: string } }) {
	const { title, content, date, slug } = readFile("projects", params.slug);
	return (
		<>
			<p>{title} </p>
			<p>{slug} </p>
			<p>{date}</p>
			<p>{content}</p>
		</>
	);
}
