import type { I18nConfig } from "next-i18next/proxy";
import { defaultLanguage } from "@/shared/constants/languages";
const resourceLoader: I18nConfig["resourceLoader"] =
	process.env.NODE_ENV === "development"
		? async (lng, ns) => {
				const fs = await import("fs/promises");
				const path = await import("path");
				const content = await fs.readFile(
					path.resolve(
						process.cwd(),
						`src/app/i18n/locales/${lng}/${ns}.json`,
					),
					"utf-8",
				);
				return JSON.parse(content);
			}
		: (lng, ns) => import(`@/app/i18n/locales/${lng}/${ns}.json`);

const ns = [
	"general",
	"cookie-message",
	"menu",
	"no-translated-post",
	"page-not-found",
	"resources",
	"search",
	"validation",
];
export type DictionaryItem = (typeof ns)[number];

const i18nConfig: I18nConfig = {
	supportedLngs: ["en", "ru"],
	fallbackLng: defaultLanguage,
	defaultNS: "general",
	localeInPath: false,
	ns: ns,
	// Recommended: works on all platforms including Vercel/serverless
	resourceLoader,
	reloadOnPrerender: process.env.NODE_ENV === "development",
};

export default i18nConfig;
