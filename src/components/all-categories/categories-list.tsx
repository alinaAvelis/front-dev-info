"use client";

import { useCategoriesSelector } from "@/lib/features/categories/hooks/use-category-selector";

import CategoryLink from "@/components/category-link";

const CategoriesList = () => {
	const categories = useCategoriesSelector();

	return (
		<>
			{categories?.map((item, i) => {
				return <CategoryLink key={item._id} category={item} />;
			})}
		</>
	);
};

export default CategoriesList;
