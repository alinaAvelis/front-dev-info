
import { useAppSelector } from "@/lib/hooks";

export function useCategoriesSelector() {
	const categories = useAppSelector(
		(state) => state.categoriesReducer.categories,
	);

	return categories
}

export function useCategorySlugSelector() {
	const categorySlug = useAppSelector(
		(state) => state.categoriesReducer.categorySlug,
	);

	return categorySlug
}
