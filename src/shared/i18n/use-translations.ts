"use client";

import { useAppSelector } from "@/lib/hooks";
import { Language, defaultLanguage, normalizeLanguage } from "./config";
import { getTranslation } from "./dictionary";

export const useTranslations = (fallbackLanguage: Language = defaultLanguage) => {
	const language = useAppSelector((state) => state.languageReducer.language);

	return getTranslation(normalizeLanguage(language ?? fallbackLanguage));
};
