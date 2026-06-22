"use client";
// import { useEffect } from "react";
import AllPosts from "@/components/all-posts";
import dynamic from "next/dynamic";
import { useCategorySelector } from "@/lib/features/categories/hooks/use-category-selector";
import {
	usePostsSelector,
	usePostsTotalSelector,
	// usePreloadedPostsSelector,
} from "@/lib/features/posts/hooks/use-posts-selector";
// import { setPostsState } from "@/lib/features/posts/postsSlice";
// import { useAppDispatch } from "@/lib/hooks";
const Breadcrumbs = dynamic(() => import("@/components/breadcrumbs"));

const PostsPage = () => {
	const categories = useCategorySelector();
	const posts = usePostsSelector();
	// const preloadedPosts = usePreloadedPostsSelector();
	const postsTotalCount = usePostsTotalSelector();
	// const dispatch = useAppDispatch();
	// useEffect(() => {
	// 	dispatch(setPostsState(preloadedPosts));
	// }, [dispatch, preloadedPosts]);
	// console.log(posts)
	return (
		<div className="container--center max-w-screen-xl mx-auto main_container relative px-5 md:px-10">
			<Breadcrumbs pathArr={[{ name: "Посты", url: "/posts" }]} />
			<AllPosts
				posts={posts}
				postsTotalCount={postsTotalCount}
				title="Все посты"
				categories={categories}
			/>
		</div>
	);
};

export default PostsPage;
