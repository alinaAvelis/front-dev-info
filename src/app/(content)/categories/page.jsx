import { categoriesQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import dynamic from "next/dynamic";
const Breadcrumbs = dynamic(
	() => import("@/components/breadcrumbs/Breadcrumbs")
);
import AllCategories from "../../../components/all-categories/page";

export const metadata = {
	title: "FrontDevInfo - все категории",
	description: "Посты о frontend разработке",
	keywords: "программирование, посты, JavaScrip, frontend",
};

const CategoriesPage = async () => {
	const categories = await sanityFetch({
		query: categoriesQuery,
	});

	return (
		<div className="container--center  main_container  max-w-screen-xl relative  mx-auto w-full px-5 md:px-10">
			<Breadcrumbs
				pathArr={[{ name: "Категории", url: "/categories" }]}
			/>

			<AllCategories categories={categories} />
		</div>
	);
};

export default CategoriesPage;
