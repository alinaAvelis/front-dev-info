import { defineField, defineType } from "sanity";
import { languageOptions, defaultLanguage } from "../locales";

const createResourcesSchema = (name: string, title: string) =>
	defineType({
		name,
		title,
		type: "document",
		fields: [
			defineField({
				name: "isActive",
				title: "Active resources",
				description:
					"If it is set to false, the resource is not visible to users",
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
			// defineField({
			// 	name: "body with title",
			// 	type: "array",
			// 	of: [
			// 		{
			//       name: "block",
			//       type: "array",
			//       of: [
			//         {
			// 			type: "object",
			// 			fields: [
			// 				{
			// 					name: "title",
			// 					type: "string",
			// 				},
			// 				{
			// 					name: "href",
			// 					type: "string",
			// 				},
			// 				{
			// 					name: "text",
			// 					type: "text",
			// 				},
			// 			],
			// 		},
			//       ]
			//     }
			// 	],
			// }),
			defineField({
				name: "body",
				type: "array",
				of: [
					{
						type: "object",
						fields: [
							{
								name: "title",
								type: "string",
							},
							{
								name: "type",
								type: "string",
								options: {
									list: [
                    // { title: "No value", value: null },
										{ title: "React", value: "react" },
										{
											title: "Styles",
											value: "styles",
										},
										{
											title: "Others",
											value: "others",
										},
									],
									layout: "dropdown", // or 'radio'
								},
							},
							{
								name: "href",
								type: "string",
							},
							{
								name: "text",
								type: "text",
							},
						],
					},
				],
			}),
		],
	});

export const resourcesEn = createResourcesSchema(
	"resources-en",
	"Resources (English)",
);
export const resourcesRu = createResourcesSchema(
	"resources-ru",
	"Resources (Russian)",
);
