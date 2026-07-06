"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setLanguageState } from "@/lib/features/language/languageSlice";
import {
	LANGUAGE_COOKIE_NAME,
	Language,
	languages,
	normalizeLanguage,
} from "@/shared/i18n/config";
import { getTranslation } from "@/shared/i18n/dictionary";
import Selector from "@/shared/ui/selector/Selector";

type LanguageSelectorProps = {
	initialLanguage: Language;
};

const languageOptions = languages.map(({ id, title, shortTitle }) => ({
	label: `${title} (${shortTitle})`,
	value: id,
}));

const LanguageSelector = ({ initialLanguage }: LanguageSelectorProps) => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const language = useAppSelector((state) => state.languageReducer.language);
	const selectedLanguage = normalizeLanguage(language ?? initialLanguage);
	const t = getTranslation(selectedLanguage);

	useEffect(() => {
		dispatch(setLanguageState(initialLanguage));
	}, [dispatch, initialLanguage]);

	const handleChange = (value: Language) => {
		const nextLanguage = normalizeLanguage(value);

		document.cookie = `${LANGUAGE_COOKIE_NAME}=${nextLanguage}; path=/; max-age=31536000; SameSite=Lax`;
		dispatch(setLanguageState(nextLanguage));
		router.refresh();
	};

	return (
		<Selector
			ariaLabel={t("common", "language")}
			disableScrollLock
			options={languageOptions}
			value={selectedLanguage}
			onChange={handleChange}
		/>
	);
};

export default LanguageSelector;
