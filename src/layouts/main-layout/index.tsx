import { PropsWithChildren } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
const AppHeader = dynamic(() => import("../../components/app-header"));
const AppFooter = dynamic(() => import("../../components/app-footer"));
import Head from "next/head";
import { categoryObject } from "../../types";

const MainLayout = ({
	categories,
	headTitle,
	headKeywords,
	headDescription,
	children,
}: PropsWithChildren<{
	categories: Array<categoryObject>;
	headTitle?: string;
	headKeywords?: string;
	headDescription?: string;
}>) => {
	<Head>
		{headTitle && <title>{headTitle}</title>}
		{headKeywords && <meta name="keywords" content={headKeywords} />}

		{headDescription && (
			<meta name="description" content={headDescription} key="ogdesc" />
		)}
	</Head>;
	return (
		<>
			<AppHeader categories={categories} />

			{children}
			<div id="yandex_rtb_R-A-2501461-2"></div>
			<Script id="yandex-ads-2" strategy="lazyOnload">
				{`
								window.yaContextCb.push(()=>{
									Ya.Context.AdvManager.render({
										"blockId": "R-A-2501461-2",
										"renderTo": "yandex_rtb_R-A-2501461-2"
									})
								})
							`}
			</Script>
			<AppFooter />
		</>
	);
};

export default MainLayout;
