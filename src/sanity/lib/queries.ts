import { groq } from "next-sanity";

const postsLanguageFilter = (language: string = "en") =>
	`*[_type == "posts-${language}"`;
const categoriesLanguageFilter = (language: string = "en") =>
	`*[_type == "categories-${language}"`;

const getAllPosts = ({
	language = "en",
	bySearch = false,
	withLastId = false,
}) => {
	if (bySearch) {
    const total = `count(${postsLanguageFilter(language)} && title match $searchQuery])`
		if (withLastId) {
			return groq`{
          "posts": ${postsLanguageFilter(language)} && title match $searchQuery && _id > $lastId] | order(_createdAt desc) [0...$limit],
          "total": ${total}
        }`;
		}

		return groq`{
      "posts": ${postsLanguageFilter} && title match $searchQuery] | order(_createdAt desc) [0...$limit],
      "total": ${total}
    }`;
	}

  return groq`
  {
    "posts": ${postsLanguageFilter()}] | order(_createdAt desc) [0...$limit],
    "total": count(${postsLanguageFilter()}])
  }`;
};

export const postQuery = groq`${postsLanguageFilter()} && active == true && slug.current == $slug][0]`;
export const postsQuery = groq`
{
  "posts": ${postsLanguageFilter()}] | order(_createdAt desc) [0...$limit],
  "total": count(${postsLanguageFilter()}])
}
  `;
export const searchQuery = groq`
{
  "posts": ${postsLanguageFilter} && title match $searchQuery] | order(_createdAt desc) [0...$limit],
  "total": count(${postsLanguageFilter} && title match $searchQuery])
}`;

export const searchQueryWithPagination = groq`
{
  "posts": ${postsLanguageFilter} && title match $searchQuery && _id > $lastId] | order(_createdAt desc) [0...$limit],
  "total": count(${postsLanguageFilter} && title match $searchQuery])
}`;

export const categoryPostsQuery = groq`
{
  "posts": ${postsLanguageFilter()}] && category->slug.current == $categorySlug] | order(_createdAt desc) [0...$limit],
  "total": count(${postsLanguageFilter()} && category->slug.current == $categorySlug])
}`;
export const categoryQuery = groq`${categoriesLanguageFilter()} && activeCategory == true && slug.current == $slug][0]`;
export const categoriesQuery = groq`${categoriesLanguageFilter()} && activeCategory == true]`;

// const filtered = await client.fetch(
//   '*[_type == $type && publishedAt > $date] | order(publishedAt desc) [0...$limit]',
//   {
//     type: 'post',
//     date: '2024-01-01',
//     limit: 10,
//   }
// )

// export const filteredByDateQuery = groq`
// {
//   "posts": *[_type == $type && publishedAt > $date] | order(publishedAt desc) [0...$limit],
//   "total": count(${postsLanguageFilter}])
// }`;

// export const filteredByIdQuery = groq`
// {
//   "posts": ${postsLanguageFilter}] | order(_createdAt desc) [0...$limit],
//   "total": count(${postsLanguageFilter}])
// }`;

// export const paginationQuery = groq`
// {
//   "posts": *[_type == $type] | order(_id) [$start...$limit],
//   "total": count(${postsLanguageFilter}])
// }`;
