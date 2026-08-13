
import Link from "next/link";
import useClientDictionary from "@/dictionary/hooks/use-client-dictionary";
type DesctopMenuProps = {
	menu:
		| Array<{
				classList: string;
				text: string;
				linkName: string;
		  }>
		| null
		| undefined;
};

export default  function DesktopMenu({ menu }: DesctopMenuProps) {
	const text =  useClientDictionary("general");

	return (
		<div className={`menu overflow-y-auto px-3 pb-3 max-h-[calc(100vh-170px)]`}>
			<h2>{text("contents")}</h2>
			{menu?.map((item, i) => (
				<Link
					key={i}
					className={`menu__item ${item.classList}`}
					href={`#${item.linkName}`}
				>
					{item.text}
				</Link>
			))}
		</div>
	);
}
