"use client";
import { useState } from "react";

import { sanityFetch } from "@/sanity/lib/sanityFetch";
import {
	postsQuery,
	filteredByIdQuery,
	searchQuery,
} from "@/sanity/lib/queries";
import {
	
	setPostsState,
	setPostsLoading
} from "@/lib/features/posts/postsSlice";
import { useAppDispatch } from "@/lib/hooks";
import { PostsFromSanityType } from "@/types/posts";
export default function useLoadPosts({
	initialPosts,
	limit = 9,
}: {
	initialPosts: PostsFromSanityType;
	limit?: number;
	searchValue?: string;
}) {
	const [posts, setPosts] = useState(initialPosts);
	const [loading, setLoading] = useState(false);
	const [hasMore, setHasMore] = useState(true);
	const dispatch = useAppDispatch();
	const loadMorePosts = async () => {
			dispatch(setPostsLoading(true));
		const lastPost = posts[posts.length - 1];

		let query;

		let params;

		 if (lastPost) {
			query = filteredByIdQuery;
			params = {
				lastId: lastPost._id,
				limit: limit,
			};
		} else {
			query = postsQuery;
			params = {
				limit: limit,
			};
		}

		const newPosts: PostsFromSanityType = await sanityFetch({ query, params });

		if (newPosts.posts.length > 0) {
			setPosts([...posts, ...newPosts.posts]);
		} else {
			setHasMore(false);
		}
		dispatch(setPostsLoading(false));
	};

	const searchPosts = async (searchValue: string) => {
		dispatch(setPostsLoading(true));
		// const lastPost = posts[posts.length - 1];

		const query = searchQuery;
		const params = {
			// lastId: lastPost._id,
			limit: limit,
			searchQuery: searchValue,
		};

		const newPosts: PostsFromSanityType = await sanityFetch({ query, params });

		console.log(newPosts)

		if (newPosts.posts.length > 0) {
			dispatch(setPostsState(newPosts));
		}

		dispatch(setPostsLoading(false));
	};

	return { posts, loading, hasMore, loadMorePosts, searchPosts };
}
