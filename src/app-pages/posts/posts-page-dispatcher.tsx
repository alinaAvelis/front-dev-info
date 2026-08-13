"use client"
import { reset } from "@/lib/features/search/searchSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useEffect } from "react";

const PostsPageDispatcher = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        return () => {
            dispatch(reset());
        };
    }, [dispatch]);

    return null;
};

export default PostsPageDispatcher;
