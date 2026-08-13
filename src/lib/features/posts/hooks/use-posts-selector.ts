

"use client"
import { useAppSelector } from "@/lib/hooks";

export function usePostsSelector() {
    const posts = useAppSelector(
        (state) => state.postsReducer.posts,
    );

    return posts
}

export function usePostsLoadingSelector() {
    const loading = useAppSelector(
        (state) => state.postsReducer.loading,
    );

    return loading
}

export function usePostsLoadingOnPaginationSelector() {
    const loading = useAppSelector(
        (state) => state.postsReducer.loadingOnPagination,
    );

    return loading
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

export function usePostsOnPageSelector() {
    const postsOnPage = useAppSelector(
        (state) => state.postsReducer.postsOnPage,
    );

    return postsOnPage
}