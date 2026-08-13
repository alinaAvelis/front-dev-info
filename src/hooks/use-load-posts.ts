"use client";

import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { getPostsQuery } from "@/sanity/lib/queries";
import {
	setPostsState,
	setLoadingOnPagination,
} from "@/lib/features/posts/postsSlice";
import { useAppDispatch } from "@/lib/hooks";
import { PostsFromSanityType } from "@/shared/types/posts";
import { useCategorySlugSelector } from "@/lib/features/categories/hooks/use-category-selector";
import { useT } from "next-i18next/client";
import { Language } from "@/shared/types/language";

export default function useLoadPosts() {
	const dispatch = useAppDispatch();
	const { i18n } = useT();
	const currentLanguage = i18n.language as Language;
	const categorySlug = useCategorySlugSelector();
	const loadMorePosts = async (searchValue = "", limit = 9) => {
		dispatch(setLoadingOnPagination(true));

		const query = getPostsQuery({
			searchValue,
			category: categorySlug,
			language: currentLanguage,
		});

		const params = {
			limit: limit,
			categorySlug,
			searchQuery: searchValue,
		};

		const newPosts: PostsFromSanityType = await sanityFetch({
			query,
			params,
		});

		if (newPosts.total > 0) {
			dispatch(setPostsState(newPosts));
		}
		dispatch(setLoadingOnPagination(false));
	};

	return { loadMorePosts };
}
