import ToTopButton from "@/components/to-top-button/ToTopButton.jsx";
import dynamic from "next/dynamic";
const Breadcrumbs = dynamic(
	() => import("@/components/breadcrumbs/Breadcrumbs"),
);

import ResourseBlock from "@/components/resourse-block";
import PostMenu from "@/components/post/menu";

const ResoursesPage = () => {
	return (
		<div className="container container--center mt-0! relative">
			<Breadcrumbs pathArr={[{ name: "Ресурсы" }]} />
			<div className=" page_container  main_container mt-5 md:mt-10 flex ">
				<div className="post main order-2 md:order-1 main--not_main">
					{data?.map(({ title, data }) => {
						return (
							<ResourseBlock
								key={title}
								title={title}
								data={data}
							/>
						);
					})}
				</div>
				<div className="aside order-1 md:order-2">
					<PostMenu />
				</div>
			</div>

			<ToTopButton />
		</div>
	);
};

const API = [
	// {
	//     id: 0,
	//     href: `https://developers.google.com/youtube/player_parameters?hl=ru`,
	//     title: `https://developers.google.com/youtube/player_parameters?hl=ru`,
	//     textBeforeStrong: ``,
	//     strongText: `YouTube iframe player API`,
	//     textAfterStrong: ``,
	// },
	{
		id: "api1",
		href: `https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API`,
		title: `https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API`,
		textBeforeStrong: ``,
		strongText: `Web Audio API`,
		textAfterStrong: ``,
	},
];

const contentSecurityPolicy = [
	{
		id: 1,
		href: `https://content-security-policy.com/`,
		title: `https://content-security-policy.com/`,
		textBeforeStrong: ``,
		strongText: `Документация`,
		textAfterStrong: `Content Security
		Policy`,
	},
	{
		id: 2,
		href: `https://strict-csp-codelab.glitch.me/csp_sha256_util.html`,
		title: `https://strict-csp-codelab.glitch.me/csp_sha256_util.html`,
		textBeforeStrong: `Сгенерировать`,
		strongText: `sha256 для Inline скриптов`,
		textAfterStrong: ``,
	},
];

const images = [
	{
		id: 3,
		href: `https://realfavicongenerator.net/`,
		title: `https://realfavicongenerator.net/`,
		textBeforeStrong: `Сгенерировать`,
		strongText: `favicon`,
		textAfterStrong: ``,
	},
	{
		id: 4,
		href: `https://www.svgrepo.com/`,
		title: `https://www.svgrepo.com/`,
		textBeforeStrong: ``,
		strongText: `Скачать svg`,
		textAfterStrong: `бесплатно`,
	},
	{
		id: 5,
		href: `https://tinypng.com/`,
		title: `https://tinypng.com/`,
		textBeforeStrong: ``,
		strongText: `Сжать картинку`,
		textAfterStrong: `до меньших
		размеров (WebP, PNG и JPEG)`,
	},
	{
		id: 6,
		href: `https://www.websiteplanet.com/webtools/imagecompressor/`,
		title: `https://www.websiteplanet.com/webtools/imagecompressor/`,
		textBeforeStrong: `Второй ресурс для`,
		strongText: `сжатия изображений`,
		textAfterStrong: ``,
	},
	{
		id: 7,
		href: `https://squoosh.app/`,
		title: `https://squoosh.app/`,
		textBeforeStrong: ``,
		strongText: `Изменить формат`,
		textAfterStrong: `(В том числе форматировать в webp)`,
	},
];

const dApps = [
	{
		id: `0dapp`,
		href: `https://metamask.github.io/metamask-deeplinks/#`,
		title: `https://metamask.github.io/metamask-deeplinks/#`,
		textBeforeStrong: ``,
		strongText: `Сгенерировать ссылку`,
		textAfterStrong: `в Metamask App`,
	},
];

const info = [
	{
		id: 7,
		href: `https://roadmap.sh/`,
		title: `https://roadmap.sh/`,
		textBeforeStrong: `Различные`,
		strongText: `roadmaps для разработки`,
		textAfterStrong: ``,
	},
	{
		id: 8,
		href: `https://roadmap.sh/javascript`,
		title: `https://roadmap.sh/javascript`,
		textBeforeStrong: ``,
		strongText: `Roadmap для Javascript`,
		textAfterStrong: ``,
	},
	{
		id: 9,
		href: `https://roadmap.sh/best-practices/frontend-performance`,
		title: `https://roadmap.sh/best-practices/frontend-performance`,
		textBeforeStrong: ``,
		strongText: `Лучшие практики`,
		textAfterStrong: `во frontend`,
	},
	{
		id: 10,
		href: `https://www.techiedelight.com/ru/data-structures-and-algorithms-problems/`,
		title: `https://www.techiedelight.com/ru/data-structures-and-algorithms-problems/`,
		textBeforeStrong: `Полезно`,
		strongText: `для подготовки к собеседованию`,
		textAfterStrong: ``,
	},
	{
		id: 11 + "info",
		href: `https://css-tricks.com/guides/`,
		title: `https://css-tricks.com/guides/`,
		textBeforeStrong: `Полезные статьи`,
		strongText: `по css`,
		textAfterStrong: ``,
	},
	{
		id: 12 + "info",
		href: `https://msiter.ru/tutorials/svg/svg_inhtml`,
		title: `https://msiter.ru/tutorials/svg/svg_inhtml`,
		textBeforeStrong: `Справочник`,
		strongText: `по svg`,
		textAfterStrong: ``,
	},
];

const librariesStyles = [
	{
		id: 12,
		href: `https://animate.style/`,
		title: `https://animate.style/`,
		textBeforeStrong: `Библиотека css`,
		strongText: `анимаций`,
		textAfterStrong: ``,
	},
	{
		id: 15 + "l",
		href: `https://cssfx.netlify.app/`,
		title: `https://cssfx.netlify.app/`,
		textBeforeStrong: `Библиотека`,
		strongText: `css эффектов`,
		textAfterStrong: `и анимаций`,
	},
	{
		id: 17 + "l",
		href: `https://tympanus.net/Development/LineHoverStyles/`,
		title: `https://tympanus.net/Development/LineHoverStyles/`,
		textBeforeStrong: ``,
		strongText: `CSS line hover`,
		textAfterStrong: `styles for links`,
	},
	{
		id: 18 + "l",
		href: `https://www.framer.com/motion/`,
		title: `https://www.framer.com/motion/`,
		textBeforeStrong: ``,
		strongText: `Создание анимаций`,
		textAfterStrong: ``,
	},
];

const librariesReact = [
	{
		id: 13,
		href: `https://chakra-ui.com/getting-started`,
		title: `https://chakra-ui.com/getting-started`,
		textBeforeStrong: `Библиотека`,
		strongText: `компонентов для React Chakra`,
		textAfterStrong: ``,
	},
	{
		id: 14,
		href: `https://mui.com/`,
		title: `https://mui.com/`,
		textBeforeStrong: `Библиотека`,
		strongText: `компонентов для React Material UI`,
		textAfterStrong: ``,
	},
	{
		id: "react1",
		href: `https://magicui.design/`,
		title: `https://magicui.design/`,
		textBeforeStrong: `Библиотека`,
		strongText: `анимированных компонентов для React magic UI`,
		textAfterStrong: ``,
	},
	{
		id: "react2",
		href: `https://www.remotion.dev/`,
		title: `https://www.remotion.dev/`,
		textBeforeStrong: ``,
		strongText: `Создание MP4 видео`,
		textAfterStrong: `через код`,
	},
];

const librariesOther = [
	{
		id: 11,
		href: `https://day.js.org/en/`,
		title: `https://day.js.org/en/`,
		textBeforeStrong: `Библиотека`,
		strongText: `для работы с датами`,
		textAfterStrong: `day.js`,
	},
	{
		id: 16 + "lo",
		href: `https://lodash.com/`,
		title: `https://lodash.com/`,
		textBeforeStrong: `Библиотека JS функций`,
		strongText: `Lodash`,
		textAfterStrong: ``,
	},
	{
		id: 17 + "lo",
		href: `https://hammerjs.github.io/getting-started/`,
		title: `https://hammerjs.github.io/getting-started/`,
		textBeforeStrong: `Библиотека которая помогает`,
		strongText: `распознавать жесты`,
		textAfterStrong: `выполняемые касанием, мышью и событиями указателя.`,
	},
];

const libraries = [
	{
		subtitle: `React`,
		data: librariesReact,
	},
	{
		subtitle: `Стили`,
		data: librariesStyles,
	},
	{
		subtitle: `Разные`,
		data: librariesOther,
	},
];

const frameworks = [
	{
		id: 15,
		href: `https://get.foundation/`,
		title: `https://get.foundation/`,
		textBeforeStrong: ``,
		strongText: `Foundation`,
		textAfterStrong: ``,
	},
	{
		id: 16,
		href: `https://vuejs.org/`,
		title: `https://vuejs.org/`,
		textBeforeStrong: ``,
		strongText: `Vue`,
		textAfterStrong: ``,
	},
    	{
		id: 16 + "n",
		href: `https://nextjs.org/`,
		title: `https://nextjs.org/`,
		textBeforeStrong: ``,
		strongText: `Next.js`,
		textAfterStrong: ``,
	},
	{
		id: 17,
		href: `https://react.dev/`,
		title: `https://react.dev/`,
		textBeforeStrong: ``,
		strongText: `React`,
		textAfterStrong: ``,
	},
	{
		id: 18,
		href: `https://tailwindcss.com/`,
		title: `https://tailwindcss.com/`,
		textBeforeStrong: ``,
		strongText: `Tailwindcss`,
		textAfterStrong: `CSS-фреймворк`,
	},
];

const instrumentsReact = [
	{
		id: 19,
		href: `https://react-hook-form.com/`,
		title: `https://react-hook-form.com/`,
		textBeforeStrong: `Инструмент для работы`,
		strongText: `с формами`,
		textAfterStrong: `в React`,
	},
	{
		id: 20,
		href: `https://nextjs.org/`,
		title: `https://nextjs.org/`,
		textBeforeStrong: ``,
		strongText: `Next.js`,
		textAfterStrong: `инструмент для React`,
	},

	{
		id: `21ir`,
		href: `https://www.npmjs.com/package/html-react-parser`,
		title: `html-react-parser`,
		textBeforeStrong: ``,
		strongText: `Распарсить строку в html`,
		textAfterStrong: `в React`,
	},
	{
		id: `22ir`,
		href: `https://www.npmjs.com/package/react-timer-hook`,
		title: `react-timer-hook`,
		textBeforeStrong: ``,
		strongText: `Таймер`,
		textAfterStrong: ``,
	},
];

const instrumentsOthers = [
	{
		id: 21,
		href: `https://headlessui.com/`,
		title: `https://headlessui.com/`,
		textBeforeStrong: ``,
		strongText: `UI компоненты`,
		textAfterStrong: `для React и Vue`,
	},
	{
		id: 22,
		href: `https://vitejs.dev/`,
		title: `https://vitejs.dev/`,
		textBeforeStrong: ``,
		strongText: `Vite`,
		textAfterStrong: ``,
	},
	{
		id: 23 + "io",
		href: `https://github.com/typicode/json-server`,
		title: `https://github.com/typicode/json-server`,
		textBeforeStrong: ``,
		strongText: `JSON Server`,
		textAfterStrong: ``,
	},
	{
		id: 24 + "io",
		href: `https://kenwheeler.github.io/slick/`,
		title: `https://kenwheeler.github.io/slick/`,
		textBeforeStrong: ``,
		strongText: `Slick карусель`,
		textAfterStrong: ``,
	},
];

const instruments = [
	{
		subtitle: `React`,
		data: instrumentsReact,
	},
	{
		subtitle: `Другие`,
		data: instrumentsOthers,
	},
];

const others = [
	{
		id: 23 + `others`,
		href: `https://regexr.com/`,
		title: `https://regexr.com/`,
		textBeforeStrong: `Сайт для изучения и тестирования`,
		strongText: `регулярных выражений`,
		textAfterStrong: ``,
	},
	{
		id: 23,
		href: `https://jsoncrack.com/`,
		title: `https://jsoncrack.com/`,
		textBeforeStrong: ``,
		strongText: `Визуализация JSON`,
		textAfterStrong: `(XML, CSV,
			YAML, TOML)`,
	},
	{
		id: 23 + "d",
		href: `https://jsonplaceholder.typicode.com/`,
		title: `https://jsonplaceholder.typicode.com/`,
		textBeforeStrong: ``,
		strongText: `{JSON} Placeholder`,
		textAfterStrong: ``,
	},
	{
		id: 24,
		href: `https://color.adobe.com/ru/create/color-wheel`,
		title: `https://color.adobe.com/ru/create/color-wheel`,
		textBeforeStrong: ``,
		strongText: `Подборка цветов`,
		textAfterStrong: `adobe`,
	},
	{
		id: 25,
		href: `https://wordstat.yandex.ru`,
		title: `https://wordstat.yandex.ru`,
		textBeforeStrong: ``,
		strongText: `Подборка ключевых слов`,
		textAfterStrong: `от Yandex`,
	},
	{
		id: 26,
		href: `https://spec.commonmark.org/0.30/ `,
		title: `https://spec.commonmark.org/0.30/ `,
		textBeforeStrong: `Документация`,
		strongText: `commonmark`,
		textAfterStrong: ``,
	},
	{
		id: 27,
		href: `https://cryptologos.cc/`,
		title: `https://cryptologos.cc/`,
		textBeforeStrong: ``,
		strongText: `Криптоиконки`,
		textAfterStrong: ``,
	},
	{
		id: 28,
		href: `https://ru.bem.info/methodology/declarations/`,
		title: `https://ru.bem.info/methodology/declarations/`,
		textBeforeStrong: ``,
		strongText: `БЭМ`,
		textAfterStrong: ``,
	},
	{
		id: 29,
		href: `https://www.toptal.com/developers/keycode`,
		title: `https://www.toptal.com/developers/keycode`,
		textBeforeStrong: `Посмотреть`,
		strongText: `keycode`,
		textAfterStrong: ``,
	},
	{
		id: 30,
		href: `http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D`,
		title: `Event loop`,
		textBeforeStrong: ``,
		strongText: ``,
		textAfterStrong: ``,
	},
	{
		id: 30,
		href: `https://git-scm.com/`,
		title: `https://git-scm.com/`,
		textBeforeStrong: `Документация`,
		strongText: `git`,
		textAfterStrong: ``,
	},
];

const tasks = [
	{
		id: 1 + "tasks",
		href: `https://codeforces.com/`,
		title: `https://codeforces.com/`,
		textBeforeStrong: ``,
		strongText: ``,
		textAfterStrong: ``,
	},
];

const data = [
	{
		title: `API`,
		data: [
			{
				data: API,
			},
		],
	},
	{
		title: `Content Security Policy`,
		data: [
			{
				data: contentSecurityPolicy,
			},
		],
	},
	{
		title: `Изображения`,
		data: [
			{
				data: images,
			},
		],
	},
	{
		title: `Информационные`,
		data: [
			{
				data: info,
			},
		],
	},
	{
		title: `DApps`,
		data: [
			{
				data: dApps,
			},
		],
	},
	{
		title: `Библиотеки`,
		data: libraries,
	},
	{
		title: `Библиотеки и фреймворки`,
		data: [
			{
				data: frameworks,
			},
		],
	},
	{
		title: `Инструменты`,
		data: instruments,
	},
	{
		title: `Задачи по программированию`,
		data: [
			{
				data: tasks,
			},
		],
	},
	{
		title: `Разное`,
		data: [
			{
				data: others,
			},
		],
	},
];
// layout

// {
// 	id: 23,
// 	href: ``,
// 	title: ``,
// 	textBeforeStrong: ``,
// 	strongText: ``,
// 	textAfterStrong: ``,
// },

export default ResoursesPage;
