import { WEBSITE_URL } from "@/constants/_APP_SETUP";
import {
    getPostsQuery,
    getCategoriesQuery,
} from "@/sanity/lib/queries";
import { createClient} from "next-sanity";
import clientConfig from "@/utils/sanity-client-config";
import { defaultLanguage } from "@/shared/i18n/config";
// import { SanityDocument } from "@sanity/client";
// import { sanityFetch } from "@/sanity/lib/sanityFetch";

export default async function sitemap() {
    const baseUrl = WEBSITE_URL;

    const postsResponse = await createClient(clientConfig).fetch(
        getPostsQuery({ language: defaultLanguage }),
        { limit: 1000 },
    );

    const postUrls = postsResponse?.posts?.map((post) => ({
        url: `${baseUrl}/posts/${post?.slug?.current}`,
        lastModified: post?._updatedAt,
    })) ?? [];

    const categories = await createClient(clientConfig).fetch(
        getCategoriesQuery(defaultLanguage),
    );

    const categoryUrls = categories?.map((category) => ({
        url: `${baseUrl}/categories/${category?.slug?.current}`,
        lastModified: category?._updatedAt,
    })) ?? [];


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
