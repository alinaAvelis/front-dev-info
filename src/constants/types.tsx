import { SanityDocument } from "@sanity/client";

export type slugObject = {
	current: string;
	_type: string;
}

export type categoryObject = {
	activeCategory: boolean;
	slug: slugObject;
	title: string;
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
}

export type THeaderProps = {
    categories: Array<categoryObject> | SanityDocument;
};
