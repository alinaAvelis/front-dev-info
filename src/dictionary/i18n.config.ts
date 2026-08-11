import type { I18nConfig } from "next-i18next/proxy";

const i18nConfig: I18nConfig = {
	supportedLngs: ["en", "ru"],
	fallbackLng: "en",
	defaultNS: "general",
	ns: [
		"general",
		"cookie-message",
		"menu",
		"no-translated-post",
		"page-not-found",
		"resources",
		"search",
		"validation",
	],
	// Recommended: works on all platforms including Vercel/serverless
	resourceLoader: (language, namespace) =>
		import(`./app/i18n/locales/${language}/${namespace}.json`),
};

export default i18nConfig;
