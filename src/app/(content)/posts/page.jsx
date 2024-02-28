import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { postsQuery } from "@/sanity/lib/queries";
import AllPosts from "@/components/all-posts/page";
import dynamic from "next/dynamic";
const Breadcrumbs = dynamic(() =>
    import("@/components/breadcrumbs/Breadcrumbs")
);

export const metadata = {
    title: "FrontDevInfo - все посты",
    description: "Посты о frontend разработке",
    keywords: "программирование, посты, JavaScrip, frontend",
};

const AllStories = async () => {
    const pageData = await sanityFetch({
        query: postsQuery,
    });

    return (
        <div className='container--center main_container container'>
            <Breadcrumbs pathArr={[{ name: "Посты", url: "/posts" }]} />

            <AllPosts pageData={pageData} title="Все посты" />
        </div>
    );
};

export default AllStories;
