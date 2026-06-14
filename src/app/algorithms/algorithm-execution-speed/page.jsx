import { postsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import AlgorithmSpeedPage from "@/app-pages/algorithm-execution-speed";

const Post = async () => {
	const allPosts = await sanityFetch({
		query: postsQuery,
	});

	return <AlgorithmSpeedPage allPosts={allPosts}></AlgorithmSpeedPage>;
};

export default Post;
