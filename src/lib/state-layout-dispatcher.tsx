"use client";

import { SanityCategoriesType } from "@/types/categories";
import { useEffect } from "react";
// import useLoadPosts from "@/hooks/use-load-posts";
import { setCategoriesState } from "@/lib/features/categories/categoriesSlice";
import { setAllPostsState } from "@/lib/features/posts/postsSlice";
import { useAppDispatch } from "@/lib/hooks";
import {PostsFromSanityType} from "@/types/posts";
export default function StateLayoutDispatcher({
	allPosts,
	categories,
	children,
}: {
	categories: SanityCategoriesType;
	allPosts: PostsFromSanityType;
	children: React.ReactNode;
}) {
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (categories.length) {
			dispatch(setCategoriesState(categories));
		}
	}, [categories]);

	useEffect(() => {
		if (allPosts.posts.length) {
			dispatch(setAllPostsState(allPosts));
		}
	}, [allPosts]);

	return <>{children}</>;
}
