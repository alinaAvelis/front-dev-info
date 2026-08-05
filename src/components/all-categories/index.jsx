"use client";
import { useEffect } from "react";


import useDictionary from "@/shared/i18n/use-dictionary";
// import CategoryLink from "@/components/category-link";
import dynamic from "next/dynamic";
const CategoriesList = dynamic(() => import("@/components/all-categories/categories-list"),{ ssr: false });

const AllCategories = () => {

	const general = useDictionary("general");
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<section className="section tabs mt-5 md:mt-10">
			<h1 className="title">{general.categories}</h1>

			<div className="gap-3 flex flex-wrap ">
				<CategoriesList />
			</div>
		</section>
	);
};

export default AllCategories;
