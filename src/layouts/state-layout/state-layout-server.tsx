import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { getPostsQuery, getCategoriesQuery } from "@/sanity/lib/queries";
import StateLayoutDispatcher from "@/layouts/state-layout/state-layout-client";
import { getServerLanguage } from "@/shared/i18n/get-server-language";
import { PropsWithChildren } from "react";
import { SanityCategoriesType } from "@/types/categories";
import { PostsFromSanityType } from "@/types/posts";
import getIsMobile from "@/utils/get-is-mobile";

export default async function StateLayout({ children }: PropsWithChildren) {
	const language = await getServerLanguage();
	const isMobile = await getIsMobile();

	const categories: SanityCategoriesType = await sanityFetch({
		query: getCategoriesQuery(language),
	});

	const postsLimits = {
		limit: isMobile ? 3 : 9,
		postsOnPage: isMobile ? 3 : 9,
	};

	const posts: PostsFromSanityType = await sanityFetch({
		query: getPostsQuery({ language }),
		params: { limit: postsLimits.limit },
	});

	return (
		<StateLayoutDispatcher
			categories={categories}
			allPosts={posts}
			language={language}
			postsLimits={postsLimits}
		>
			{children}
		</StateLayoutDispatcher>
	);
}
