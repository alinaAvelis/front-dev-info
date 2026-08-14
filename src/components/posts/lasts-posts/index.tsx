"use client";
import { useMemo } from "react";
import { sortByDate } from "@/utils/utils";
import dynamic from "next/dynamic";
import { usePreloadedPostsSelector } from "@/lib/features/posts/hooks/use-posts-selector";
const Cards = dynamic(() => import("@/components/cards/Cards"));
import { PostType } from "@/shared/types/posts";
import useClientDictionary from "@/dictionary/hooks/use-client-dictionary";

interface LastsPostsProprsType {
	currentPostSlug?: string;
}

const LastsPosts = ({ currentPostSlug }: LastsPostsProprsType) => {
	const text = useClientDictionary("general");

	const allPosts = usePreloadedPostsSelector();
	const lastPosts = useMemo(() => {
		if (allPosts?.length && currentPostSlug) {
			const newArr = allPosts.filter(
				(post: PostType) => post.slug.current !== currentPostSlug,
			);
			return sortByDate(newArr)?.slice(0, 3);
		} else {
			return [];
		}
	}, [allPosts, currentPostSlug]);

	return (
		lastPosts && lastPosts?.length > 0 && (
			<div className="other_posts">
				<h2>{text("otherPosts")}</h2>
				<Cards data={lastPosts} withCategory={false} />
			</div>
		)
	);
};

export default LastsPosts;
