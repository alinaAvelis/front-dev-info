"use client";

import { SanityCategoriesType } from "@/shared/types/categories";
import { useEffect } from "react";
// import useLoadPosts from "@/hooks/use-load-posts";
import { setCategoriesState } from "@/lib/features/categories/categoriesSlice";
import { setAllPostsState, setLimit, setPostsOnPage } from "@/lib/features/posts/postsSlice";
import { setLanguageState } from "@/lib/features/language/languageSlice";
import { useAppDispatch } from "@/lib/hooks";
import { PostsFromSanityType } from "@/shared/types/posts";
import type { Language } from "@/shared/i18n/config";
export default function StateLayoutDispatcher({
	allPosts,
	categories,
	language,
	children,
	postsLimits,
}: {
	categories: SanityCategoriesType;
	allPosts: PostsFromSanityType;
	language: Language;
	postsLimits: {
		limit: number;
		postsOnPage: number;
	};
	children: React.ReactNode;
}) {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setLanguageState(language));
	}, [dispatch, language]);

	useEffect(() => {
		if (categories.length) {
			dispatch(setCategoriesState(categories));
		}
	}, [categories, dispatch]);

	useEffect(() => {
		if (allPosts.posts.length) {
			dispatch(setAllPostsState(allPosts));
		}
	}, [allPosts, dispatch]);

    useEffect(() => {
		dispatch(setLimit(postsLimits.limit));
        dispatch(setPostsOnPage(postsLimits.postsOnPage));
	}, [allPosts, dispatch, postsLimits.limit, postsLimits.postsOnPage]);

	return <>{children}</>;
}
