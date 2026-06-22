
import { useAppSelector } from "@/lib/hooks";

export function usePostsSelector() {
    const posts = useAppSelector(
        (state) => state.postsReducer.posts,
    );

    return posts
}

export function usePostsTotalSelector() {
    const total = useAppSelector(
        (state) => state.postsReducer.total,
    );

    return total
}

export function usePreloadedPostsSelector() {
    const posts = useAppSelector(
        (state) => state.postsReducer.preloaded,
    );

    return posts
}

// export function useHasMorePostsSelector() {
//     const hasMorePosts = useAppSelector(
//         (state) => state.postsReducer.hasMorePosts,
//     );

//     return hasMorePosts
// }

export function useLimitSelector() {
    const limit = useAppSelector(
        (state) => state.postsReducer.limit,
    );

    return limit
}