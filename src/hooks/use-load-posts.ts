"use client";


import { sanityFetch } from "@/sanity/lib/sanityFetch";
import {
	
	getAllPostsQuery,

} from "@/sanity/lib/queries";
import {
	
	setPostsState,
	setPostsLoading,
} from "@/lib/features/posts/postsSlice";
import { useAppDispatch } from "@/lib/hooks";
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
	const loadMorePosts = async (searchValue = "", limit = 9) => {
		dispatch(setPostsLoading(true));
		// let total = totalPosts;
		// const lastPost = initialPosts?.[initialPosts?.length - 1];

		let query;

		let params;

		if (searchValue) {
			// if (searchValue) {
				query = getAllPostsQuery({
					language: "en",
					bySearch: true,
					withLastId: true,
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
				language: "en",
			});
			params = {
				limit: limit,
			};
		}

			console.log(params)
		const newPosts: PostsFromSanityType = await sanityFetch({
			query,
			params,
		});

		console.log("newPosts", newPosts);
	

		if (newPosts.total > 0) {
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
