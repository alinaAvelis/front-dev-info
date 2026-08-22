
import useClientDictionary from "@/dictionary/hooks/use-client-dictionary";
type DesctopMenuProps = {
	menu:
		| Array<{
				classList: string;
				text: string;
				linkName: string;
				element: HTMLHeadingElement;
		  }>
		| null
		| undefined;
};

export default function DesktopMenu({ menu }: DesctopMenuProps) {
	const text = useClientDictionary("general");

	const onClick = (element: HTMLHeadingElement) => {
		window.scrollTo({
			left: 0,
			top: element.offsetTop ,
			behavior: "smooth",
		});
	};

	return (
		<div
			className={`menu overflow-y-auto px-3 pb-3 max-h-[calc(100vh-170px)]`}
		>
			<h2>{text("contents")}</h2>
			{menu?.map((item, i) => (
				<button
					key={i}
					className={`menu__item text-left ${item.classList}`}
					onClick={() => onClick(item.element)}
				>
					{item.text}
				</button>
			))}
		</div>
	);
}
