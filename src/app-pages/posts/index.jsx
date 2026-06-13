

"use client"
import AllPosts from "@/components/all-posts";
import dynamic from "next/dynamic";
import { useCategorySelector } from "@/lib/features/categories/hooks/use-category-selector";
const Breadcrumbs = dynamic(
	() => import("@/components/breadcrumbs"),
);

const PostsPage = ({ posts }) => {
	const categories = useCategorySelector();
	return (
		<div className="container--center max-w-screen-xl mx-auto main_container relative px-5 md:px-10">
			<Breadcrumbs pathArr={[{ name: "Посты", url: "/posts" }]} />
			<AllPosts
				pageData={posts}
				title="Все посты"
				categories={categories}
			/>
		</div>
	);
};

export default PostsPage;
