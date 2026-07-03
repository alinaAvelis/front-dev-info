// import { SanityDocument } from "@sanity/client";

import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { categoriesQuery } from "@/sanity/lib/queries";
// import { PropsWithChildren } from "react";
import { getAllPostsQuery } from "@/sanity/lib/queries";
import StateLayoutDispatcher from "@/layouts/state-layout-dispatcher";

import dynamic from "next/dynamic";

// import CookieMessage from "@/components/cookie-message"
// import Script from "next/script";
const AppHeader = dynamic(() => import("@/components/app-header/AppHeader"));
const AppFooter = dynamic(() => import("@/components/app-footer/AppFooter"));

export default async function RootLayout({ children }) {
	const categories = await sanityFetch({
		query: categoriesQuery,
	});

	const posts = await sanityFetch({
		query: getAllPostsQuery({language: "en"}),
		params: { limit: 9 },
	});

	console.log(posts)
	return (
		<StateLayoutDispatcher categories={categories} allPosts={posts}>
			<AppHeader />
			<div className="min-h-screen">{children}</div>

			<AppFooter />
			{/* <CookieMessage /> */}
		</StateLayoutDispatcher>
	);
}
