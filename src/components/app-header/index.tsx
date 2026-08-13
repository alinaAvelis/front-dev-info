import Link from "next/link";
import LanguageSelector from "@/components/language-selector";
import SearchBlock from "../search-block/SearchBlock";
import NavMenu from "./nav-menu";
import { LOGO } from "@/shared/constants/_APP_SETUP";

const AppHeader = async () => {
	return (
		<header className="z-20 w-full bg-white fixed right-0 top-0">
			<div className="mx-auto max-w-screen-xl px-5 flex flex-col items-center justify-between gap-5 py-2 sm:flex-row">
				<Link
					className="link text-sm font-bold! text-gray-600! md:text-lg"
					href="/"
				>
					{LOGO}
				</Link>
				<div className="flex items-center justify-end gap-5">
					<NavMenu />
					<LanguageSelector />
				</div>
			</div>
			<SearchBlock />
		</header>
	);
};

export default AppHeader;
