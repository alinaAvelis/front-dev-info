"use client";
import LinearIndeterminate from "@/shared/ui/linear-progress";
import { usePostsLoadingOnPaginationSelector } from "@/lib/features/posts/hooks/use-posts-selector";
import useClientDictionary from "@/dictionary/hooks/use-client-dictionary";
import  {  useCallback } from "react";
import {
	useLimitSelector,
	usePostsOnPageSelector,

} from "@/lib/features/posts/hooks/use-posts-selector";

import useLoadPosts from "@/hooks/use-load-posts";
import { setLimit } from "@/lib/features/posts/postsSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useSearchValueSelector } from "@/lib/features/search/hooks/use-search-selector";


const AddPostsButton = () => {
	const text = useClientDictionary("general");
	const postsLoading = usePostsLoadingOnPaginationSelector();
	const postsOnPage = usePostsOnPageSelector();

	const searchValue = useSearchValueSelector();

	const limit = useLimitSelector();
	const dispatch = useAppDispatch();
	const { loadMorePosts } = useLoadPosts();
	const onAddPosts = useCallback(() => {
		const postsLimit = limit + postsOnPage;
		dispatch(setLimit(postsLimit));
		loadMorePosts(searchValue, postsLimit);
		
	}, [limit, postsOnPage, dispatch, loadMorePosts, searchValue]);
	if (postsLoading) {
		return (
			<div className="w-full md:w-1/2 mt-5 md:mt-10 mx-auto">
				<LinearIndeterminate />{" "}
			</div>
		);
	}
	return (
		<button
			className="button button--center"
			onClick={onAddPosts}
			disabled={postsLoading}
		>
			{postsLoading ? (
				<span>{text("loading")}...</span>
			) : (
				text("loadMore")
			)}
		</button>
	);
};

export default AddPostsButton;
