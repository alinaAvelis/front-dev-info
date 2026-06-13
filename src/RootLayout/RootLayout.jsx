
// import { SanityDocument } from "@sanity/client";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { categoriesQuery } from "@/sanity/lib/queries";
// import { PropsWithChildren } from "react";
import dynamic from "next/dynamic";

// import CookieMessage from "@/components/cookie-message"
// import Script from "next/script";
const AppHeader = dynamic(() => import("@/components/app-header/AppHeader"));
const AppFooter = dynamic(() => import("@/components/app-footer/AppFooter"));

export default async function RootLayout({ children }) {
    const categories = await sanityFetch({
        query: categoriesQuery,
    });
    return (
        <>
            <AppHeader categories={categories} />
            <div className='min-h-screen'>{children}</div>

            <AppFooter />
            {/* <CookieMessage /> */}
        </>
    );
}
