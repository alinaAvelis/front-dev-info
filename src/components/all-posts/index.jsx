"use client";
import React, { useEffect, useMemo, useState, useCallback } from "react";
import Link from "next/link";

import dynamic from "next/dynamic";
import {
	useLimitSelector,
	usePostsOnPageSelector,
	usePostsLoadingSelector,
	usePostsLoadingOnPaginationSelector,
} from "@/lib/features/posts/hooks/use-posts-selector";
import List from "@/components/list/List";
import useLoadPosts from "@/hooks/use-load-posts";
import { setLimit } from "@/lib/features/posts/postsSlice";
import { useAppDispatch } from "@/lib/hooks";
import useDictionary from "@/shared/i18n/use-dictionary";
import { useSearchValueSelector } from "@/lib/features/search/hooks/use-search-selector";
import PostsGridSkeleton from "@/shared/ui/sceletons/posts-sceletone";
import LinearIndeterminate from "@/shared/ui/linear-progress";

const Cards = dynamic(() => import("@/components/cards/Cards"));

const ToPostPages = () => {
	const general = useDictionary("general");
	return (
		<Link href="/posts" className="button button--fill button--center">
			<span>{general?.toPostsPage}</span>
		</Link>
	);
};

const AddPostsButton = ({ onClick }) => {
	const general = useDictionary("general");
	const postsLoading = usePostsLoadingOnPaginationSelector();
	if (postsLoading) {
		return (
			<div className="w-full md:w-1/2 mt-5 md:mt-10 mx-auto">
				<LinearIndeterminate />{" "}
			</div>
		);
	}
	return (
		<button
			className="button button--fill button--center"
			onClick={onClick}
			disabled={postsLoading}
		>
			{postsLoading ? (
				<span>{general.loading}...</span>
			) : (
				general?.loadMore
			)}
		</button>
	);
};

const CardsButton = ({ onClick }) => {
	const general = useDictionary("general");
	return (
		<button
			type="button"
			onClick={onClick}
			title={general?.cards}
			className="hover:opacity-80 cursor-pointer"
		>
			<svg
				className="fill-gray-600 w-auto h-6 pointer-events-none"
				viewBox="0 0 1920 1920"
			>
				<path
					d="M1800 1320v420c0 33-27 60-60 60h-420v-480h480Zm-600 0v480H720v-480h480Zm-600 0v480H180c-33 0-60-27-60-60v-420h480Zm1200-600v480h-480V720h480Zm-600 0v480H720V720h480Zm-600 0v480H120V720h480Zm1140-600c33 0 60 27 60 60v420h-480V120h420Zm-540 0v480H720V120h480Zm-600 0v480H120V180c0-33 27-60 60-60h420ZM1740 0H180C80.76 0 0 80.76 0 180v1560c0 99.24 80.76 180 180 180h1560c99.24 0 180-80.76 180-180V180c0-99.24-80.76-180-180-180Z"
					fillRule="evenodd"
				/>
			</svg>
		</button>
	);
};

const ListButton = ({ onClick }) => {
	const general = useDictionary("general");
	return (
		<button
			type="button "
			onClick={onClick}
			title={general?.list}
			className="hover:opacity-80 cursor-pointer"
		>
			<svg
				viewBox="0 0 24 24"
				fill="none"
				className="w-auto h-8 pointer-events-none"
			>
				<path
					d="M8 6L21 6.00078M8 12L21 12.0008M8 18L21 18.0007M3 6.5H4V5.5H3V6.5ZM3 12.5H4V11.5H3V12.5ZM3 18.5H4V17.5H3V18.5Z"
					className="stroke-gray-600"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</button>
	);
};

const AllPosts = ({
	posts,
	postsTotalCount,
	title,
	categories,
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
		<div className="w-full mt-10">
			<div className="flex gap-2">
				<CardsButton onClick={() => setView("cards")} />
				<ListButton onClick={() => setView("list")} />
			</div>
			<section className="section tabs mt-5 md:mt-10">
				<h1 className="title">{title}</h1>

				{postsLoading ? (
					<PostsGridSkeleton count={limit} />
				) : (
					<>
						<div className="tabs_btns flex ">
							{view === `cards` ? (
								<Cards
									data={posts}
									categories={categories}
									withCategory={withCategory}
								/>
							) : (
								<List
									data={posts}
									categories={categories}
									withCategory={withCategory}
								/>
							)}
						</div>
						{bottomLink}
					</>
				)}

				{/* <BottomAdds /> */}
			</section>
		</div>
	);
};

export default AllPosts;
