"use client";
import {
	usePreloadedPostsSelector,
	usePostsTotalSelector,
} from "@/lib/features/posts/hooks/use-posts-selector";
import useDictionary from "@/shared/i18n/use-dictionary";
import dynamic from "next/dynamic";
import AllCategories from "@/components/all-categories";
const AllPosts = dynamic(() => import("@/components/all-posts"), {
	ssr: false,
});

const MainPage = () => {
	const posts = usePreloadedPostsSelector();
	const postsTotalCount = usePostsTotalSelector();
	const general = useDictionary("general");
	
	return (
		<div className="max-w-screen-xl w-full px-5 md:px-10 mx-auto pt-35 md:pt-20 flex flex-col gap-5 md:gap-10">
			<AllCategories />
			<AllPosts
				posts={posts}
				title={general?.lastPosts}
				homePage={true}
				postsTotalCount={postsTotalCount}
			/>
		</div>
	);
};

export default MainPage;
