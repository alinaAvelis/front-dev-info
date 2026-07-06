"use client";

import AllPosts from "@/components/all-posts";
import dynamic from "next/dynamic";
import { useCategorySelector } from "@/lib/features/categories/hooks/use-category-selector";
import {
	usePostsSelector,
	usePostsTotalSelector,
} from "@/lib/features/posts/hooks/use-posts-selector";
import { useTranslations } from "@/shared/i18n/use-translations";

const Breadcrumbs = dynamic(() => import("@/shared/ui/breadcrumbs"));

const PostsPage = () => {
	const categories = useCategorySelector();
	const posts = usePostsSelector();
	const postsTotalCount = usePostsTotalSelector();
	const t = useTranslations();

	return (
		<div className="container--center max-w-screen-xl mx-auto main_container relative px-5 md:px-10">
			<Breadcrumbs pathArr={[{ translationKey: "posts", url: "/posts" }]} />
			<AllPosts
				posts={posts}
				postsTotalCount={postsTotalCount}
				title={t("common", "allPosts")}
				categories={categories}
			/>
		</div>
	);
};

export default PostsPage;
