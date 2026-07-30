import useDictionary from "@/shared/i18n/use-dictionary";
import LinearIndeterminate from "@/shared/ui/linear-progress";
import { usePostsLoadingOnPaginationSelector } from "@/lib/features/posts/hooks/use-posts-selector";

type AddPostsButtonProps = {
	onClick: () => void;
};
const AddPostsButton = ({ onClick }: AddPostsButtonProps) => {
	const general = useDictionary("general");
	const postsLoading = usePostsLoadingOnPaginationSelector();
	if (postsLoading) {
		return (
			<div className="w-full md:w-1/2 mt-5 md:mt-10 mx-auto">
				<LinearIndeterminate />{" "}
			</div>
		);
	}
	return (
		<button
			className="button button--fill button--center"
			onClick={onClick}
			disabled={postsLoading}
		>
			{postsLoading ? (
				<span>{general.loading}...</span>
			) : (
				general?.loadMore
			)}
		</button>
	);
};

export default AddPostsButton;
