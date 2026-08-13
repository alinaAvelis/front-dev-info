import { ReactNode } from "react";

interface PostsContainerPropsType {
	title: string;
	children: ReactNode;
}

const PostsContainer = ({ title, children }: PostsContainerPropsType) => {
	return (
		<section className="section tabs mt-5 md:mt-10 w-full mt-10">
			<h1 className="title">{title}</h1>

			{children}
		</section>
	);
};

export default PostsContainer;
