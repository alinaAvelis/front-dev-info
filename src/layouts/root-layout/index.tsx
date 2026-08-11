import StateLayout from "@/layouts/state-layout/state-layout-server";
import dynamic from "next/dynamic";
import AppHeader from "@/components/app-header"
import { ReactNode } from "react";
import CookieMessage from "@/components/cookie-message";
const AppFooter = dynamic(() => import("@/components/app-footer/AppFooter"));

export default async function RootLayout({ children }: {children: ReactNode}) {
	return (
		<StateLayout>
			<AppHeader />
			<main className="min-h-screen">{children}</main>

			<AppFooter />
			<CookieMessage />
		</StateLayout>
	);
}
