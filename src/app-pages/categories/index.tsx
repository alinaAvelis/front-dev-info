import dynamic from "next/dynamic";
import AllCategories from "@/components/all-categories";

const Breadcrumbs = dynamic(() => import("@/shared/ui/breadcrumbs"));

const CategoriesPage = () => {
	return (
		<div className="container--center main_container max-w-screen-xl relative mx-auto w-full px-5 md:px-10">
			<Breadcrumbs
				pathArr={[{ translationKey: "categories", url: "/categories" }]}
			/>

			<AllCategories />
		</div>
	);
};

export default CategoriesPage;
