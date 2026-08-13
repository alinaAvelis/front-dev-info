import Breadcrumbs from "@/shared/ui/breadcrumbs";
import { PostsFromSanityType } from "@/shared/types/posts";
import { SanityCategoryType } from "@/shared/types/categories";
import ScrollToTop from "@/shared/ui/scroll-to-top";
import CategoryDispatcher from "./category-dispatcher";
import AllPosts from "@/components/posts/all-posts";

type CategoryPagePropsType = {
	allPosts: PostsFromSanityType;
	category: SanityCategoryType;
};
const CategoryPage = async ({ allPosts, category }: CategoryPagePropsType) => {
	return (
		<>
			<ScrollToTop />
			<CategoryDispatcher allPosts={allPosts} category={category} />
			<div className="container--center max-w-screen-xl mx-auto main_container relative px-5 md:px-10">
				<Breadcrumbs
					pathArr={[
						{ translationKey: "categories", url: "/categories" },
						{ name: category?.title },
					]}
				/>

				<AllPosts title={category?.title} withCategory={false} />
			</div>
		</>
	);
};

export default CategoryPage;
