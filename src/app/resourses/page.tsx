import ResoursesPage from "@/app-pages/resourses";
import { getResourcesQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { getT } from "next-i18next/server";
import { ResourcesFromSanityType } from "@/shared/types/resources";
export const metadata = {
	title: "Ресурсы для frontend разработки",
	description:
		"Различные ресурсы, которые помогут вам во frontend разработке",
	keywords:
		"программирование, посты, JavaScrip, frontend, ресурсы, frontend roadmap, фронтенд, фронтенд обучение, frontend обучение, бесплатный фронтенд, фронтенд сайт, реакт, фронтенд инструменты, ссылки реакт, инструменты фронтенд разработчика",
};

const Resourses = async () => {
	const { lng } = await getT();
	const resources: ResourcesFromSanityType = await sanityFetch({
		query: getResourcesQuery(lng),
	});

	return <ResoursesPage resources={resources} />;
};

export default Resourses;
