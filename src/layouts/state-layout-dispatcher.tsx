"use client";

import { SanityCategoriesType } from "@/types/categories";
import { useEffect } from "react";
// import useLoadPosts from "@/hooks/use-load-posts";
import { setCategoriesState } from "@/lib/features/categories/categoriesSlice";
import { setAllPostsState } from "@/lib/features/posts/postsSlice";
import { setLanguageState } from "@/lib/features/language/languageSlice";
import { useAppDispatch } from "@/lib/hooks";
import {PostsFromSanityType} from "@/types/posts";
import type { Language } from "@/shared/i18n/config";
export default function StateLayoutDispatcher({
	allPosts,
	categories,
	language,
	children,
}: {
	categories: SanityCategoriesType;
	allPosts: PostsFromSanityType;
	language: Language;
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

	return <>{children}</>;
}
