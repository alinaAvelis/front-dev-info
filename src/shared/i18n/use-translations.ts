"use client";

import { Language, defaultLanguage, normalizeLanguage } from "./config";
import { getTranslation } from "./dictionary";
import { useLanguageSelector } from "@/lib/features/language/hooks/use-langugage-selector";

export const useTranslations = (fallbackLanguage: Language = defaultLanguage) => {
	const language = useLanguageSelector();

	return getTranslation(normalizeLanguage(language ?? fallbackLanguage));
};
