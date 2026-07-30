"use client";

import Link from "next/link";
import { useCategoriesSelector } from "@/lib/features/categories/hooks/use-category-selector";
import { usePathname } from "next/navigation";
import useDictionary from "@/shared/i18n/use-dictionary";
import { MenuTranslationKey } from "@/shared/i18n/dictionary";
import NavigationMenu, { MenuAction } from "@/shared/ui/menu";

const NavMenu = () => {
	const pathname = usePathname();
	const categories = useCategoriesSelector();
	const menuDictionary = useDictionary("menu") as {
		[key in MenuTranslationKey]: string;
	};

	if (pathname?.startsWith("/studio")) {
		return null;
	}

	const categoriesItems = categories.map((item) => {
		const href = `/categories/${item.slug.current}`;
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

	return menuItems.map((item) =>
		item.type === "button" ? (
			<NavigationMenu
				key={item.id}
				buttonText={menuDictionary[item.translationKey]}
				items={item?.items || []}
				disabled={false}
			/>
		) : (
			<Link
				key={item.id}
				className={`link text-base font-bold md:text-lg ${pathname.includes(item.path) ? "underline!" : ""}`}
				href={item.path}
			>
				{menuDictionary[item.translationKey]}
			</Link>
		),
	);
};

export default NavMenu;
