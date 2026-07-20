import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import { lineChart } from "./schemas/line-chart";
import { categoriesEn, categoriesRu } from "./schemas/category";
import { postsEn, postsRu } from "./schemas/posts";
import { resourcesEn, resourcesRu } from "./schemas/resources";
export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		postsEn,
		postsRu,
		categoriesEn,
		categoriesRu,
		blockContent,
		lineChart,
		resourcesEn,
		resourcesRu,
	],
};
