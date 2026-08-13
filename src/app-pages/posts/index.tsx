import getServerDictionary from "@/dictionary/hooks/get-server-dictionary";
import Breadcrumbs from "@/shared/ui/breadcrumbs";
import AllPosts from "@/components/posts/all-posts";
import PostsPageDispatcher from "./posts-page-dispatcher";
const PostsPage = async () => {
	const text = await getServerDictionary("general");

	return (
		<>
			{" "}
			<PostsPageDispatcher />
			<div className="container--center max-w-screen-xl mx-auto main_container relative px-5 md:px-10">
				<Breadcrumbs
					pathArr={[{ translationKey: "posts", url: "/posts" }]}
				/>
				<AllPosts title={text("allPosts")} />
			</div>
		</>
	);
};

export default PostsPage;
