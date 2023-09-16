export interface slugObject {
	current: string;
	_type: string;
}

export interface categoryObject {
	activeCategory: boolean;
	slug: slugObject;
	title: string;
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
}

