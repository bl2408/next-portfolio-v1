export default function ElementPills({
	items = [],
	className,
}: {
	items?: string[] | undefined;
	className?: string;
}) {
	return (
		<div className={`hide-sb flex items-center gap-1 ${className}`}>
			{items?.map((pill) => (
				<div
					key={pill}
					className={`flex-[0_0_auto] bg-black px-2 py-1 text-white`}>
					{pill}
				</div>
			))}
		</div>
	);
}
