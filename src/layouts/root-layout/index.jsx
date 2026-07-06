// import { SanityDocument } from "@sanity/client";

import { sanityFetch } from "@/sanity/lib/sanityFetch";
// import { PropsWithChildren } from "react";
import { getAllPostsQuery, getCategoriesQuery } from "@/sanity/lib/queries";
import StateLayoutDispatcher from "@/layouts/state-layout-dispatcher";
import { getServerLanguage } from "@/shared/i18n/get-server-language";

import dynamic from "next/dynamic";

// import CookieMessage from "@/components/cookie-message"
// import Script from "next/script";
const AppHeader = dynamic(() => import("@/components/app-header/AppHeader"));
const AppFooter = dynamic(() => import("@/components/app-footer/AppFooter"));

export default async function RootLayout({ children }) {
	const language = await getServerLanguage();
	const categories = await sanityFetch({
		query: getCategoriesQuery(language),
	});

	const posts = await sanityFetch({
		query: getAllPostsQuery({ language }),
		params: { limit: 9 },
	});

	return (
		<StateLayoutDispatcher categories={categories} allPosts={posts} language={language}>
			<AppHeader language={language} />
			<div className="min-h-screen">{children}</div>

			<AppFooter />
			{/* <CookieMessage /> */}
		</StateLayoutDispatcher>
	);
}
