export default function ElementTitle({ label }: { label: string }) {
	return (
		<div className="mb-4">
			<h1 className="table w-full table-fixed break-words text-[clamp(2.5rem,7vw,3.5rem)] font-medium tracking-normal text-zinc-700 dark:text-white">
				{label}
			</h1>
			<div className="h-[1px] animate-hl1 hlGradient1 "></div>{" "}
		</div>
	);
}
