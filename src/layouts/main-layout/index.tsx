import { PropsWithChildren } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
const AppHeader = dynamic(() => import("../../components/app-header"));
const AppFooter = dynamic(() => import("../../components/app-footer"));
import { categoryObject } from "../../types";

const MainLayout = ({
	categories,
	// headTitle,
	// headKeywords,
	// headDescription,
	children,
}: PropsWithChildren<{
	categories: Array<categoryObject>;
	headTitle?: string;
	headKeywords?: string;
	headDescription?: string;
}>) => {
	return (
		<>
			<AppHeader categories={categories} />

			{children}

			<div className="banner">
				<Script id="yandex-ads-5" strategy="afterInteractive">
					{`
								window.yaContextCb.push(()=>{
									Ya.Context.AdvManager.render({
										"blockId": "R-A-2501461-5",
										"type": "floorAd",
										"platform": "touch"
									})
								})
							`}
				</Script>
			</div>

			<AppFooter />
		</>
	);
};

export default MainLayout;
