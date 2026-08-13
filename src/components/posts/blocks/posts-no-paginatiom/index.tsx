"use client"

import { usePreloadedPostsSelector } from "@/lib/features/posts/hooks/use-posts-selector";
import Posts from "@/components/posts/blocks/posts";

const PostsNoPagination = () => {
	const posts = usePreloadedPostsSelector();

	return (
		<>
			<Posts posts={posts} />
		</>
	);
};

export default PostsNoPagination;
