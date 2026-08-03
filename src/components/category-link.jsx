"use client";
import React, { useMemo } from "react";
import Link from "next/link";
import { useCategoriesSelector } from "@/lib/features/categories/hooks/use-category-selector";
const CategoryLink = ({ card, category }) => {
	const categories = useCategoriesSelector();
	const categoryItem = useMemo(() => {
		if (card) {
			return categories?.find(
				(point) => card?.category?._ref === point?._id,
			);
		}

		if (category) {
			return category;
		}

		return null;
	}, [card, categories, category]);

	return (
		<Link
			className={`category_link ${card && "text-gray-600"}`}
			href={`/categories/${categoryItem?.slug.current}`}
		>
			{categoryItem?.title}
		</Link>
	);
};

export default CategoryLink;
