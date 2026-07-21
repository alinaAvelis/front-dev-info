"use client"
import AllPosts from "@/components/all-posts";
import { useCategoriesSelector } from "@/lib/features/categories/hooks/use-category-selector";
import { usePreloadedPostsSelector } from "@/lib/features/posts/hooks/use-posts-selector";
import useDictionary from "@/shared/i18n/use-dictionary";
const MainPage = () => {
	const categories = useCategoriesSelector();
	const posts = usePreloadedPostsSelector();
	const general = useDictionary("general");
	return (
		<div className="max-w-screen-xl w-full px-5 md:px-10 mx-auto pt-30 md:pt-20 flex">
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
