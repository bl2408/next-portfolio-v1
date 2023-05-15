export default function Splash() {
	return (
		<div className="main-spacing relative mt-[var(--navTopPad)] grid min-h-[calc(100vh-var(--navTopPad))] w-full place-items-center dark:invert">
			<div className="w-full pb-20 lg:max-w-[80%]">
				{/* Header */}
				<div className="text-left text-[clamp(4.2rem,14vw,12rem)] font-semibold leading-[.9em] tracking-tight text-black">
					Brian <br /> Lambert
				</div>
				{/* Sub section */}

				<div className="flex flex-col gap-8 border-t-[6px] border-black xs:items-end">
					<span className="inline-block bg-black px-4 py-1 text-center text-[clamp(1.6rem,7vw,5rem)] font-medium tracking-tight text-white">
						Software Engineer
					</span>
					<p className=" max-w-[650px] text-lg font-semibold tracking-wider text-black">
						Eager to learn and to grow as a professional,
						continuously seeking out new challenges to push myself
						further.
					</p>
				</div>
			</div>
		</div>
	);
}
