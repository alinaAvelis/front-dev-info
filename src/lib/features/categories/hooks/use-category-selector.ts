
import { useAppSelector } from "@/lib/hooks";

export function useCategorySelector() {
	const categories = useAppSelector(
		(state) => state.categoriesReducer.categories,
	);

	return categories
}
