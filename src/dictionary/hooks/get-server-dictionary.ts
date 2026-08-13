import { getT } from "next-i18next/server";
import { DictionaryItem } from "../i18n.config";

const getServerDictionary = async <K extends DictionaryItem>(key: K) => {
	const { t } = await getT(key);

	const getText = (textKey: string) => {
		return t(`${textKey}`);
	};
	return getText;
};

export default getServerDictionary;
