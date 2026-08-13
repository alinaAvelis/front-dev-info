

import Link from "next/link";
import { PathArrayType } from "@/shared/types/breadcrumbs";
import getServerDictionary from "@/dictionary/hooks/get-server-dictionary";

type BreadcrumbsPropsType = {
	pathArr: PathArrayType;
};

const Breadcrumbs = async ({ pathArr }: BreadcrumbsPropsType) => {
	const text  = await getServerDictionary("menu");
	const path: PathArrayType = [
		{ translationKey: "home", url: "/" },
		...pathArr,
	];

	return (
		<div className="flex mt-5 items-center">
			{path.map((item, index) => {
				const name = item.translationKey
					? text(item.translationKey)
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
