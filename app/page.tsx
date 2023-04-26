import ButtonHl from "./(components)/ButtonHl";
import ElementCube from "./(components)/ElementCube";

export default function Home() {
	return (
		<>
			<ElementCube label="01" />
			{/* splash */}
			<div className="flex h-[calc(100vh-140px)] min-h-[400px] w-full items-center justify-center">
				<div className="flex min-h-[50%] flex-col gap-2 sm:w-[60%]">
					<p className="text-sm text-black dark:text-white">
						Hi, my name is
					</p>
					<h1 className="animate-hl1 text-[clamp(3rem,7vw,7rem)] font-medium tracking-wide hlGradient1 text-hl-[.15rem]">
						Brian Lambert
						<div className="h-[1px] w-full animate-hl1 hlGradient1"></div>
					</h1>
					<p className="mt-5 text-lg sm:w-[80%] ">
						Passionate problem-solver with a drive to learn and
						grow, seeking to transition into the world of{" "}
						<span className="text-black dark:text-white">
							Software Engineering
						</span>
						.
					</p>
					<p className="mt-8 flex justify-center">
						<ButtonHl label={"Hello"} />
					</p>
				</div>
			</div>
			{/* content */}
			<div className="h-[400px]">test</div>
			<div className="h-[400px]">test</div>
			<div className="h-[400px]">test</div>
		</>
	);
}
