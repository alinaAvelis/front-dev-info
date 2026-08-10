

import { WEBSITE_NAME, META_DESCRIPTION, WEBSITE_URL } from "@/shared/constants/_APP_SETUP";
import MainPage from "@/app-pages/main";
export const metadata = {
    openGraph: {
        title: WEBSITE_NAME,
        description: META_DESCRIPTION,
        url: WEBSITE_URL,
        siteName: WEBSITE_NAME,
        type: "website",
    },
};

export default async function Home() {

    return (
        <MainPage />
    );
}
