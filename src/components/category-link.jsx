"use client";
import React, { useMemo } from "react";
import Link from "next/link";

const CategoryLink = ({ card, categories }) => {
  
	const category = useMemo(() => {
		return categories?.find((point) => card?.category?._ref === point?._id);
	}, [card, categories]);

	return (
		<Link
			className="border border-solid border-[#dddde1] py-1 px-2 w-fit  transition-all duration-300 text-gray-400 hover:text-blue-800 hover:border-blue-800"
			href={`/categories/${category?.slug.current}`}
		>
			{category?.title}
		</Link>
	);
};

export default CategoryLink;
