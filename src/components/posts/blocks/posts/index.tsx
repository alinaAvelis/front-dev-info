"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { usePostsLoadingSelector } from "@/lib/features/posts/hooks/use-posts-selector";
import Cards from "@/components/cards/Cards";
import PostsGridSkeleton from "@/shared/ui/sceletons/posts-sceletone";
import { PostsType } from "@/shared/types/posts";
import TypeButtons from "../type-buttons";
const List = dynamic(() => import("@/components/list/List"));

interface PostsPropsType {
	posts: PostsType;
	withCategory?: boolean;
}

const Posts = ({ posts, withCategory = true }: PostsPropsType) => {
	const postsLoading = usePostsLoadingSelector();
	const [view, setView] = useState("cards");

	return (
		<>
			<TypeButtons setView={setView} />
			{posts === null || postsLoading ? (
				<PostsGridSkeleton />
			) : view === `cards` ? (
				<Cards data={posts} withCategory={withCategory} />
			) : (
				<List data={posts} withCategory={withCategory} />
			)}
		</>
	);
};

export default Posts;
