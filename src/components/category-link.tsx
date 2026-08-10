"use client";
import React, { useMemo } from "react";
import Link from "next/link";
import { useCategoriesSelector } from "@/lib/features/categories/hooks/use-category-selector";
import {PostType} from "@/shared/types/posts"
import { SanityCategoryType } from "@/shared/types/categories";
interface CategoryLinkPropsType {
	card: null | PostType,
	category?: string
}
const CategoryLink = ({ card = null, category }: CategoryLinkPropsType) => {
	const categories = useCategoriesSelector();
	const categoryItem = useMemo(() => {
		if (card) {
			return categories?.find(
				(point: SanityCategoryType) => card?.category?._ref === point?._id,
			);
		}

		if (category) {
			return category;
		}

		return null;
	}, [card, categories, category]);

	return (
		categoryItem ? <Link
			className={`category_link ${card ? "text-gray-600" : ""}`}
			href={`/categories/${categoryItem?.slug.current}`}
		>
			{categoryItem?.title}
		</Link> : null
	);
};

export default CategoryLink;
