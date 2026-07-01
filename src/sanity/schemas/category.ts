import { defineField, defineType } from "sanity";
import { languageOptions, defaultLanguage } from "../locales";

export default defineType({
    name: "category",
    title: "Category",
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
    ],
});
