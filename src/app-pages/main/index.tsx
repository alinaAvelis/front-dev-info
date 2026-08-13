import AllCategories from "@/components/all-categories";
import PostsBlock from "./blocks/posts";

const MainPage = () => {
	return (
		<div className="max-w-screen-xl w-full px-5 md:px-10 mx-auto pt-35 md:pt-20 flex flex-col gap-5 md:gap-10">
			<AllCategories />
			<PostsBlock />
		</div>
	);
};

export default MainPage;
