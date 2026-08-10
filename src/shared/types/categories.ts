
import { slugObject } from "../interfaces";

export type SanityCategoryType = {
	activeCategory: boolean;
	meta_keywords: string;
	shortDescription: string;

	slug: slugObject;
	title: string;
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: 'categories-en' | 'categories-ru';
	_updatedAt: string;
};

export type CategoryType = {
	active_category: boolean;
	meta_keywords: string;
	short_description: string;
	slug: string;
	title: string;
	created_at: string;
	id: string;
};

export type SanityCategoriesType = SanityCategoryType[];
export type CategoriesType = CategoryType[];