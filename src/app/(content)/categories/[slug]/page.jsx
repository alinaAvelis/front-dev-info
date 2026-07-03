import {
	categoryQuery,
	categoryPostsQuery,
} from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import CategoryPage from "@/app-pages/category";

export async function generateMetadata({ params }) {
	const parametrs = await params;
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
	const parametrs = await params;

	const category = await sanityFetch({
		query: categoryQuery,
		params: parametrs,
	});

	const categoryPosts = await sanityFetch({
		query: categoryPostsQuery,
		params: { categorySlug: parametrs.slug, limit: 9 },
	});


	return (
		<div className="max-w-screen-xl mx-auto">
			<CategoryPage allPosts={categoryPosts} category={category} />
		</div>
	);
};

export default Category;
