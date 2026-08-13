import { defaultLanguage as sharedDefaultLanguage } from "@/shared/constants/languages";
import { languages as sharedLanguages } from "@/shared/constants/languages";
export const languages = sharedLanguages.map(({ id, title }) => ({
	id,
	title,
	isDefault: id === sharedDefaultLanguage,
}));

export const languageOptions = languages.map(({ id, title }) => ({
	value: id,
	title,
}));

export const defaultLanguage = sharedDefaultLanguage;
