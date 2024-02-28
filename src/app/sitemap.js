import { WEBSITE_URL } from "@/constants/_APP_SETUP";
import {
    postsQuery,
    categoriesQuery,
} from "@/sanity/lib/queries";
import { createClient} from "next-sanity";
import clientConfig from "@/utils/sanity-client-config";
// import { SanityDocument } from "@sanity/client";
// import { sanityFetch } from "@/sanity/lib/sanityFetch";

export default async function sitemap() {
    const baseUrl = WEBSITE_URL;

    const posts = await createClient(clientConfig).fetch(postsQuery);

    const postUrls = posts?.map((post) => ({
        url: `${baseUrl}/post/${post?.slug?.current}`,
        lastModified: post?.updatedAt,
    }));

    const categories = await createClient(clientConfig).fetch(categoriesQuery);

    const categoryUrls = categories?.map((category) => ({
        url: `${baseUrl}/post/${category?.slug?.current}`,
        lastModified: category?.updatedAt,
    }));


    return [
        { url: baseUrl, lastModified: new Date() },
        { url: `${baseUrl}/algorithms`, lastModified: new Date() },
        // { url: `${baseUrl}/tags`, lastModified: new Date() },
        { url: `${baseUrl}/posts`, lastModified: new Date() },
        { url: `${baseUrl}/categories`, lastModified: new Date() },
        { url: `${baseUrl}/resourses`, lastModified: new Date() },
        ...postUrls,
        ...categoryUrls
    ];
}

export const dynamic = 'force-dynamic'