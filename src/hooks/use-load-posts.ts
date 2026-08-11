"use client";

import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { getPostsQuery } from "@/sanity/lib/queries";
import {
	setPostsState,
	setLoadingOnPagination,
} from "@/lib/features/posts/postsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { PostsType, PostsFromSanityType } from "@/shared/types/posts";
import { useCategorySlugSelector } from "@/lib/features/categories/hooks/use-category-selector";

export default function useLoadPosts({
	initialPosts,
	// totalPosts,
}: {
	initialPosts: PostsType;
	// limit?: number;
	// totalPosts: number;
}) {
	// const [posts, setPosts] = useState<PostsType>(initialPosts);

	const dispatch = useAppDispatch();
	const language = useAppSelector((state) => state.languageReducer.language);
	const categorySlug = useCategorySlugSelector();
	const loadMorePosts = async (searchValue = "", limit = 9) => {
		dispatch(setLoadingOnPagination(true));
		// let total = totalPosts;
		// const lastPost = initialPosts?.[initialPosts?.length - 1];

		// let query;

		const query = getPostsQuery({
			searchValue,
			category: categorySlug,
			language,
		});

		const params = {
			limit: limit,
			categorySlug,
			searchQuery: searchValue,
		};

		// if (searchValue) {
		// 	// if (searchValue) {
		// 		query = getAllPostsQuery({
		// 			language,
		// 			bySearch: true,
		// 		});
		// 		params = {
		// 			// lastId: lastPost._id,
		// 			limit: limit,
		// 			searchQuery: searchValue,
		// 		};
		// 	// } else {
		// 	// 	query = filteredByIdQuery;
		// 	// 	params = {
		// 	// 		// lastId: lastPost._id,
		// 	// 		limit: limit,
		// 	// 	};
		// 	// }
		// } else {
		// 	query = getAllPostsQuery({
		// 		language,
		// 	});
		// 	params = {
		// 		limit: limit,
		// 	};
		// }

		const newPosts: PostsFromSanityType = await sanityFetch({
			query,
			params,
		});

		if (newPosts.total > 0) {
			dispatch(setPostsState(newPosts));
			
		}
		dispatch(setLoadingOnPagination(false));
	};

	return { loadMorePosts };
}
