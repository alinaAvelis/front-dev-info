"use client";
import React, { useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
const Breadcrumbs = dynamic(
	() => import("@/components/breadcrumbs/Breadcrumbs")
);
// const Cards = dynamic(() => import("@/components/cards/Cards"));
// import DesctopAdds from "@/components/adds/desktop-adds/page";
// import BottomAdds from "@/components/adds/bottom-adds/page";
// import List from "@/components/list/List";
import AllPosts from "../all-posts/page";


const CategoryPage = ({ allPosts, category  }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const data = useMemo(() => {
		return allPosts?.filter(
			(point) => point?.category?._ref === category?._id
		);
	}, []);

	return (
		<div className="container--center  main_container relative px-5 md:px-10">
			<Breadcrumbs
				pathArr={[
					{ name: "Категории", url: "/categories" },
					{ name: category?.title },
				]}
			/>

			<AllPosts pageData={data} title={category?.title} withCategory={false} />
		</div>
	);
};

export default CategoryPage;
