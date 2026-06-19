import { groq } from "next-sanity";

export const postQuery = groq`*[_type == "posts" && active == true && slug.current == $slug][0]`;
export const postsQuery = groq`
{
  "posts": *[_type == "posts"] | order(_createdAt desc) [0...$limit],
  "total": count(*[_type == "posts"])
}
  `;
export const categoryPostsQuery = groq`
{
  "posts": *[_type == "posts"  && references($categoryId)] | order(_createdAt desc) [0...$limit],
  "total": count(*[_type == "posts"])
}`;
export const categoryQuery = groq`*[_type == "categories" && activeCategory == true && slug.current == $slug][0]`;
export const categoriesQuery = groq`*[_type == "categories" && activeCategory == true]`;

// const filtered = await client.fetch(
//   '*[_type == $type && publishedAt > $date] | order(publishedAt desc) [0...$limit]',
//   {
//     type: 'post',
//     date: '2024-01-01',
//     limit: 10,
//   }
// )

export const filteredByDateQuery = groq`
{
  "posts": *[_type == $type && publishedAt > $date] | order(publishedAt desc) [0...$limit],
  "total": count(*[_type == "posts"])
}`;

export const filteredByIdQuery = groq`
{
  "posts": *[_type == "posts" && _id > $lastId] | order(_createdAt desc) [0...$limit],
  "total": count(*[_type == "posts"])
}`;

export const paginationQuery = groq`
{
  "posts": *[_type == $type] | order(_id) [$start...$limit],
  "total": count(*[_type == "posts"])
}`;

export const searchQuery = groq`
{
  "posts": *[_type == "posts" && title match $searchQuery] | order(publishedAt desc) [0...$limit],
  "total": count(*[_type == "posts" && title match $searchQuery])
}`;
