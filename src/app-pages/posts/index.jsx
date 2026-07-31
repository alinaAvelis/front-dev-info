"use client";

import AllPosts from "@/components/all-posts";
import dynamic from "next/dynamic";
import { useCategoriesSelector } from "@/lib/features/categories/hooks/use-category-selector";
import {
	usePostsSelector,
	usePostsTotalSelector,
} from "@/lib/features/posts/hooks/use-posts-selector";
import useDictionary from "@/shared/i18n/use-dictionary";
import { reset } from "@/lib/features/search/searchSlice";
import { useAppDispatch } from "@/lib/hooks";

import { useEffect } from "react";
const Breadcrumbs = dynamic(() => import("@/shared/ui/breadcrumbs"));

const PostsPage = () => {
	const categories = useCategoriesSelector();
	const posts = usePostsSelector();
	const postsTotalCount = usePostsTotalSelector();
	// const searchValue = useSearchValueSelector();
	const general = useDictionary("general");
	const dispatch = useAppDispatch();
	useEffect(() => {
		return () => {
			dispatch(reset());
		};
	}, [dispatch]);

	return (
		<div className="container--center max-w-screen-xl mx-auto main_container relative px-5 md:px-10">
			<Breadcrumbs
				pathArr={[{ translationKey: "posts", url: "/posts" }]}
			/>
			<AllPosts
				posts={posts}
				postsTotalCount={postsTotalCount}
				title={general.allPosts}
				categories={categories}
			/>
		</div>
	);
};

export default PostsPage;
