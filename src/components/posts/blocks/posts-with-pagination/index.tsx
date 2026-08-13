"use client";
import { useMemo } from "react";
import dynamic from "next/dynamic";
import {
	useLimitSelector,
	usePostsSelector,
	usePostsTotalSelector,
} from "@/lib/features/posts/hooks/use-posts-selector";
import Posts from "@/components/posts/blocks/posts";
const AddPostsButton = dynamic(
	() => import("@/components/posts/blocks/add-posts-button"),
);

interface PostsWithPaginationPropsType {
	withCategory?: boolean;
}

const PostsWithPagination = ({
	withCategory = true,
}: PostsWithPaginationPropsType) => {
	const posts = usePostsSelector();
	const postsTotalCount = usePostsTotalSelector();
	const limit = useLimitSelector();

	const hasMorePosts = useMemo(() => {
		return postsTotalCount > limit;
	}, [postsTotalCount, limit]);

	return (
		<>
			<Posts posts={posts} withCategory={withCategory} />

			{hasMorePosts && <AddPostsButton />}
		</>
	);
};

export default PostsWithPagination;
