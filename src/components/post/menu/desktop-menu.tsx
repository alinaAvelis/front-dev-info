"use client";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";

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
	const [changeMenuPosition, setChangeMenuPosition] = useState(false);

	const onScroll = useCallback(() => {
		if (scrollY > 200) {
			setChangeMenuPosition(true);
		} else {
			setChangeMenuPosition(false);
		}
	}, []);
	useEffect(() => {
		window.addEventListener("scroll", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, [onScroll]);
	return (
		<div className={`menu ${changeMenuPosition && "menu--top"}`}>
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
