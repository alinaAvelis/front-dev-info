import { postsQuery, categoryQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import CategoryPage from "../../../../components/category-page";

export async function generateMetadata({ params }) {
    const category = await sanityFetch({
        query: categoryQuery,
        params,
    });

    if (!category)
        return {
            title: "Not Found",
            description: "The page is not found",
        };

    return {
        title: category?.title,
        description: category?.shortDescription,
        keywords: category?.tags,
    };
}

const Category = async ({ params }) => {
    const allPosts = await sanityFetch({
        query: postsQuery,
        params,
    });

    const category = await sanityFetch({
        query: categoryQuery,
        params,
    });

    return (
        <CategoryPage allPosts={allPosts} category={category} />
    );
};

export default Category;
