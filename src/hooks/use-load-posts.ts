"use client";


import { sanityFetch } from "@/sanity/lib/sanityFetch";
import {
	
	getAllPostsQuery,

} from "@/sanity/lib/queries";
import {
	
	setPostsState,
	setPostsLoading,
} from "@/lib/features/posts/postsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { PostsType, PostsFromSanityType } from "@/types/posts";

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
	const loadMorePosts = async (searchValue = "", limit = 9) => {
		dispatch(setPostsLoading(true));
		// let total = totalPosts;
		// const lastPost = initialPosts?.[initialPosts?.length - 1];

		let query;

		let params;

		if (searchValue) {
			// if (searchValue) {
				query = getAllPostsQuery({
					language,
					bySearch: true,
				});
				params = {
					// lastId: lastPost._id,
					limit: limit,
					searchQuery: searchValue,
				};
			// } else {
			// 	query = filteredByIdQuery;
			// 	params = {
			// 		// lastId: lastPost._id,
			// 		limit: limit,
			// 	};
			// }
		} else {
			query = getAllPostsQuery({
				language,
			});
			params = {
				limit: limit,
			};
		}

		const newPosts: PostsFromSanityType = await sanityFetch({
			query,
			params,
		});

		if (newPosts.total > 0) {
			console.log(newPosts)
			// setPosts([...posts, ...newPosts.posts]);
			// console.log("posts", posts);
			dispatch(setPostsState(newPosts));
			// total = newPosts.total;
		}

		// if (total > limit) {
		// 	dispatch(setHasMorePosts(true));
		// } else {
		// 	dispatch(setHasMorePosts(false));
		// }
		dispatch(setPostsLoading(false));
	};

	return { loadMorePosts };
}
