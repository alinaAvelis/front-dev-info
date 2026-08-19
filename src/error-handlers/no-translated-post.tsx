
import ErrorPageLinks from "@/components/error-page-links";
import getServerDictionary from "@/dictionary/hooks/get-server-dictionary";
const NoTranslatedPost = async () => {
	const text = await getServerDictionary("no-translated-post");
	
	return (
		<div
			className="post container--center max-w-screen-xl mx-auto main_container relative px-5 md:px-10"
			role="alert"
		>
			<h2>{text("title")}</h2>

			<p>{text("description")}</p>

			<ErrorPageLinks />
		</div>
	);
};

export default NoTranslatedPost;