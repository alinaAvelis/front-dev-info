
import { ReactNode } from "react";
import ToTopButton from "@/shared/ui/to-top-button/ToTopButton";
import PostMenu from "@/components/post/menu";
import { PathArrayType } from "@/shared/types/breadcrumbs";
import Breadcrumbs from "@/shared/ui/breadcrumbs";
import ScrollToTop from "@/shared/ui/scroll-to-top";
import LastsPosts from "@/components/posts/lasts-posts";
interface PostLayoutProprsType {
	currentPostSlug?: string;
	pathArr: PathArrayType;
	children: ReactNode;
}

const PostLayout = ({
	currentPostSlug,
	pathArr,
	children,
}: PostLayoutProprsType) => {

	return (
		<>
			<ScrollToTop />{" "}
			<div className="main_container relative px-5 md:px-10 mt-40 md:mt-30 max-w-screen-xl mx-auto">
				<Breadcrumbs pathArr={pathArr} />
				<div className="post_container ">
					<div className="post main  main--not_main order-2 lg:order-1">
						{children}

						<LastsPosts currentPostSlug={currentPostSlug} />
					</div>

					<div className="aside order-1 lg:order-2 lg:fixed right-0">
						<PostMenu />
					</div>
				</div>

				<ToTopButton />
			</div>
		</>
	);
};

export default PostLayout;
