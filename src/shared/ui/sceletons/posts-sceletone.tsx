import { PostCardSkeleton } from "./post-card-sceleton";
import { useLimitSelector } from "@/lib/features/posts/hooks/use-posts-selector";
export default function PostsGridSkeleton() {
	const limit = useLimitSelector();
	return (
		<section className="posts_container grid gap-14 md:grid-cols-2 xl:grid-cols-3">
			{Array.from({ length: limit }).map((_, i) => (
				<PostCardSkeleton key={i} />
			))}
		</section>
	);
}
