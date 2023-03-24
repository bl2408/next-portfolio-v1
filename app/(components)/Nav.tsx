import ButtonTheme from "./ButtonTheme";

export default function Nav() {
	return (
		<nav className="md:border-l">
			<ul>
				<li>link 1</li>
				<li>
					<ButtonTheme />
				</li>
			</ul>
		</nav>
	);
}
