"use client";

import { useCategoriesSelector } from "@/lib/features/categories/hooks/use-category-selector";
import { SanityCategoryType } from "@/shared/types/categories";
import CategoryLink from "@/components/category-link";
import CategoriesSkeleton from "@/shared/ui/sceletons/categories-sceleton";
const CategoriesList = () => {
	const categories = useCategoriesSelector();

	return (
		<>
			{categories ? categories?.map((item: SanityCategoryType) => {
				return <CategoryLink key={item._id} category={item} />;
			}) : <CategoriesSkeleton/>}
		</>
	);
};

export default CategoriesList;
