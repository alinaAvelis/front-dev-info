"use client";

import { useChangeLanguage } from "next-i18next/client";
import { useT } from "next-i18next/client";
import Selector from "@/shared/ui/selector/Selector";
import { languages } from "@/shared/constants/languages";
import { Language } from "@/shared/types/language";
import useClientDictionary from "@/dictionary/hooks/use-client-dictionary";

const languageOptions = languages.map(({ id, title, shortTitle }) => ({
	label: `${title} (${shortTitle})`,
	value: id,
}));

const LanguageSelector = () => {
	const { i18n } = useT();
	const currentLanguage = i18n.language as Language;
	const changeLanguage = useChangeLanguage();
	const text = useClientDictionary("menu");
	const handleChange = (value: Language) => {
		changeLanguage(value);
	};

	return (
		<Selector
			ariaLabel={text("language")}
			disableScrollLock
			options={languageOptions}
			value={currentLanguage}
			onChange={handleChange}
		/>
	);
};

export default LanguageSelector;
