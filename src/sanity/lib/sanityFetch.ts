

import type { QueryParams } from "@sanity/client";
import { client } from "./client";

const DEFAULT_PARAMS = {} as QueryParams;
const DEFAULT_TAGS = [] as string[];

export async function sanityFetch<QueryResponse>({
	query,
	params = DEFAULT_PARAMS,
	revalidate = 3600,
	tags = DEFAULT_TAGS,
}: {
	query: string;
	params?: QueryParams;
	revalidate?: number | false;
	tags?: string[];
}): Promise<QueryResponse> {
	return (
		client
			// .withConfig({ useCdn: !isEnabled })
			.fetch<QueryResponse>(query, params, {

				next: { revalidate: tags?.length ? false : revalidate, tags },
			})
	);
}
