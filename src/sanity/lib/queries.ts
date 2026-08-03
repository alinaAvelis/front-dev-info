import { groq } from "next-sanity";

type GetPostPropsType = {
	language: string;
	searchValue?: string;
	category?: string;

	orderType?: string;
};

export function getPostsQuery({
	language,
	searchValue,
	category,

	orderType = "desc",
}: GetPostPropsType) {
	const categoryCondition = category
		? "&& category->slug.current == $categorySlug"
		: "";
	const searchCondition = searchValue ? "&& title match $searchQuery" : "";
	const order = orderType === "desc" ? "order(releaseDate desc)" : "";
	const typeBlock = `*[_type == "posts-${language}" ${categoryCondition} ${searchCondition}]`;
	return groq`
  {
    "posts": ${typeBlock} | ${order} [0...$limit],
    "total": count( ${typeBlock} ),
	// "tags" :  ${typeBlock}.tags
  }`;
}

export const getPostQuery = (language = "en") =>
	groq`*[_type == "posts-${language}" && active == true && slug.current == $slug][0]`;

export const getCategoryQuery = (language = "en") =>
	groq`*[_type == "categories-${language}" && activeCategory == true && slug.current == $slug][0]`;
export const getCategoriesQuery = (language = "en") =>
	groq`*[_type == "categories-${language}" && activeCategory == true]`;

export const getResourcesQuery = (language = "en") =>
	groq`*[_type == "resources-${language}" && isActive == true] | order(_createdAt asc)`;
