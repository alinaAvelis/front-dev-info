"use client";
import Link from "next/link";
import useDictionary from "@/shared/i18n/use-dictionary";

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

export default function DesktopMenu({ menu }: DesctopMenuProps) {
	const general = useDictionary("general");

	return (
		<div className={`menu overflow-y-auto px-3 pb-3 max-h-[calc(100vh-170px)]`}>
			<h2>{general?.contents}</h2>
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
