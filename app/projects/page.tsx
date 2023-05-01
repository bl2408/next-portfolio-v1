import { listContents } from "@/lib/content-loader";
import Link from "next/link";

export default async function Page() {
	const data = listContents({ folder: "projects" });
	return data.map((d) => (
		<p key={d.slug}>
			<Link href={`projects/${d.slug}`}>{d.title}</Link>
		</p>
	));
}
