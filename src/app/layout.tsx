import { Providers } from "@/lib/provider";
import { ReactNode } from "react";
import I18nLayout from "@/layouts/i18n-layout";
import RootLayout from "@/layouts/root-layout";
import "../styles/layout.scss";
import {
	WEBSITE_NAME,
	META_SEO_KEYWORDS,
	META_DESCRIPTION,
} from "@/shared/constants/_APP_SETUP";
import { getServerLanguage } from "@/shared/i18n/get-server-language";
import { initServerI18next, getT, getResources } from "next-i18next/server";
import { I18nProvider } from "next-i18next/client";
import i18nConfig from "@/dictionary/i18n.config";
initServerI18next(i18nConfig);
export const metadata = {
	title: {
		default: WEBSITE_NAME,
		template: `%s`,
	},
	description: META_DESCRIPTION,
	keywords: META_SEO_KEYWORDS,
	icons: [
		{
			url: "/favicon.ico",
			type: "image/*",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			url: "/favicon-32x32.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			url: "/favicon-16x16.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "180x180",
			url: "/apple-touch-icon.png",
		},
		{
			rel: "android-chrome",
			sizes: "192x192",
			url: "/android-chrome.pngg",
		},
		{
			rel: "android-chrome",
			sizes: "512x512",
			url: "/android-chrome-512x512.png",
		},
	],
};

type LayoutProps = {
	children: ReactNode;
};

export default async function Layout({ children }: LayoutProps) {
	const language = await getServerLanguage();
const { t, i18n, lng } = await getT();
	const resources = getResources(i18n);
	return (
		<I18nProvider language={lng} resources={resources}>
			<html lang={lng} data-scroll-behavior="smooth">
				<body
					className="flex h-auto min-h-screen flex-col  transition-all "
					suppressHydrationWarning
				>
					<Providers>
						<RootLayout>{children}</RootLayout>
						{/* <Analytics /> */}
					</Providers>
				</body>
			</html>
		</I18nProvider>
	);
}
