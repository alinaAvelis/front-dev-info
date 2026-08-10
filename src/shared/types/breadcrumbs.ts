import { MenuTranslationKey } from "@/shared/i18n/dictionary";

export interface PathType {
	name?: string;
	url?: string;
	translationKey?: MenuTranslationKey;
}

export type PathArrayType = PathType[]