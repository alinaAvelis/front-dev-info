import { Language, defaultLanguage } from "./config";

const dictionary = {
	en: {
		common: {
			home: "Home",
			categories: "Categories",
			posts: "Posts",
			allPosts: "All posts",
			resources: "Resources",
			language: "Language",
		},
	},
	ru: {
		common: {
			home: "Главная",
			categories: "Категории",
			posts: "Посты",
			allPosts: "Все посты",
			resources: "Ресурсы",
			language: "Язык",
		},
	},
} as const;

type Dictionary = typeof dictionary;
type CommonTranslationKey = keyof Dictionary[Language]["common"];

export const getDictionary = (language: Language = defaultLanguage) =>
	dictionary[language] ?? dictionary[defaultLanguage];

export const getTranslation =
	(language: Language = defaultLanguage) =>
	(namespace: "common", key: CommonTranslationKey) =>
		getDictionary(language)[namespace][key];
