"use client"
import  { useEffect, useState } from "react";
import Link from "next/link";

type DesctopMenuProps = {
	menu: Array<{
		classList: string;
		text: string;
		linkName: string;
	}>  | null | undefined;
};

export default function DesktopMenu({ menu }: DesctopMenuProps) {
	const [changeMenuPosition, setChangeMenuPosition] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (scrollY > 200) {
				setChangeMenuPosition(true);
			} else {
				setChangeMenuPosition(false);
			}
		});
	});
	return (
		<div className={`menu ${changeMenuPosition && "menu--top"} hidden md:block`}>
			<h2>Содержание</h2>
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
