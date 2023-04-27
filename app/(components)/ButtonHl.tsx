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
		                bg-[0%_0%]
						p-[1px]
						shadow-[0_0_0_2px_rgba(0,0,0,0.2)]
						transition-[background-position_color_background-color]
						duration-1000 hlGradient1 hover:bg-[99%_99%]
						dark:shadow-[0_0_0_1px_rgba(255,255,255,0.2)]
						[&>*]:hover:opacity-90 [&>*]:active:opacity-100 
						${className}
		    `}>
			<div
				className="duration-50 flex h-full w-full items-center justify-center rounded-md bg-neutral-50 
				 px-10 py-2 text-sm font-semibold text-zinc-600 opacity-100
				 transition-all dark:bg-zinc-900 dark:text-neutral-300
				">
				{label}
			</div>
		</button>
	);
}
