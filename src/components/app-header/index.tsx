
import Link from "next/link";
// import { usePathname } from "next/navigation";
import LanguageSelector from "@/components/language-selector/LanguageSelector";
import { getServerLanguage } from "@/shared/i18n/get-server-language";
import SearchBlock from "../search-block/SearchBlock"; 
import NavMenu from "./nav-menu";

const AppHeader = async () => {
const language = await getServerLanguage();
	// const pathname = usePathname();

	// if (pathname?.startsWith("/studio")) {
	// 	return null;
	// }


	return (
		<header className="z-20 w-full bg-white fixed right-0 top-0">
			<div className="mx-auto max-w-screen-xl px-5 flex flex-col items-center justify-between gap-5 py-2 sm:flex-row">
				<Link
					className="link text-sm font-bold! text-gray-600! md:text-lg"
					href="/"
					// onClick={onClose}
				>
					FRONT-DEV-INFO
				</Link>
				<div className="flex items-center justify-end gap-5">
					<NavMenu />
					<LanguageSelector initialLanguage={language} />
				</div>
			</div>

			{/* <div ref={categoriesMenu} className="nav_container h-full">
					<CloseBtn clickHandler={onClose} />

					<nav className="header_nav grid overscroll-contain overflow-y-auto pr-3">
						{categories?.map((item, i) => {
							if (item.activeCategory === true) {
								return (
									<Link
										key={i}
										className="link"
										href={`/categories/${item.slug.current}`}
										onClick={onClose}
									>
										{item.title}
									</Link>
								);
							}
						})}
					</nav>
				</div> */}

			<SearchBlock />
		</header>
	);
};

export default AppHeader;
