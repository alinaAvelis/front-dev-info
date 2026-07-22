"use client";
import Link from "next/link";
import useDictionary from "@/shared/i18n/use-dictionary";

const NoTranslatedPost = () => {
	const noTranslatedPost = useDictionary("noTranslatedPost");
	const general = useDictionary("general");
	return (
		<div
			className="post container--center max-w-screen-xl mx-auto main_container relative px-5 md:px-10"
			role="alert"
		>
			<h2>{noTranslatedPost.title}</h2>

			<p>{noTranslatedPost.description}</p>

			<div className="flex gap-5 mt-3">
				<Link className="button button--outlined w-fit" href="/">
					{general.goHomeLink}
				</Link>
				<Link className="button button--fill w-fit" href="/posts">
					{general.goPostsLink}
				</Link>
			</div>
		</div>
	);
};

export default NoTranslatedPost;