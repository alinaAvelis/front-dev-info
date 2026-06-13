import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { postsQuery } from "@/sanity/lib/queries";
import PostsPage from "@/app-pages/posts";

export const metadata = {
	title: "FrontDevInfo - все посты",
	description: "Посты о frontend разработке",
	keywords: "программирование, посты, JavaScrip, frontend",
};

const Posts = async () => {
	const posts = await sanityFetch({
		query: postsQuery,
		params: { limit: 3 },
	});

	return <PostsPage posts={posts} />;
};

export default Posts;
