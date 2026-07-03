import { defineField, defineType } from "sanity";
import { languageOptions, defaultLanguage } from "../locales";

const createCategorySchema = (name: string, title: string) =>
	defineType({
		name,
		title: title,
		type: "document",
		fields: [
			defineField({
				name: "activeCategory",
				title: "Active category",
				description:
					"If it is set to false, the category is not visible to users",
				type: "boolean",
				initialValue: true,
			}),
			defineField({
				name: "language",
				title: "Language",
				type: "string",
				initialValue: defaultLanguage,
				options: {
					list: languageOptions,
				},
			}),
			defineField({
				name: "title",
				title: "Title",
				type: "string",
			}),
			defineField({
				name: "slug",
				title: "Slug",
				type: "slug",
				options: {
					source: "title",
					maxLength: 200,
					slugify: (input) =>
						input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
				},
			}),
			defineField({
				name: "shortDescription",
				title: "Short description",
				type: "text",
			}),
			defineField({
				type: "string",
				name: "meta_keywords",
				title: "Meta keywords",
				description: "Key phrases or words separated by commas",
			}),
			defineField({
				type: "string",
				name: "meta_description",
				title: "Meta description",
				description: "Meta description for SEO",
			}),
		],
	});

export const categoriesEn = createCategorySchema("categories-en", "Category (English)");
export const categoriesRu = createCategorySchema("categories-ru", "Category (Russian)");
