"use client";

import Link from "next/link";
import { useTranslations } from "@/shared/i18n/use-translations";

type BreadcrumbItem = {
	name?: string;
	translationKey?: "home" | "categories" | "posts" | "resources";
	url?: string;
};

type BreadcrumbsPropsType = {
	pathArr: BreadcrumbItem[];
};

const Breadcrumbs = ({ pathArr }: BreadcrumbsPropsType) => {
	const t = useTranslations();
	const path: BreadcrumbItem[] = [
		{ translationKey: "home", url: "/" },
		...pathArr,
	];

	return (
		<div className="flex mt-5 items-center">
			{path.map((item, index) => {
				const name = item.translationKey
					? t("common", item.translationKey)
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
