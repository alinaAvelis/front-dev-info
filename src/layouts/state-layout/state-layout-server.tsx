import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { getPostsQuery, getCategoriesQuery } from "@/sanity/lib/queries";
import StateLayoutDispatcher from "@/layouts/state-layout/state-layout-dispatcher";
import { PropsWithChildren } from "react";
import { SanityCategoriesType } from "@/shared/types/categories";
import { PostsFromSanityType } from "@/shared/types/posts";
import getIsMobile from "@/utils/get-is-mobile";
import { getT } from "next-i18next/server";

export default async function StateLayout({ children }: PropsWithChildren) {
	const isMobile = await getIsMobile();
	const { lng } = await getT();
	const categories: SanityCategoriesType = await sanityFetch({
		query: getCategoriesQuery(lng),
	});

	const postsLimits = {
		limit: isMobile ? 3 : 9,
		postsOnPage: isMobile ? 3 : 9,
	};

	const posts: PostsFromSanityType = await sanityFetch({
		query: getPostsQuery({ language: lng }),
		params: { limit: postsLimits.limit },
	});

	return (
		<StateLayoutDispatcher
			categories={categories}
			allPosts={posts}
			postsLimits={postsLimits}
		>
			{children}
		</StateLayoutDispatcher>
	);
}
