"use client";
import React, {
	useEffect,
	useMemo,
	useState,
	// useEffectEvent,
	useCallback,
} from "react";
import Link from "next/link";
// import { sortByDate } from "@/utils/utils";
import { useAppSelector } from "@/lib/hooks";
// import BottomAdds from "@/components/adds/bottom-adds/page";
import dynamic from "next/dynamic";
import {
	useHasMorePostsSelector,
	usePostsTotalSelector,
	useLimitSelector,
} from "@/lib/features/posts/hooks/use-posts-selector";
import List from "@/components/list/List";
// import useInnerWidth from "@/hooks/use-inner-width";
import useMediaQuery from "@mui/material/useMediaQuery";
import useSearch from "@/hooks/use-search";
import useLoadPosts from "@/hooks/use-load-posts";
import { setLimit } from "@/lib/features/posts/postsSlice";
import { useAppDispatch } from "@/lib/hooks";

const Cards = dynamic(() => import("@/components/cards/Cards"));

const ToPostPages = () => {
	return (
		<Link href="/posts" className="button button--fill button--center">
			<span>На страницу постов</span>
		</Link>
	);
};

const AddPostsButton = ({ onClick }) => {
	return (
		<button
			className="button button--fill button--center"
			onClick={onClick}
		>
			Еще посты
		</button>
	);
};

const CardsButton = ({ onClick }) => {
	return (
		<button
			type="button"
			onClick={onClick}
			title="карточки"
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
	return (
		<button
			type="button "
			onClick={onClick}
			title="список"
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
	const isMobile = useMediaQuery("(max-width: 768px)");
	const postsOnPage = isMobile ? 3 : 9;
	const searchValue = useAppSelector((state) => state.searchReducer.value);

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
	// const { posts, loading } = useSearch({
	// 	limit: postsOnPage,
	// 	// searchValue: searchValue,
	// });

	// console.log(posts);

	// const [sliceValue, setSliceValue] = useState(postsOnPage);

	const [view, setView] = useState("cards");

	// const filtredPosts = useMemo(() => {
	// 	// if (searchValue && !homePage) {
	// 	// 	return posts.filter((item) =>
	// 	// 		item.title.toLowerCase().includes(searchValue.toLowerCase()),
	// 	// 	);
	// 	// }

	// 	return posts;
	// }, []);

	// useEffect(() => {
	// 	(async () => {
	// 		setSliceValue(postsOnPage);
	// 	})();
	// }, [postsOnPage]);

	// const transformedData = useMemo(() => {
	// 	return filtredPosts.slice(0, sliceValue | postsOnPage);
	// }, [filtredPosts, sliceValue, postsOnPage]);

	// const showMorePostsLink = filtredPosts.length > sliceValue;

	const onAddPosts = useCallback(() => {
		const postsLimit = limit + postsOnPage;
		dispatch(setLimit(postsLimit));
		loadMorePosts(searchValue, postsLimit);
		// setSliceValue((prev) => prev + postsOnPage);
	}, [postsOnPage, loadMorePosts, searchValue, limit]);

	const bottomLink = homePage ? (
		<ToPostPages />
	) : hasMorePosts ? (
		<AddPostsButton onClick={onAddPosts} />
	) : null;

	useEffect(() => {
		return () => {
			dispatch(setLimit(postsOnPage));
		};
	}, [postsOnPage]);

	// const pageTitle = homePage ? (
	// 	<h2 className="visually-hidden">{title}</h2>
	// ) : (
	// 	<h1 className="title">{title}</h1>
	// );

	return (
		<div className="mt-10">
			<div className="w-full">
				<div className="flex gap-2">
					<CardsButton onClick={() => setView("cards")} />
					<ListButton onClick={() => setView("list")} />
				</div>
				<section className="section tabs mt-5 md:mt-10">
					<h1 className="title">{title}</h1>

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

					{/* <BottomAdds /> */}
				</section>
			</div>

			{/* <div className='aside aside--small'>
                <DesctopAdds />
            </div> */}
		</div>
	);
};

export default AllPosts;
