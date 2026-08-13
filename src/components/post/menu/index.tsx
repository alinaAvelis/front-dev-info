"use client";
import { useCallback, useEffect, useState } from "react";
import MobileMenu from "./mobile-menu";
import DesktopMenu from "./desktop-menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useT } from "next-i18next/client";
import { Language } from "@/shared/types/language";

type Links =
	| {
			linkName: string;
			text: string;
			classList: string;
	  }[]
	| null
	| undefined;

export default function PostMenu() {
	const { i18n } = useT();
	const currentLanguage = i18n.language as Language;
	const [menu, setMenu] = useState<Links>([]);
	const isMobile = useMediaQuery("(max-width: 1020px)");
	const createMenu = useCallback(
		(headings: NodeListOf<HTMLHeadingElement>) => {
			try {
				const links = [];

				for (let index = 0; index < headings.length; index++) {
					const element = headings[index];

					const tag = element?.nodeName;
					const text = element?.innerText;
					const linkName = tag + index;
					element.setAttribute("id", `${linkName}`);

					const link = {
						linkName: linkName,
						text: text,
						classList: "relative",
					};

					switch (tag) {
						case "H1":
							link.classList = "first_level";
							break;
						case "H2":
							link.classList = "second_level";
							break;
						case "H3":
							link.classList = "three_level";
							break;
						case "H4":
							link.classList = "four_level";
							break;
						case "H5":
							link.classList = "five_level";
							break;
						case "H6":
							link.classList = "six_level";
							break;
						default:
							break;
					}

					links?.push(link);
				}

				return links;
			} catch (e) {
				console.log(e);
			}
		},
		[],
	);

	useEffect(() => {
		let headings: NodeListOf<HTMLHeadingElement> | null = null;

		const getHeadingsTimout = setTimeout(() => {
			headings = document.querySelectorAll(".heading");
			if (headings) {
				const links = createMenu(headings);
				setMenu(links);
			}
		}, 500);

		return () => {
			if (getHeadingsTimout) {
				clearTimeout(getHeadingsTimout);
			}
		};
	}, [createMenu, currentLanguage]);

	return (
		menu &&
		menu?.length > 0 && (
			<>
				{isMobile ? (
					<MobileMenu menu={menu} />
				) : (
					<DesktopMenu menu={menu} />
				)}
			</>
		)
	);
}
