import ResoursesPage from "@/app-pages/resourses-page";

export const metadata = {
	title: "Ресурсы для frontend разработки",
	description:
		"Различные ресурсы, которые помогут вам во frontend разработке",
	keywords:
		"программирование, посты, JavaScrip, frontend, ресурсы, frontend roadmap, фронтенд, фронтенд обучение, frontend обучение, бесплатный фронтенд, фронтенд сайт, реакт, фронтенд инструменты, ссылки реакт, инструменты фронтенд разработчика",
};

const Resourses = () => {
	return (
		<div className="max-w-screen-xl mx-auto">
			<ResoursesPage />
		</div>
	);
};

export default Resourses;
