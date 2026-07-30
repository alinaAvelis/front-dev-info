"use client";
import { useEffect } from "react";
import { useCategoriesSelector } from "@/lib/features/categories/hooks/use-category-selector";

import useDictionary from "@/shared/i18n/use-dictionary";
import CategoryLink from "@/components/category-link";
const AllCategories = () => {
	const categories = useCategoriesSelector();
	const general = useDictionary("general");
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<section className="section tabs mt-5 md:mt-10">
			<h1 className="title">{general.categories}</h1>

			<ul className="gap-3 flex flex-wrap ">
				{categories?.map((item, i) => {
					return (
						<li key={item._id}>
							<CategoryLink category={item} />
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default AllCategories;
