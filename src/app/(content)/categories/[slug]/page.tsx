import { getCategoryQuery, getPostsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import CategoryPage from "@/app-pages/category";
import { getServerLanguage } from "@/shared/i18n/get-server-language";
import getIsMobile from "@/utils/get-is-mobile";
import { PostsFromSanityType } from "@/shared/types/posts";

import { SanityCategoryType } from "@/shared/types/categories";
type CategoryProps = {
	params: {
		slug: string
	}
}
export async function generateMetadata({ params }: CategoryProps) {
	const parametrs =  params;
	const language = await getServerLanguage();
	const category: SanityCategoryType = await sanityFetch({
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
		keywords: category?.meta_keywords,
	};
}

const Category = async ({ params }: CategoryProps) => {
	const parametrs =  params;
	const language = await getServerLanguage();
	const isMobile = await getIsMobile();

	const category: SanityCategoryType = await sanityFetch({
		query: getCategoryQuery(language),
		params: parametrs,
	});

	const categoryPosts: PostsFromSanityType = await sanityFetch({
		query: getPostsQuery({ category: parametrs.slug, language }),
		params: {
			categorySlug: parametrs.slug,
			limit: isMobile ? 3 : 9,
		},
	});

	return <CategoryPage allPosts={categoryPosts} category={category} />;
};

export default Category;
