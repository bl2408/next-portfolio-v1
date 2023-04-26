export default function ButtonHl({
	label,
	className,
}: {
	label: string;
	className?: string | undefined;
}) {
	return (
		<button
			className={`rounded-md
		                bg-[0%_0%] p-[1px]
		                shadow-[0_0_0_1px_rgba(0,0,0,0.5)]
						transition-[background-position_color_background-color]
						duration-1000 hlGradient1 hover:bg-[99%_99%]
						dark:shadow-[0_0_0_1px_rgba(255,255,255,0.5)] hover:[&>*]:bg-opacity-90
						active:[&>*]:bg-opacity-100
		    `}>
			<div
				className="duration-50 h-full w-full rounded-md bg-neutral-50 px-12 py-3 text-zinc-600 
				 transition-colors dark:bg-zinc-900 dark:text-neutral-300
				">
				{label}
			</div>
		</button>
	);
}
