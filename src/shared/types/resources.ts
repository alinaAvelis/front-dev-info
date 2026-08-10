
interface ResourceBodyItemFromSanityType {
		href: string;
		title:  string;
		text?: string;
		type?: string;
		_key: string;
	}
export type ResourceBodyFromSanityType = ResourceBodyItemFromSanityType[]
export interface ResourceFromSanityType {
	body: ResourceBodyFromSanityType;
	isActive: boolean;
	language: string;
	title: string;
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
}

export type ResourcesFromSanityType = ResourceFromSanityType[];
