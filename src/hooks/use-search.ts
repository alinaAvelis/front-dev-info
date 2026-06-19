"use client";
import { useState } from "react";
import { useAppSelector } from "@/lib/hooks";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { searchQuery } from "@/sanity/lib/queries";
import { PostsFromSanityType } from "@/types/posts";
import {
	
	setPostsState,
	setPostsLoading,
    setHasMorePosts
} from "@/lib/features/posts/postsSlice";
import { useAppDispatch } from "@/lib/hooks";

export default function useSearch({ limit = 9 }) {
	
	const dispatch = useAppDispatch();
	
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

        if (newPosts.posts.length > 0) {
            dispatch(setPostsState(newPosts));

            // if(newPosts.total > limit) {
            //     dispatch(setHasMorePosts(true));
            // } else {
            //     dispatch(setHasMorePosts(false));
            // }
        }

        dispatch(setPostsLoading(false));
    };

	return { searchPosts };
}
