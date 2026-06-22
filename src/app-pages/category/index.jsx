"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
const Breadcrumbs = dynamic(() => import("@/components/breadcrumbs"));
// const Cards = dynamic(() => import("@/components/cards/Cards"));
// import DesctopAdds from "@/components/adds/desktop-adds/page";
// import BottomAdds from "@/components/adds/bottom-adds/page";
// import List from "@/components/list/List";
import AllPosts from "@/components/all-posts";

// import { SanityCategoriesType } from "@/types/categories";

// import { setPostsState } from "@/lib/features/posts/postsSlice";
// import { useAppDispatch } from "@/lib/hooks";


const CategoryPage = ({ allPosts, category }) => {
	// const dispatch = useAppDispatch();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// useEffect(() => {
		
	// 	if (allPosts.posts.length) {
	// 		dispatch(setPostsState(allPosts));
	// 	}
	// }, [allPosts, dispatch]);


	return (
		<div className="container--center  main_container relative px-5 md:px-10">
			<Breadcrumbs
				pathArr={[
					{ name: "Категории", url: "/categories" },
					{ name: category?.title },
				]}
			/>

			<AllPosts
				posts={allPosts.posts}
				postsTotalCount={allPosts.total}
				title={category?.title}
				withCategory={false}
			/>
		</div>
	);
};

export default CategoryPage;
