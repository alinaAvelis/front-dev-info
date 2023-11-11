export default {
	name: "posts",
	title: "Posts",
	type: "document",
	fields: [
		{
			name: "active",
			title: "Active",
			type: "boolean",
			initialValue: true,
		},
		{
			name: "toOtherPage",
			title: "To other page",
			type: "boolean",
			initialValue: false,
		},
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 200,
				slugify: (input) =>
					input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
			},
		},
		{
			title: "Category",
			name: "category",
			type: "reference",
			to: { type: "categories" },
		},
		{
			title: "Tags",
			name: "tags",
			description: 'Adds to meta tag "keywords"',
			type: "array",
			of: [{ type: "string" }],
			options: {
				layout: "tags",
			},
		},
		{
			name: "mainImage",
			title: "Main image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "shortDescription",
			title: "Short description",
			type: "text",
		},
		{
			title: "Content",
			name: "content",
			type: "array",
			of: [
				{
					title: "Block",
					name: "block",
					type: "block",
					styles: [
						{ title: "Normal", value: "normal" }, //p
						{ title: "H1", value: "h1" },
						{ title: "H2", value: "h2" },
						{ title: "H3", value: "h3" },
						{ title: "H4", value: "h4" },
						{ title: "H5", value: "h5" },
						{ title: "H6", value: "h6" },

					],
					marks: {
						decorators: [
							{
								title: "Strong",
								value: "strong",
							},
							{
								title: "Emphasis",
								value: "em",
							},
							{ title: "Accent Text", value: "accent_text" },
						],
						annotations: [
							{
								name: "link",
								type: "object",
								title: "External link",
								fields: [
									{
										name: "href",
										type: "url",
										title: "URL",
									},
									{
										title: "Open in new tab",
										name: "blank",
										type: "boolean",
										initialValue: true,
									},
								],
							},
							{
								name: "gitHub_link",
								type: "object",
								title: "GitHub link",
								fields: [
									{
										name: "href",
										type: "url",
										title: "URL",
									},
									{
										title: "Open in new tab",
										name: "blank",
										type: "boolean",
										initialValue: true,
									},
								],
							},
							
						],
					},
				},
				{
					name: "code_input",
					title: "Code input",
					type: "code",
					options: {
						language: "javascript",
						languageAlternatives: [
							{ title: "Javascript", value: "javascript" },
							{ title: "Typescript", value: "typescript" },
							{ title: "HTML", value: "html" },
							{ title: "CSS", value: "css" },
              				{ title: "JSON", value: "json" },
						],
						withFilename: true,
					},
				},
				{
					name: "code_input_to_page",
					title: "Code input to page",
					type: "code",
					options: {
						language: "javascript",
						languageAlternatives: [
							{ title: "Javascript", value: "javascript" },
							{ title: "Typescript", value: "typescript" },
							{ title: "HTML", value: "html" },
							{ title: "CSS", value: "css" },
              				{ title: "JSON", value: "json" },
						],
						withFilename: true,
					},
				},
				{
					name: "one_image",
					title: "One image",
					type: "image",
					options: {
						hotspot: true,
					},
					fields: [
						{
							title: "Alt",
							name: "alt",
							type: "string",
						},
						{
							name: "caption",
							type: "string",
							title: "Caption",
							// options: {
							//   isHighlighted: true // <-- make this field easily accessible
							// }
						},
					],
				},
				{
					name: "one_image_vertical",
					title: "One image vertical",
					type: "image",
					options: {
						hotspot: true,
					},
					fields: [
						{
							title: "Alt",
							name: "alt",
							type: "string",
						},
						{
							name: "caption",
							type: "string",
							title: "Caption",
							// options: {
							//   isHighlighted: true // <-- make this field easily accessible
							// }
						},
					],
				},
				{
					name: "table",
					title: "Table",
					type: "table",
				},
				{ type: "youtubeVideo" },
				{ type: "vimeoVideo" },
			],
		},
		{
			name: "releaseDate",
			title: "Release Date",
			type: "date",
		},
	],
};
