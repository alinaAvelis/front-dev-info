import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SanityCategoriesType } from "@/types/categories";

type categoriesState = {
  categories: SanityCategoriesType;
};

const initialState = {
  categories: [],
} as categoriesState;

export const categories = createSlice({
  name: "categories",
  initialState,
  reducers: {
    reset: () => initialState,
    setCategoriesState: (state, action: PayloadAction<SanityCategoriesType>) => {
      state.categories = action.payload;
    },
  },
});

export const {
  setCategoriesState,
  reset,
} = categories.actions;
export default categories.reducer;
