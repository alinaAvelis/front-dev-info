"use client";

import { SanityCategoriesType } from "@/shared/types/categories";
import { useEffect } from "react";
import { setCategoriesState } from "@/lib/features/categories/categoriesSlice";
import { setAllPostsState, setLimit, setPostsOnPage } from "@/lib/features/posts/postsSlice";
import { useAppDispatch } from "@/lib/hooks";
import { PostsFromSanityType } from "@/shared/types/posts";

export default function StateLayoutDispatcher({
	allPosts,
	categories,
	children,
	postsLimits,
}: {
	categories: SanityCategoriesType;
	allPosts: PostsFromSanityType;
	postsLimits: {
		limit: number;
		postsOnPage: number;
	};
	children: React.ReactNode;
}) {
	const dispatch = useAppDispatch();

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
