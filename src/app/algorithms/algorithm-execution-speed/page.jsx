
import { postsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import dynamic from "next/dynamic";
import AlgorithmSpeedContent from "@/components/posts-content/algorithm-speed-content/AlgorithmSpeedContent";
const Breadcrumbs = dynamic(() =>
    import("@/components/breadcrumbs/Breadcrumbs")
);
import StaticPost from "@/components/static-post/page"

const Post = async () => {
    const allPosts = await sanityFetch({
        query: postsQuery,
    });

    return (
        <div className='container--center main_container relative px-5 md:px-10'>
            <Breadcrumbs
                pathArr={[
                    { name: "Посты", url: "/posts" },
                    { name: "Скорость выполнения алгоритма" },
                ]}
            />
            <StaticPost allPosts={allPosts} title="Скорость выполнения алгоритма" createDate="2023-10-30">
                <AlgorithmSpeedContent />
            </StaticPost>
        </div>
    );
};

export default Post;
