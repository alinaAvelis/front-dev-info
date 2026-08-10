"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import {
	usePostsSelector,
	usePostsTotalSelector,
} from "@/lib/features/posts/hooks/use-posts-selector";
import { useAppDispatch } from "@/lib/hooks";
import { setPostsState } from "@/lib/features/posts/postsSlice";
import { setCategorySlug } from "@/lib/features/categories/categoriesSlice";
import { setPostsByPreloaded } from "@/lib/features/posts/postsSlice";
import { useSearchValueSelector } from "@/lib/features/search/hooks/use-search-selector";
const Breadcrumbs = dynamic(() => import("@/shared/ui/breadcrumbs"));
const AllPosts = dynamic(() => import("@/components/all-posts"), { ssr: false });
import { PostsFromSanityType } from "@/shared/types/posts";
import { SanityCategoryType } from "@/shared/types/categories";

type CategoryPagePropsType = {
	allPosts: PostsFromSanityType;
	category: SanityCategoryType;
}
const CategoryPage = ({ allPosts, category }: CategoryPagePropsType) => {
	const dispatch = useAppDispatch();
	const posts = usePostsSelector();
	const postsTotalCount = usePostsTotalSelector();
	const searchValue = useSearchValueSelector();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		if (allPosts?.total > 0) {
			dispatch(setPostsState(allPosts));
		}

		if (category?.slug?.current) {
			dispatch(setCategorySlug(category.slug.current));
		}
		return () => {
			dispatch(setCategorySlug(undefined));
			if (!searchValue) {
				dispatch(setPostsByPreloaded());
			}
		};
	}, [allPosts, category.slug, dispatch, searchValue]);

	return (
		<div className="container--center max-w-screen-xl mx-auto main_container relative px-5 md:px-10">
			<Breadcrumbs
				pathArr={[
					{ translationKey: "categories", url: "/categories" },
					{ name: category?.title },
				]}
			/>

			<AllPosts
				posts={posts}
				postsTotalCount={postsTotalCount}
				title={category?.title}
				withCategory={false}
			/>
		</div>
	);
};

export default CategoryPage;
