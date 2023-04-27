export default function ElementCube({ label }: { label: string }) {
	return (
		<>
			<div
				className={`mb-4 grid aspect-square
				w-[30px] scale-75 place-content-center bg-zinc-900 font-mono 
				font-bold text-neutral-100 trans-col-main-theme dark:bg-neutral-50 dark:text-zinc-800
				`}>
				{label}
			</div>
		</>
	);
}
