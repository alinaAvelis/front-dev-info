import dynamic from "next/dynamic";
const Breadcrumbs = dynamic(
	() => import("@/components/breadcrumbs"),
);
import AllCategories from "@/components/all-categories";

const CategoriesPage = () => {
	return (
		<div className="container--center  main_container  max-w-screen-xl relative  mx-auto w-full px-5 md:px-10">
			<Breadcrumbs
				pathArr={[{ name: "Категории", url: "/categories" }]}
			/>

			<AllCategories />
		</div>
	);
};

export default CategoriesPage;
