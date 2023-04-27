export default function ButtonNormal({
	label,
	className,
}: {
	label: string;
	className?: string | undefined;
}) {
	return (
		<button
			className={`rounded-md
						bg-zinc-500
						p-[1px]
						shadow-[0_0_0_2px_rgba(0,0,0,0.2)]
						transition-[background-position_color_background-color]
						duration-1000 
						dark:bg-white
						dark:shadow-[0_0_0_1px_rgba(255,255,255,0.2)]
						[&>*]:hover:opacity-90 [&>*]:active:opacity-100 
						${className}
		    `}>
			<div
				className="duration-50 flex h-full w-full items-center justify-center rounded-md bg-neutral-100 
				px-10 py-2 text-sm font-bold text-zinc-600 opacity-100
				 transition-all dark:bg-zinc-900 dark:text-neutral-300
				">
				{label}
			</div>
		</button>
	);
}