import { postQuery, postsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import PostPage from "@/app-pages/post";

export async function generateMetadata({ params }) {
	const parametrs = await params;
	const post = await sanityFetch({
		query: postQuery,
		params: parametrs,
	});

	if (!post)
		return {
			title: "Not Found",
			description: "The page is not found",
		};

	return {
		title: post?.title,
		description: post?.shortDescription,
		keywords: post?.tags,
	};
}

const Post = async ({ params }) => {
	const parametrs = await params;
	const post = await sanityFetch({
		query: postQuery,
		params: parametrs,
	});

	const allPosts = await sanityFetch({
		query: postsQuery,
	});

	return (
		<PostPage post={post} allPosts={allPosts} />
	);
};

export default Post;
