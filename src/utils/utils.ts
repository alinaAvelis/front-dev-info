import { defaultLanguage, normalizeLanguage } from "@/shared/i18n/config";
import { PostsType } from "@/shared/types/posts";
export function sortByDate(arr: PostsType, isToDown = true) {
	const array = arr?.slice();
	if (isToDown) {
		return array?.sort(
			(a, b) =>
				new Date(b.releaseDate).getTime() -
				new Date(a.releaseDate).getTime(),
		);
	}

	return array?.sort(
		(a, b) =>
			new Date(a.releaseDate).getTime() -
			new Date(b.releaseDate).getTime(),
	);
}

const locale = {
	en: "en-US",
	ru: "ru-RU",
};

export const getDateString = (date: string, language = defaultLanguage) => {
	const newDate = new Date(date);
	const dayString = newDate.toLocaleString(locale[language], {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
	return dayString;
};
