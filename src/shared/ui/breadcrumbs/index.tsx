"use client";

import Link from "next/link";
import useDictionary from "@/shared/i18n/use-dictionary";
import { MenuTranslationKey } from "@/shared/i18n/dictionary";

type BreadcrumbItem = {
	name?: string;
	translationKey?: MenuTranslationKey;
	url?: string;
};

type BreadcrumbsPropsType = {
	pathArr: BreadcrumbItem[];
};

const Breadcrumbs = ({ pathArr }: BreadcrumbsPropsType) => {
	const menu  = useDictionary("menu") as { [key in MenuTranslationKey]: string };
	const path: BreadcrumbItem[] = [
		{ translationKey: "home", url: "/" },
		...pathArr,
	];

	return (
		<div className="flex mt-5 items-center">
			{path.map((item, index) => {
				const name = item.translationKey
					? menu[item.translationKey]
					: item.name;

				return item.url ? (
					<Link
						key={`${name}${index}`}
						href={item.url}
						className="px-2 first:pl-0 relative before:absolute before:block before:rounded-full before:w-1 before:h-1 before:top-[0.6em] before:-right-[2px] before:bg-[#979797] last:before:hidden text-sm!"
					>
						{name}
					</Link>
				) : (
					<span
						key={`${name}${index}`}
						className="px-2 first:pl-0 relative before:absolute before:block before:rounded-full before:w-1 before:h-1 before:top-[0.6em] before:-right-[2px] before:bg-[#979797] last:before:hidden text-sm! truncate"
					>
						{name}
					</span>
				);
			})}
		</div>
	);
};

export default Breadcrumbs;
