import StateLayout from "@/layouts/state-layout/state-layout-server";
import dynamic from "next/dynamic";
import AppHeader from "@/components/app-header"

const AppFooter = dynamic(() => import("@/components/app-footer/AppFooter"));

export default async function RootLayout({ children }) {
	return (
		<StateLayout>
			<AppHeader />
			<div className="min-h-screen">{children}</div>

			<AppFooter />
		</StateLayout>
	);
}
