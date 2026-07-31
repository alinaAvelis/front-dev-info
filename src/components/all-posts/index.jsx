"use client";
import React, { useEffect, useMemo, useState, useCallback } from "react";
import ToPostPages from "./to-post-pages";
import dynamic from "next/dynamic";
import {
	useLimitSelector,
	usePostsOnPageSelector,
	usePostsLoadingSelector,
} from "@/lib/features/posts/hooks/use-posts-selector";
import Cards from "@/components/cards/Cards";
import useLoadPosts from "@/hooks/use-load-posts";
import { setLimit } from "@/lib/features/posts/postsSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useSearchValueSelector } from "@/lib/features/search/hooks/use-search-selector";
import PostsGridSkeleton from "@/shared/ui/sceletons/posts-sceletone";
import TypeButtons from "./type-buttons";
const List = dynamic(() => import("@/components/list/List"));
const AddPostsButton = dynamic(() => import("./add-posts-button"));

const AllPosts = ({
	posts,
	postsTotalCount,
	title,
	homePage = false,
	withCategory = true,
}) => {
	const postsOnPage = usePostsOnPageSelector();
	const postsLoading = usePostsLoadingSelector();
	const searchValue = useSearchValueSelector();
	const [view, setView] = useState("cards");
	const limit = useLimitSelector();
	const dispatch = useAppDispatch();
	const { loadMorePosts } = useLoadPosts({
		initialPosts: posts,
		// limit: postsOnPage,
		// totalPosts: postsTotalCount || postsOnPage,
	});

	const hasMorePosts = useMemo(() => {
		return postsTotalCount > limit;
	}, [postsTotalCount, limit]);

	const onAddPosts = useCallback(() => {
		const postsLimit = limit + postsOnPage;
		dispatch(setLimit(postsLimit));
		loadMorePosts(searchValue, postsLimit);
		// setSliceValue((prev) => prev + postsOnPage);
	}, [limit, postsOnPage, dispatch, loadMorePosts, searchValue]);

	const bottomLink = homePage ? (
		<ToPostPages />
	) : hasMorePosts ? (
		<AddPostsButton onClick={onAddPosts} />
	) : null;

	useEffect(() => {
		return () => {
			dispatch(setLimit(postsOnPage));
		};
	}, [dispatch, postsOnPage]);

	return (
		<section className="section tabs mt-5 md:mt-10 w-full mt-10">
			<h1 className="title">{title}</h1>
			<TypeButtons setView={setView} />

			{postsLoading ? (
				<PostsGridSkeleton count={limit} />
			) : (
				<>
					{view === `cards` ? (
						<Cards data={posts} withCategory={withCategory} />
					) : (
						<List data={posts} withCategory={withCategory} />
					)}
					{bottomLink}
				</>
			)}
		</section>
	);
};

export default AllPosts;
