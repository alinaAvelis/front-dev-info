import {
	getCategoryQuery,
	getCategoryPostsQuery,
} from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import CategoryPage from "@/app-pages/category";
import { getServerLanguage } from "@/shared/i18n/get-server-language";

export async function generateMetadata({ params }) {
	const parametrs = await params;
	const language = await getServerLanguage();
	const category = await sanityFetch({
		query: getCategoryQuery(language),
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
	const language = await getServerLanguage();

	const category = await sanityFetch({
		query: getCategoryQuery(language),
		params: parametrs,
	});

	const categoryPosts = await sanityFetch({
		query: getCategoryPostsQuery(language),
		params: { categorySlug: parametrs.slug, limit: 9 },
	});


	return (
		<div className="max-w-screen-xl mx-auto">
			<CategoryPage allPosts={categoryPosts} category={category} />
		</div>
	);
};

export default Category;
