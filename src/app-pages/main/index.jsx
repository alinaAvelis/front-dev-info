"use client"
import AllPosts from "@/components/all-posts";
import { useCategorySelector } from "@/lib/features/categories/hooks/use-category-selector";
import { usePreloadedPostsSelector } from "@/lib/features/posts/hooks/use-posts-selector";
const MainPage = () => {
	const categories = useCategorySelector();
	const posts = usePreloadedPostsSelector();
	return (
		<div className="max-w-screen-xl w-full px-5 md:px-10 mx-auto pt-30 md:pt-20 flex">
			<AllPosts
				posts={posts}
				title="Последние посты"
				homePage={true}
				categories={categories}
			/>
		</div>
	);
};

export default MainPage;
