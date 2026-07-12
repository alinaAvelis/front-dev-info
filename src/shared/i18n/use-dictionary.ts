import { useTranslations } from "@/shared/i18n/use-translations";
import {DictionaryItem} from "@/shared/i18n/dictionary";
import { useLanguageSelector } from "@/lib/features/language/hooks/use-langugage-selector";

const useDictionary = (key: DictionaryItem) => {
	const language = useLanguageSelector();
	const t = useTranslations(language);

	const dictionary = {
		menu: {
			home: t("menu", "home"),
			categories: t("menu", "categories"),
			posts: t("menu", "posts"),
			resources: t("menu", "resources"),
			language: t("menu", "language"),
		},
		search: {
			title: t("search", "search"),
            placeholder: t("search", "searchPlaceholder")
		},
        general: {
            allPosts: t("general", "allPosts"),
			lastPosts: t("general", "lastPosts"),
			toPostsPage: t("general", "toPostsPage"),
			cards: t("general", "cards"),
			list: t("general", "list"),
			loadMore: t("general", "loadMore"),
			contents: t("general", "contents"),
			otherPosts: t("general", "otherPosts"),
			writeToMe: t("general", "writeToMe"),
        },
		resources: {
			documentation: t("resources", "documentation"),
		}
	};

	return dictionary[key];
};

export default useDictionary;
