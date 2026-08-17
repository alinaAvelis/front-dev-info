"use client";
import { reset } from "@/lib/features/search/searchSlice";
import { useAppDispatch } from "@/lib/hooks";
import { setPostsByPreloaded } from "@/lib/features/posts/postsSlice";
import { useEffect } from "react";

const PostsPageDispatcher = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		return () => {
			dispatch(reset());
			dispatch(setPostsByPreloaded());
		};
	}, [dispatch]);

	return null;
};

export default PostsPageDispatcher;
