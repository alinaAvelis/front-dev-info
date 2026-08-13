
import Link from "next/link";
import getServerDictionary from "@/dictionary/hooks/get-server-dictionary";

const ErrorPageLinks = async() => {
	const text = await getServerDictionary("general");
	return (
		<div className="flex gap-5 mt-3">
			<Link className="button button--outlined w-fit" href="/">
				{text("goHomeLink")}
			</Link>
			<Link className="button button--fill w-fit" href="/posts">
				{text("goPostsLink")}
			</Link>
		</div>
	);
};

export default ErrorPageLinks;
