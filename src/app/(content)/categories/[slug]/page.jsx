import { postsQuery, categoryQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import CategoryPage from "../../../../components/category-page";

export async function generateMetadata({ params }) {
    const parametrs = await params
    const category = await sanityFetch({
        query: categoryQuery,
        params: parametrs,
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
    const parametrs = await params
    const allPosts = await sanityFetch({
        query: postsQuery,
    });

    const category = await sanityFetch({
        query: categoryQuery,
        params: parametrs,
    });

    return (
        <CategoryPage allPosts={allPosts} category={category} />
    );
};

export default Category;
