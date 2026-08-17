"use client";
import { reset } from "@/lib/features/search/searchSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useSearchValueSelector } from "@/lib/features/search/hooks/use-search-selector";
import { setPostsByPreloaded } from "@/lib/features/posts/postsSlice";
import { useEffect } from "react";

const PostsPageDispatcher = () => {
	const searchValue = useSearchValueSelector();
	const dispatch = useAppDispatch();

	useEffect(() => {
		return () => {
			if (searchValue) {
				dispatch(reset());
				dispatch(setPostsByPreloaded());
			}
		};
	}, [dispatch, searchValue]);

	return null;
};

export default PostsPageDispatcher;
