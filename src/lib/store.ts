import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/search/searchSlice";
import categoriesReducer  from "./features/categories/categoriesSlice";
import postsReducer  from "./features/posts/postsSlice";

export const makeStore = () => {
	return configureStore({
		reducer: {
			searchReducer,
			categoriesReducer,
			postsReducer,
		},
		devTools: process.env.NODE_ENV !== "production",
	});
};

// setupListeners(store.dispatch);

export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
