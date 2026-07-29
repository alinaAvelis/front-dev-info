"use client"
import AllPosts from "@/components/all-posts";
import { useCategoriesSelector } from "@/lib/features/categories/hooks/use-category-selector";
import { usePreloadedPostsSelector } from "@/lib/features/posts/hooks/use-posts-selector";
import useDictionary from "@/shared/i18n/use-dictionary";
import AllCategories from "@/components/all-categories";
const MainPage = () => {
	const categories = useCategoriesSelector();
	const posts = usePreloadedPostsSelector();
	const general = useDictionary("general");
	return (
		<div className="max-w-screen-xl w-full px-5 md:px-10 mx-auto pt-35 md:pt-20 flex flex-col gap-5 md:gap-10">
			<AllCategories />
			<AllPosts
				posts={posts}
				title={general?.lastPosts}
				homePage={true}
				categories={categories}
			/>
		</div>
	);
};

export default MainPage;
