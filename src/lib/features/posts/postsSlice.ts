import { createSlice } from "@reduxjs/toolkit";
import { PostsType } from "@/types/posts";
// import { SanityCategoriesType } from "@/types/categories";

type postsState = {
	posts: PostsType;
	preloaded: PostsType;
	loading: boolean;
	hasMorePosts: boolean;
	total: number;
	limit: number;
	postsOnPage: number
};

const initialState = {
	posts: [],
	preloaded: [],
	loading: false,
	hasMorePosts: false,
	total: 0,
	limit: 9,
	postsOnPage: 9,
} as postsState;

export const posts = createSlice({
	name: "posts",
	initialState,
	reducers: {
		reset: () => initialState,
		setPostsState: (state, action) => {
			state.posts = action.payload.posts;
			state.total = action.payload.total;

			// if (action.payload.total > state.limit) {
			// 	state.hasMorePosts = true;
			// } else {
			// 	state.hasMorePosts = false;
			// }
		},
		setAllPostsState: (state, action) => {
			state.posts = action.payload.posts;
			state.preloaded = action.payload.posts;
			state.total = action.payload.total;

			// if (action.payload.total > state.limit) {
			// 		state.hasMorePosts = true;
			// 	} else {
			// 		state.hasMorePosts = false;
			//   }
		},
		setPostsLoading: (state, action) => {
			state.loading = action.payload;
		},
		setHasMorePosts: (state, action) => {
			state.hasMorePosts = action.payload;
		},
		setLimit: (state, action) => {
			state.limit = action.payload;
		},
		setPostsOnPage: (state, action) => {
			state.postsOnPage = action.payload;
		},
		setPostsByPreloaded: (state) => {
			state.posts = state.preloaded;
		},
	},
});

export const {
	setPostsState,
	reset,
	setAllPostsState,
	setPostsLoading,
	setHasMorePosts,
	setPostsByPreloaded,
	setLimit,
	setPostsOnPage
} = posts.actions;
export default posts.reducer;
