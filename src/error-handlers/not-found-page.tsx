
import getServerDictionary from "@/dictionary/hooks/get-server-dictionary";
import ErrorPageLinks from "@/components/error-page-links";

export default async function NotFoundPage() {
	const text = await getServerDictionary("page-not-found");
	return (
		<div className="post container--center max-w-screen-xl mx-auto main_container relative px-5 md:px-10 mt-40 my-4 text-center flex flex-col items-center justify-center">
			<h2>404</h2>
			<p className="text-2xl">{text("title")}</p>
			<p>{text("description")}</p>
			<ErrorPageLinks />
		</div>
	);
}
