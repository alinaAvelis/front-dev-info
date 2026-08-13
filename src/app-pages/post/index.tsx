
import PostLayout from "@/layouts/post-layout";
import { PostType } from "@/shared/types/posts";
import getServerDictionary from "@/dictionary/hooks/get-server-dictionary";
import PostDate from "@/components/post/post-date";
import PortableTextBlock from "@/components/post/portable-text";

type PostPagePropsType = {
	post: PostType;
};

const PostPage = async ({ post }: PostPagePropsType) => {
	const text = await getServerDictionary("menu");

	return (
		<PostLayout
			currentPostSlug={post?.slug?.current}
			pathArr={[
				{ name: text("posts"), url: "/posts" },
				{ name: post?.title },
			]}
		>
			<h1>{post?.title}</h1>

			<PostDate releaseDate={post.releaseDate}/>
			<PortableTextBlock content={post.content}/>
		</PostLayout>
	);
};

export default PostPage;
