export default function Home() {
	const test = () => {
		const amt = 50;
		const arr = [];
		for (let i = 0; i < amt; i++) {
			arr.push(
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Obcaecati earum sint ex iure, dolor sit! Maxime, illum
					inventore molestias quis numquam pariatur voluptatem
					voluptate sed tenetur at culpa fuga? Aut!
				</p>
			);
		}
		return arr;
	};

	return (
		<>
			<h1>hello</h1>
			{/* {test()} */}
		</>
	);
}
