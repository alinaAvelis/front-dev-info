"use client";

import { useRef } from "react";
import Link from "next/link";
import { useCategoriesSelector } from "@/lib/features/categories/hooks/use-category-selector";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import LanguageSelector from "@/components/language-selector/LanguageSelector";
import useDictionary from "@/shared/i18n/use-dictionary";
import { Language } from "@/shared/i18n/config";
import { MenuTranslationKey } from "@/shared/i18n/dictionary";
const SearchBlock = dynamic(() => import("../search-block/SearchBlock"));
const CloseBtn = dynamic(() => import("@/shared/ui/close-button/CloseButton"));
import NavigationMenu, { MenuAction } from "@/shared/ui/menu";

const AppHeader = ({ language }: { language: Language }) => {
	const categoriesMenu = useRef<HTMLDivElement | null>(null);
	const pathname = usePathname();
	const categories = useCategoriesSelector();
	const menuDictionary = useDictionary("menu") as {
		[key in MenuTranslationKey]: string;
	};

	if (pathname?.startsWith("/studio")) {
		return null;
	}

	const categoriesItems = categories.map((item) => {
		const href = `/categories/${item.slug.current}`
		return {
			id: item._id,
			label: item.title,
			disabled: pathname === href,
			href: href,
		};
	});

	const menuItems: Array<{
		id: string;
		translationKey: MenuTranslationKey;
		path: string;
		type: string;
		items?: MenuAction[];
	}> = [
		{
			id: "1hl",
			translationKey: "categories",
			path: "/categories",
			type: "button",
			items: categoriesItems,
		},
		{
			id: "2hl",
			translationKey: "posts",
			path: "/posts",
			type: "link",
		},
		{
			id: "3hl",
			translationKey: "resources",
			path: "/resourses",
			type: "link",
		},
	];

	const handleOpenMenu = () => {
		const menu = categoriesMenu.current;
		menu?.classList.add("open");
		const body = document.querySelector("body");
		if (body) {
			body.style.overflow = "hidden";
		}
	};

	const onClose = () => {
		const menu = categoriesMenu.current;
		menu?.classList.remove("open");
		const body = document.querySelector("body");

		if (body) {
			body.style.overflow = "visible";
		}
	};

	return (
		<header className="z-20 w-full bg-white fixed right-0 top-0">
			<div className="mx-auto max-w-screen-xl px-5">
				<div className="flex flex-col items-center justify-between gap-5 py-2 sm:flex-row">
					<Link
						className="link text-sm font-bold! text-gray-300! md:text-lg"
						href="/"
						onClick={onClose}
					>
						FRONT-DEV-INFO
					</Link>
					<div className="flex items-center justify-end gap-5">
						{menuItems.map((item) =>
							item.type === "button" ? (
								<NavigationMenu
									key={item.id}
									buttonText={
										menuDictionary[item.translationKey]
									}
									items={item?.items || []}
									disabled={false}
								/>
							) : (
								// <button
								// 	key={item.id}
								// 	className={`button button--no_styles text-base md:text-lg ${pathname.includes(item.path) ? "underline" : ""}`}
								// 	type="button"
								// 	data-type="open_donate"
								// 	onClick={handleOpenMenu}
								// >
								// 	{menuDictionary[item.translationKey]}
								// </button>
								<Link
									key={item.id}
									className={`link text-base font-bold md:text-lg ${pathname.includes(item.path) ? "underline!" : ""}`}
									href={item.path}
								>
									{menuDictionary[item.translationKey]}
								</Link>
							),
						)}
						<LanguageSelector initialLanguage={language} />
					</div>
				</div>

				<div ref={categoriesMenu} className="nav_container h-full">
					<CloseBtn clickHandler={onClose} />

					<nav className="header_nav grid overscroll-contain overflow-y-auto pr-3">
						{categories?.map((item, i) => {
							if (item.activeCategory === true) {
								return (
									<Link
										key={i}
										className="link"
										href={`/categories/${item.slug.current}`}
										onClick={onClose}
									>
										{item.title}
									</Link>
								);
							}
						})}
					</nav>
				</div>
			</div>

			<SearchBlock />
		</header>
	);
};

export default AppHeader;
