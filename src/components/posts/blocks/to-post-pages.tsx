

import Link from "next/link";
import getServerDictionary from "@/dictionary/hooks/get-server-dictionary";

const ToPostPages = async () => {
    const text = await getServerDictionary("general");
    return (
        <Link href="/posts" className="button button--center">
            <span>{text("toPostsPage")}</span>
        </Link>
    );
};

export default ToPostPages