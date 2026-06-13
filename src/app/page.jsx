import { postsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { WEBSITE_NAME, META_DESCRIPTION, WEBSITE_URL } from "@/constants/_APP_SETUP";
import MainPage from "@/app-pages/main";
export const metadata = {
    openGraph: {
        title: WEBSITE_NAME,
        description: META_DESCRIPTION,
        url: WEBSITE_URL,
        siteName: WEBSITE_NAME,
        type: "website",
    },
};

export default async function Home() {
    const posts = await sanityFetch({
        query: postsQuery,
    });

    return (
        <MainPage posts={posts} />
    );
}
