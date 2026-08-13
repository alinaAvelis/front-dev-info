

import getServerDictionary from "@/dictionary/hooks/get-server-dictionary";

import ScrollToTop from "@/shared/ui/scroll-to-top";
import CategoriesList from "@/components/all-categories/categories-list";
const AllCategories = async () => {
	const text = await getServerDictionary("general");

	return (
		<>
			<ScrollToTop />
			<section className="section tabs mt-5 md:mt-10">
				<h1 className="title">{text("categories")}</h1>

				<div className="gap-3 flex flex-wrap ">
					<CategoriesList />
				</div>
			</section>
		</>
	);
};

export default AllCategories;
