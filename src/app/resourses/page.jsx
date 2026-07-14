import ResoursesPage from "@/app-pages/resourses";
import { getResourcesQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { getServerLanguage } from "@/shared/i18n/get-server-language";
export const metadata = {
	title: "Ресурсы для frontend разработки",
	description:
		"Различные ресурсы, которые помогут вам во frontend разработке",
	keywords:
		"программирование, посты, JavaScrip, frontend, ресурсы, frontend roadmap, фронтенд, фронтенд обучение, frontend обучение, бесплатный фронтенд, фронтенд сайт, реакт, фронтенд инструменты, ссылки реакт, инструменты фронтенд разработчика",
};

const Resourses = async () => {
	const language = await getServerLanguage();
	const resources = await sanityFetch({
			query: getResourcesQuery(language)
			
		});

	return <ResoursesPage resources={resources} />;
};

export default Resourses;
