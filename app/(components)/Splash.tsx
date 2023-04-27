import ButtonHl from "./ButtonHl";
import ButtonNormal from "./ButtonNormal";

export default function Splash() {
	return (
		<div className="flex h-[calc(100vh-140px)] min-h-[400px] w-full items-center justify-center">
			<div className="flex min-h-[60%] flex-col gap-1 sm:w-[60%]">
				<p className="text-sm text-black dark:text-white">
					Hi, my name is
				</p>
				<h1 className="animate-hl1 text-[clamp(3rem,7vw,8rem)] font-medium tracking-normal hlGradient1 text-hl-[.15rem]">
					Brian Lambert
				</h1>
				<h2 className=" font-medium lg:text-lg">
					I&apos;m a{" "}
					<span className="text-black dark:text-white">
						Software Engineer
					</span>{" "}
					focused on crafting high-impact web experiences.
				</h2>
				<div className="mt-2 h-[1px] animate-hl1 hlGradient1"></div>
				<div className="max-w-[600px]">
					<p className="mt-8 text-zinc-400 ">
						Always eager to learn and to grow as a professional,
						continuously seeking out new challenges to push myself
						further.
					</p>
					<p className="mt-10 grid gap-4 xs:grid-cols-2">
						<ButtonHl label={"See my work"} />
						<ButtonNormal label={"Say hello"} />
					</p>
				</div>
			</div>
		</div>
	);
}
