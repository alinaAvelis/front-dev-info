import { getPostQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import PostPage from "@/app-pages/post";
import { getServerLanguage } from "@/shared/i18n/get-server-language";
import NoTranslatedPost from "@/error-handlers/no-translated-post";
import { PostType } from "@/shared/types/posts";
type PostProps = {
	params: {
		slug: string;
	}
}

export async function generateMetadata({ params }: PostProps) {
	const parametrs = params;
	const language = await getServerLanguage();
	const post: PostType = await sanityFetch({
		query: getPostQuery(language),
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
	const parametrs = params;
	const language = await getServerLanguage();
	const post: PostType = await sanityFetch({
		query: getPostQuery(language),
		params: parametrs,
	});

	if (!post) {
		return <NoTranslatedPost />;
	}
	return <PostPage post={post} />;
};

export default Post;
