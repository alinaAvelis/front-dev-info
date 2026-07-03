
import PostsPage from "@/app-pages/posts";

export const metadata = {
	title: "FrontDevInfo - все посты",
	description: "Посты о frontend разработке",
	keywords: "программирование, посты, JavaScrip, frontend",
};

const Posts = async () => {

	return <PostsPage />;
};

export default Posts;
