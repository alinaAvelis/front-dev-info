import { useT } from "next-i18next/client";
import { DictionaryItem } from "@/shared/i18n/dictionary";

const useClientDictionary = <K extends DictionaryItem>(key: K) => {
	const { t } = useT(key);

	const getText = (textKey: string) => {
		return t(`${textKey}`);
	};
	return  getText;
};

export default useClientDictionary;
