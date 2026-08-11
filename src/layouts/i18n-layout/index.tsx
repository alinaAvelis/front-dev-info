
import { initServerI18next, getT, getResources } from "next-i18next/server";
import { I18nProvider } from "next-i18next/client";
import i18nConfig from "@/dictionary/i18n.config";
import { ReactNode } from "react";

initServerI18next(i18nConfig);

export default async function I18nLayout({
	children,
}: {
	children: ReactNode;
}) {
	const { t, i18n, lng } = await getT();
	const resources = getResources(i18n);

	return (
		<I18nProvider language={lng} resources={resources}>
			{children}
		</I18nProvider>
	);
}
