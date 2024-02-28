import { groq } from "next-sanity";

export const postQuery = groq`*[_type == "posts" && active == true && slug.current == $slug][0]`;
export const postsQuery = groq`*[_type == "posts" && active == true] | order(_createdAt desc)`;
export const categoryQuery = groq`*[_type == "categories" && activeCategory == true && slug.current == $slug][0]`;
export const categoriesQuery = groq`*[_type == "categories" && activeCategory == true]`;