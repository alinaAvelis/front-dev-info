import { postQuery, postsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import PostPage from "@/components/post-page/page";

export async function generateMetadata({ params }) {
    const post = await sanityFetch({
        query: postQuery,
        params,
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
    const post = await sanityFetch({
        query: postQuery,
        params,
    });

    const allPosts = await sanityFetch({
        query: postsQuery,
    });

    return (
		<PostPage post={post} allPosts={allPosts} />
    );
};

export default Post;
