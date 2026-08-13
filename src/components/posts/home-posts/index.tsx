import getServerDictionary from "@/dictionary/hooks/get-server-dictionary";

import PostsContainer from "../blocks/posts-container";
import PostsNoPagination from "../blocks/posts-no-paginatiom";
import ToPostPages from "@/components/posts/blocks/to-post-pages";
const HomePosts = async () => {
	const text = await getServerDictionary("general");

	return (
		<PostsContainer title={text("lastPosts")}>

			<PostsNoPagination />
			<ToPostPages />
		</PostsContainer>
	);
};

export default HomePosts;
