import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { HYDRATE } from "next-redux-wrapper";
import { categoryObject } from "../../types";
// Type for our state
export interface CategoriesState {
 categoriesState: Array<categoryObject>;
}

// Initial state
const initialState: CategoriesState = {
    categoriesState: [],
};

// Actual Slice
export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    // Action to set the authentication status
    setCategoriesState: (state, action) => {
      state.categoriesState = action.payload;
    },
  },

});

export const { setCategoriesState } = categoriesSlice.actions;

export const selectCategoriesState = (state: AppState) => state.categories.categoriesState;

export default categoriesSlice.reducer;
