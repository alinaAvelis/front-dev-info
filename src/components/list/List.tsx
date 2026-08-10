"use client";
import Link from "next/link";
import CategoryLink from "@/components/category-link";
import useDictionary from "@/shared/i18n/use-dictionary";
import { PostsType } from "@/shared/types/posts";

interface ListPropsType {
	data: PostsType;
	to?: string;
	withCategory?: boolean;
}
const List = ({ data, to = "posts", withCategory = true }: ListPropsType) => {
	const general = useDictionary("general");
	return (
		<>
			{data?.length > 0 ? (
				<div className="posts_container">
					{data?.map((item, i) => {
						return (
							<div
								key={i + "card"}
								className="pt-3 flex gap-5 items-center"
							>
								<Link
									className="card_title justify-between bold px-3 py-1 text-xl md:text-2xl link font-bold border border-solid border-[#dddde1]"
									href={
										item.toOtherPage
											? `${item.slug.current}`
											: `/${to}/${item.slug.current}`
									}
								>
									{i + 1}) {item.title}
								</Link>

								{withCategory && <CategoryLink card={item} />}
							</div>
						);
					})}
				</div>
			) : (
				<p className="text-center">{general.noResult}</p>
			)}
		</>
	);
};

export default List;
