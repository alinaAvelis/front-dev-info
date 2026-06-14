"use client";
import { useRef } from "react";

import Link from "next/link";
import { useCategorySelector } from "@/lib/features/categories/hooks/use-category-selector";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
const SearchBlock = dynamic(() => import("../search-block/SearchBlock"));
const CloseBtn = dynamic(() => import("../close_btn/CloseBtn"));

const AppHeader = () => {
	const categoriesMenu = useRef(null);
	const pathname = usePathname();
	const categories = useCategorySelector();

	// const postResoursesPages =
	// 	pathname.includes(`/posts/`) || pathname.includes(`/resourses`);

	const handleOpenMenu = () => {
		const menu = categoriesMenu.current;
		menu?.classList.add("open");
		const body = document.querySelector("body");
		body.style.overflow = "hidden";
	};

	const onClose = () => {
		const menu = categoriesMenu.current;
		menu?.classList.remove("open");
		const body = document.querySelector("body");
		body.style.overflowY = "visible";
	};

	return (
		<header
			className={`z-10  w-full  bg-white fixed right-0 top-0
				
			`}
		>
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
								<button
									key={item.id}
									className={`button button--no_styles text-base md:text-lg ${pathname.includes(item.path) ? "underline" : ""}`}
									type="button"
									data-type="open_donate"
									onClick={handleOpenMenu}
								>
									{item.title}
								</button>
							) : (
								<Link
									key={item.id}
									className={`link text-base font-bold md:text-lg ${pathname.includes(item.path) ? "underline!" : ""}`}
									href={item.path}
								>
									{item.title}
								</Link>
							),
						)}
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

const menuItems = [
	{
		id: "1hl",
		title: "Категории",
		path: "/categories",
		type: "button",
	},
	{
		id: "2hl",
		title: "Посты",
		path: "/posts",
		type: "link",
	},
	{
		id: "3hl",
		title: "Ресурсы",
		path: "/resourses",
		type: "link",
	},
];

export default AppHeader;
