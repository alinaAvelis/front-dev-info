import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SanityCategoriesType } from "@/types/categories";

type categoriesState = {
	categories: SanityCategoriesType;
	categorySlug: string | undefined;
};

const initialState = {
	categories: [],
	categorySlug: undefined,
} as categoriesState;

export const categories = createSlice({
	name: "categories",
	initialState,
	reducers: {
		reset: () => initialState,
		setCategoriesState: (
			state,
			action: PayloadAction<SanityCategoriesType>,
		) => {
			state.categories = action.payload;
		},
    setCategorySlug: (
			state,
			action: PayloadAction<string | undefined>,
		) => {
			state.categorySlug = action.payload;
		},
	},
});

export const { setCategoriesState, setCategorySlug, reset } = categories.actions;
export default categories.reducer;
