
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostsType } from "@/types/posts";
// import { SanityCategoriesType } from "@/types/categories";

type postsState = {
  posts: PostsType;
  preloaded: PostsType;
  loading: boolean;
  hasMorePosts: boolean;
  total: number;
};

const initialState = {
  posts: [],
  preloaded: [],
  loading: false,
  hasMorePosts: true,
  total: 0,
} as postsState;

export const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reset: () => initialState,
    setPostsState: (state, action) => {
      state.posts = action.payload.posts;
      state.total = action.payload.total;
    },
    setAllPostsState: (state, action) => {
      state.posts = action.payload.posts;
      state.preloaded = action.payload.posts;
        state.total = action.payload.total;
    },
    setPostsLoading: (state, action) => {
      state.loading = action.payload;
    },
    setHasMorePosts: (state, action) => {
      state.hasMorePosts = action.payload;
    },
    // setPostsByPreloaded: (state) => {
    //   state.posts = state.preloaded;
    // },
  },
});

export const {
  setPostsState,
  reset,
  setAllPostsState,
  setPostsLoading,
  setHasMorePosts,
} = posts.actions;
export default posts.reducer;
