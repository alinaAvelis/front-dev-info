"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import AllPosts from "@/components/all-posts";

const Breadcrumbs = dynamic(() => import("@/shared/ui/breadcrumbs"));

const CategoryPage = ({ allPosts, category }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="container--center main_container relative px-5 md:px-10">
			<Breadcrumbs
				pathArr={[
					{ translationKey: "categories", url: "/categories" },
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
