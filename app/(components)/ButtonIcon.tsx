import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ButtonIcon({
	icon,
	onClick,
	className,
}: {
	icon: IconDefinition;
	onClick?: () => void | undefined;
	className?: string | undefined;
}) {
	return (
		<button
			onClick={onClick}
			className={`flex aspect-square h-full flex-wrap items-center justify-center [&>*]:hover:scale-125 ${className}`}>
			<FontAwesomeIcon icon={icon} className="w-[16px] " />
		</button>
	);
}
