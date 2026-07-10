import { defineType, defineArrayMember } from "sanity";
import ExternalLinkRenderer from "../components/ExternalLinkRenderer";
import TitleStyle from "../components/TitleStyle";
/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export default defineType({
	title: "Content",
	name: "blockContent",
	type: "array",
	of: [
		defineArrayMember({
			title: "Block",
			name: "block",
			type: "block",
			styles: [
				{
					title: "Title",
					value: "title",
					component: TitleStyle,
				},
				{ title: "Normal", value: "normal" },
				{ title: "H1", value: "h1" },
				{ title: "H2", value: "h2" },
				{ title: "H3", value: "h3" },
				{ title: "H4", value: "h4" },
				{ title: "H5", value: "h5" },
				{ title: "H6", value: "h6" },
				{ title: "Quote", value: "blockquote" },
				{ title: "Hidden", value: "blockComment" },
			],
			lists: [
				{ title: "Bullet", value: "bullet" },
				{ title: "Numbered", value: "number" },
			],
			// Marks let you mark up inline text in the Portable Text Editor
			marks: {
				// Decorators usually describe a single property – e.g. a typographic
				// preference or highlighting
				decorators: [
					{ title: "Strong", value: "strong" },
					{ title: "Emphasis", value: "em" },
					{ title: "Code", value: "code" },
					{
						title: "Highlight",
						value: "highlight",
						icon: () => "H",
					},
					{ title: "Underline", value: "underline" },
					{ title: "Strike", value: "strike-through" },
					{ title: "Accent Text", value: "accent_text" },
				],
				// Annotations can be any object structure – e.g. a link or a footnote.
				annotations: [
					{
						name: "link",
						type: "object",
						title: "External link",
						fields: [
							{
								title: "URL",
								name: "href",
								type: "url",
								validation: (Rule) =>
									Rule.regex(
										/https:\/\/(www\.|)(portabletext\.org|sanity\.io)\/.*/gi,
										{
											name: "internal url",
											invert: true,
										},
									).warning(
										`This is not an external link. Consider using internal links instead.`,
									),
							},
							{
								title: "Open in new tab",
								name: "blank",
								type: "boolean",
								initialValue: true,
							},
						],
						components: {
							annotation: ExternalLinkRenderer,
						},
					},
					{
						// name: "internalLink",
						// type: "object",
						// title: "Internal link",
						// icon: UserIcon,
						// fields: [
						//     {
						//         name: "reference",
						//         type: "reference",
						//         title: "Reference",
						//         to: [
						//             { type: "post" },
						//             { type: "category" },
						//             { type: "openSource" },
						//             { type: "series" },
						//             { type: "tags" },
						//             { type: "author" },
						//             // other types you may want to link to
						//         ],
						//     },
						// ],
						name: "internalLink",
						type: "object",
						title: "Internal link",
						fields: [
							{
								name: "href",
								type: "string",
								title: "href",
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
					{
						name: "ancor_link_main",
						type: "object",
						title: "ancor_link_main",
						fields: [
							{
								name: "name",
								type: "string",
								title: "Name",
							},
						],
					},
				],
			},
		}),
		// You can add additional types here. Note that you can't use
		// primitive types such as 'string' and 'number' in the same array
		// as a block type.
		defineArrayMember({
			type: "image",
			options: { hotspot: true },
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Alternative Text",
				},
			],
		}),
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
					{ title: "Pseudocode", value: "pseudocode" },
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
            type: "table"
        }
	],
});
