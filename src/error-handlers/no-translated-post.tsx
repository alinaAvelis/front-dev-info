"use client";
import useDictionary from "@/shared/i18n/use-dictionary";
import ErrorPageLinks from "@/components/error-page-links";

const NoTranslatedPost = () => {
	const noTranslatedPost = useDictionary("noTranslatedPost");
	
	return (
		<div
			className="post container--center max-w-screen-xl mx-auto main_container relative px-5 md:px-10"
			role="alert"
		>
			<h2>{noTranslatedPost.title}</h2>

			<p>{noTranslatedPost.description}</p>

			<ErrorPageLinks />
		</div>
	);
};

export default NoTranslatedPost;