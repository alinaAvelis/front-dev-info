"use client";

import Link from "next/link";
import { useCategoriesSelector } from "@/lib/features/categories/hooks/use-category-selector";
import { usePathname } from "next/navigation";
import useClientDictionary from "@/dictionary/hooks/use-client-dictionary";
import NavigationMenu, { MenuAction } from "@/shared/ui/menu";
import { SanityCategoryType } from "@/shared/types/categories";

const NavMenu = () => {
	const pathname = usePathname();
	const categories = useCategoriesSelector();
	const text = useClientDictionary("menu")

	const categoriesItems = categories?.map((item: SanityCategoryType) => {
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
		translationKey: string;
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
				buttonText={text(item.translationKey)}
				items={item?.items || []}
				disabled={false}
			/>
		) : (
			<Link
				key={item.id}
				className={`link text-base font-bold md:text-lg ${pathname.includes(item.path) ? "underline!" : ""}`}
				href={item.path}
			>
				{text(item.translationKey)}
			</Link>
		),
	);
};

export default NavMenu;
