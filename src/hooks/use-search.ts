"use client";
// import { useState } from "react";
// import { useAppSelector } from "@/lib/hooks";

import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { getPostsQuery } from "@/sanity/lib/queries";
import { PostsFromSanityType } from "@/types/posts";
import {
	setPostsState,
	setPostsLoading,
	// setHasMorePosts
} from "@/lib/features/posts/postsSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useLanguageSelector } from "@/lib/features/language/hooks/use-langugage-selector";

export default function useSearch({ limit = 9 }) {
	const dispatch = useAppDispatch();
	const language = useLanguageSelector();

	const searchPosts = async (searchValue: string) => {
		dispatch(setPostsLoading(true));
		// const lastPost = posts[posts.length - 1];

		const query = getPostsQuery({ searchValue, language });
		const params = {
			// lastId: lastPost._id,
			limit: limit,
			searchQuery: searchValue,
		};

		const newPosts: PostsFromSanityType = await sanityFetch({
			query,
			params,
		});
	
		dispatch(setPostsState(newPosts));
		dispatch(setPostsLoading(false));
	};

	return { searchPosts };
}
