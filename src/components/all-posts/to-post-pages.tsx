"use client";

import Link from "next/link";
import useDictionary from "@/shared/i18n/use-dictionary";


const ToPostPages = () => {
    const general = useDictionary("general");
    return (
        <Link href="/posts" className="button button--center">
            <span>{general?.toPostsPage}</span>
        </Link>
    );
};

export default ToPostPages