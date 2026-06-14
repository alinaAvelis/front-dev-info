import { getDateString } from "@/utils/utils";
import PostLayout from "@/layouts/post-layout";
import AlgorithmSpeedContent from "@/components/posts-content/algorithm-speed-content";

const StaticPost = ({ allPosts }) => {
	return (
		<PostLayout
			currentPostSlug="algorithm-execution-speed"
			allPosts={allPosts}
			pathArr={[
				{ name: "Посты", url: "/posts" },
				{ name: "Скорость выполнения алгоритма" },
			]}
		>
			<h1>Скорость выполнения алгоритма</h1>

			<p className="post_date">{getDateString("2023-10-30")}</p>
			<AlgorithmSpeedContent />
		</PostLayout>
	);
};

export default StaticPost;
