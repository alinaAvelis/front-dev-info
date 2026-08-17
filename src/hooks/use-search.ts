"use client";
// import { useState } from "react";
// import { useAppSelector } from "@/lib/hooks";

import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { getPostsQuery } from "@/sanity/lib/queries";
import { PostsFromSanityType } from "@/shared/types/posts";
import {
	setPostsState,
	setPostsLoading,
	// setHasMorePosts
} from "@/lib/features/posts/postsSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useT } from "next-i18next/client";
import { Language } from "@/shared/types/language";

export default function useSearch({ limit = 9 }) {
	const dispatch = useAppDispatch();
	const { i18n } = useT();
	const currentLanguage = i18n.language as Language;

	const searchPosts = async (searchValue: string) => {
		dispatch(setPostsLoading(true));
		// const lastPost = posts[posts.length - 1];

		const query = getPostsQuery({ searchValue, language: currentLanguage });
		const params = {
			// lastId: lastPost._id,
			limit: limit,
			searchQuery: `${searchValue}*`,
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
