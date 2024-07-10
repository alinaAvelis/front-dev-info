import { postsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import AllPosts from "@/components/all-posts/page";

import { WEBSITE_NAME, META_DESCRIPTION, WEBSITE_URL } from "@/constants/_APP_SETUP";

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
        <div className='max-w-screen-xl w-full px-5 md:px-10 mx-auto mt-16 flex'>
            <AllPosts pageData={posts} title='Превью постов' homePage={true} />
        </div>
    );
}
