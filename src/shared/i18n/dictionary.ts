import { Language, defaultLanguage } from "./config";
import {
	searchDictionary,
	menuDictionary,
	generalDictionary,
	resourcesDictionary,
	noTranslatedPostDictionary,
	validationDictionary,
	pageNotFound
} from "@/shared/dictionary";

const dictionary = {
	en: {
		search: searchDictionary.en,
		menu: menuDictionary.en,
		general: generalDictionary.en,
		resources: resourcesDictionary.en,
		noTranslatedPost: noTranslatedPostDictionary.en,
		validation: validationDictionary.en,
		pageNotFound: pageNotFound.en
	},
	ru: {
		search: searchDictionary.ru,
		menu: menuDictionary.ru,
		general: generalDictionary.ru,
		resources: resourcesDictionary.ru,
		noTranslatedPost: noTranslatedPostDictionary.ru,
		validation: validationDictionary.ru,
		pageNotFound: pageNotFound.ru
	},
} as const;

type Dictionary = typeof dictionary;
export type DictionaryItem = keyof Dictionary[Language];
export type MenuTranslationKey = keyof Dictionary[Language]["menu"];

export const getDictionary = (
  language: Language = defaultLanguage,
) => dictionary[language] ?? dictionary[defaultLanguage];

export const getTranslation =
  (language: Language = defaultLanguage) =>
  <T extends DictionaryItem>(
    namespace: T,
    key: keyof Dictionary[Language][T],
  ) =>
    getDictionary(language)[namespace][key];
