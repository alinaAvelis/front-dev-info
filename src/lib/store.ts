import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/searchSlice";
import categoriesReducer  from "./features/categories/categoriesSlice";
import postsReducer  from "./features/posts/postsSlice";
import languageReducer from "./features/language/languageSlice";
// import { setupListeners } from "@reduxjs/toolkit/query";

// export const store = configureStore({
//   reducer: {
//     searchReducer,
//   },
//   devTools: process.env.NODE_ENV !== "production",
// });

export const makeStore = () => {
	return configureStore({
		reducer: {
			searchReducer,
			categoriesReducer,
			postsReducer,
			languageReducer
		},
		devTools: process.env.NODE_ENV !== "production",
	});
};

// setupListeners(store.dispatch);

export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
