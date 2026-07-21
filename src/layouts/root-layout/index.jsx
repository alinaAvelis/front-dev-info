import { getServerLanguage } from "@/shared/i18n/get-server-language";
import StateLayout from "@/layouts/state-layout/state-layout-server";
import dynamic from "next/dynamic";
const AppHeader = dynamic(() => import("@/components/app-header/AppHeader"));
const AppFooter = dynamic(() => import("@/components/app-footer/AppFooter"));

export default async function RootLayout({ children }) {
	const language = await getServerLanguage();

	return (
		<StateLayout>
			<AppHeader language={language} />
			<div className="min-h-screen">{children}</div>

			<AppFooter />
		</StateLayout>
	);
}
