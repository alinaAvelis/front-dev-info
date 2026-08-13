import { getPostQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import PostPage from "@/app-pages/post";
import { getT } from "next-i18next/server";
import NoTranslatedPost from "@/error-handlers/no-translated-post";
import { PostType } from "@/shared/types/posts";
type PostProps = {
	params: {
		slug: string;
	};
};

export async function generateMetadata({ params }: PostProps) {
	const parametrs = await params;
	const { lng } = await getT();
	const post: PostType = await sanityFetch({
		query: getPostQuery(lng),
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

const Post = async ({ params }: PostProps) => {
	const parametrs = await params;
	const { lng } = await getT();
	const post: PostType = await sanityFetch({
		query: getPostQuery(lng),
		params: parametrs,
	});

	if (!post) {
		return <NoTranslatedPost />;
	}
	return <PostPage post={post} />;
};

export default Post;
