
import { useAppSelector } from "@/lib/hooks";

export function usePostsSelector() {
    const posts = useAppSelector(
        (state) => state.postsReducer.posts,
    );

    return posts
}

export function usePreloadedPostsSelector() {
    const posts = useAppSelector(
        (state) => state.postsReducer.preloaded,
    );

    return posts
}
