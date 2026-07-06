import { getPostQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import PostPage from "@/app-pages/post";
import { getServerLanguage } from "@/shared/i18n/get-server-language";

export async function generateMetadata({ params }) {
	const parametrs = await params;
	const language = await getServerLanguage();
	const post = await sanityFetch({
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

const Post = async ({ params }) => {
	const parametrs = await params;
	const language = await getServerLanguage();
	const post = await sanityFetch({
		query: getPostQuery(language),
		params: parametrs,
	});


	return (
		<PostPage post={post}/>
	);
};

export default Post;
