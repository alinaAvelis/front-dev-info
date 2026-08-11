import { getT } from "next-i18next/server";
import { DictionaryItem } from "@/shared/i18n/dictionary";

const useServerDictionary = async <K extends DictionaryItem>(key: K) => {
	const { t } = await getT(key);

	const getText = (textKey: string) => {
		return t(`${textKey}`);
	};
	return getText;
};

export default useServerDictionary;
