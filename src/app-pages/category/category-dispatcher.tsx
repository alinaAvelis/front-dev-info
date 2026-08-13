"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { setPostsState } from "@/lib/features/posts/postsSlice";
import { setCategorySlug } from "@/lib/features/categories/categoriesSlice";
import { setPostsByPreloaded } from "@/lib/features/posts/postsSlice";
import { useSearchValueSelector } from "@/lib/features/search/hooks/use-search-selector";
import { PostsFromSanityType } from "@/shared/types/posts";
import { SanityCategoryType } from "@/shared/types/categories";

type CategoryDispatcherPropsType = {
  allPosts: PostsFromSanityType;
  category: SanityCategoryType;
}
const CategoryDispatcher = ({ allPosts, category }: CategoryDispatcherPropsType) => {
  const dispatch = useAppDispatch();
  const searchValue = useSearchValueSelector();

  useEffect(() => {
    if (allPosts?.total > 0) {
      dispatch(setPostsState(allPosts));
    }

    if (category?.slug?.current) {
      dispatch(setCategorySlug(category.slug.current));
    }
    return () => {
      dispatch(setCategorySlug(undefined));
      if (!searchValue) {
        dispatch(setPostsByPreloaded());
      }
    };
  }, [allPosts, category.slug, dispatch, searchValue]);

  return null
   
};

export default CategoryDispatcher;
