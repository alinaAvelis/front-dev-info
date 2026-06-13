
// import { SanityDocument } from "@sanity/client";

import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { categoriesQuery } from "@/sanity/lib/queries";
// import { PropsWithChildren } from "react";
import StateLayoutDispatcher from "@/lib/state-layout-dispatcher"

import dynamic from "next/dynamic";

// import CookieMessage from "@/components/cookie-message"
// import Script from "next/script";
const AppHeader = dynamic(() => import("@/components/app-header/AppHeader"));
const AppFooter = dynamic(() => import("@/components/app-footer/AppFooter"));

export default async function RootLayout({ children }) {
	

    const categories = await sanityFetch({
			query: categoriesQuery,
		});

	// console.log(categories)
	return (
		<StateLayoutDispatcher categories={categories}>
			<AppHeader />
			<div className="min-h-screen">{children}</div>

			<AppFooter />
			{/* <CookieMessage /> */}
		</StateLayoutDispatcher>
	);
}
