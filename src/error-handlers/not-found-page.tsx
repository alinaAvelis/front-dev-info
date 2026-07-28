"use client"
import useDictionary from "@/shared/i18n/use-dictionary";
import ErrorPageLinks from "@/components/error-page-links";

export default function NotFoundPage() {
	const pageNotFound = useDictionary("pageNotFound");
	return (
		<div className="post container--center max-w-screen-xl mx-auto main_container relative px-5 md:px-10 mt-40 my-4 text-center flex flex-col items-center justify-center">
			<h2>404</h2>
			<p className="text-2xl">{pageNotFound.title}</p>
			<p>{pageNotFound.description}</p>
			<ErrorPageLinks />
		</div>
	);
}
