export type SanityCategoryType = {
	activeCategory: boolean;
	meta_keywords: string;
	shortDescription: string;

	slug: { _type: string; current: string };
	title: string;
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
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

export type SanityCategoriesType = Array<SanityCategoriesType>
export type CategoriesType = Array<CategoriesType>