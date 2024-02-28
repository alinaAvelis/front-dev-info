import { defineField, defineType } from "sanity";

export default defineType({
  name: "posts",
  title: "Posts",
  type: "document",
  fields: [
    defineField({
      name: "active",
			title: "Active",
			type: "boolean",
			initialValue: true,
    }),
    defineField({
      name: "toOtherPage",
			title: "To other page",
			type: "boolean",
			initialValue: false,
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
        maxLength: 96,
        slugify: (input) =>
					input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    }),
    defineField({
      title: "Category",
			name: "category",
			type: "reference",
			to: { type: "category" },
    }),
    defineField({
			title: "Tags",
			name: "tags",
			description: 'Adds to meta tag "keywords"',
			type: "array",
			of: [{ type: "string" }],
			options: {
				layout: "tags",
			},
		}),
    defineField({
      name: "mainImage",
			title: "Main image",
			type: "image",
			options: {
				hotspot: true,
			},
    }),
    defineField({
      name: "shortDescription",
			title: "Short description",
			type: "text",
    }),

    defineField({
     name: "releaseDate",
			title: "Release Date",
			type: "date",
    }),

    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
    prepare(selection) {
      return { ...selection };
    },
  },
});
