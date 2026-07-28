"use client"
import Link from "next/link";
import useDictionary from "@/shared/i18n/use-dictionary";

const ErrorPageLinks = () => {
	const general = useDictionary("general");
	return (
		<div className="flex gap-5 mt-3">
			<Link className="button button--outlined w-fit" href="/">
				{general.goHomeLink}
			</Link>
			<Link className="button button--fill w-fit" href="/posts">
				{general.goPostsLink}
			</Link>
		</div>
	);
};

export default ErrorPageLinks;
