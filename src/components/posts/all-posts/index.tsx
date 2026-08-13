
import PostsContainer from "../blocks/posts-container";
import PostsWithPagination from "../blocks/posts-with-pagination";

interface AllPostsPropsType {
	title: string;
	withCategory?: boolean;
}

const AllPosts = ({ title, withCategory }: AllPostsPropsType) => {
	return (
		<PostsContainer title={title}>
			<PostsWithPagination withCategory={withCategory} />
		</PostsContainer>
	);
};

export default AllPosts;
