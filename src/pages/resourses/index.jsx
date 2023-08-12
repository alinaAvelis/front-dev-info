import React, { useEffect, useState } from "react";
import Link from "next/link";
import Breadcrumbs from "../../components/breadcrumbs";
import Head from "next/head";
import Script from "next/script";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Post = () => {
	const [menu, setMenu] = useState([]);
	const [expanded, setExpanded] = useState(false);
	const [innerWidth, setInnerWidth] = useState(0);
	const [changeMenuPosition, setChangeMenuPosition] = useState(false);
	useEffect(() => {
		setmMenu();
		if (typeof window !== "undefined") {
			window.scrollTo(0, 0);

			window.addEventListener("resize", handleResize);
			handleResize();
			return () => window.removeEventListener("resize", handleResize);
		}
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (scrollY > 200) {
				setChangeMenuPosition(true);
			} else {
				setChangeMenuPosition(false);
			}
		});
	});

	const setmMenu = () => {
		try {
			const headings = document.querySelectorAll(".heading");
			let links = [];

			const createMenuItems = (elements) => {
				elements.forEach((el, i) => {
					const tag = el?.nodeName;
					const text = el?.innerText;
					const linkName = tag + i;
					el.setAttribute("id", `${linkName}`);

					const link = {
						linkName: linkName,
						text: text,
						classList: "",
					};

					switch (tag) {
						case "H1":
							link.classList = "first_level";
							break;
						case "H2":
							link.classList = "second_level";
							break;
						case "H3":
							link.classList = "three_level";
							break;
						case "H4":
							link.classList = "four_level";
							break;
						case "H5":
							link.classList = "five_level";
							break;
						case "H6":
							link.classList = "six_level";
							break;
						default:
							break;
					}

					links.push(link);
				});
			};

			if (headings.length > 0) {
				createMenuItems(headings);
				setMenu(links);
			}
		} catch (e) {
			// console.log(e);
		}
	};

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	const handleResize = () => {
		setInnerWidth(window?.innerWidth);
	};

	return (
		<>
			<div className="container container--center">
				<Head>
					<title>Ресурсы для frontend разработки</title>
					<meta
						name="keywords"
						content="программирование, посты, JavaScrip, frontend, ресурсы, frontend roadmap, фронтенд, фронтенд обучение, frontend обучение, бесплатный фронтенд, фронтенд сайт, реакт, фронтенд инструменты, ссылки реакт, инструменты фронтенд разработчика"
					/>
					<meta
						name="description"
						content="Различные ресурсы, которые помогут вам во frontend разработке"
						key="ogdesc"
					/>
				</Head>
				<Breadcrumbs pathArr={[{ name: "Ресурсы" }]} />
				<div className=" mt-50  flex page_container main_container">
					<div className="post main  main--not_main">
						<h1>Ресурсы для frontend разработки</h1>
						{menu.length > 0 && innerWidth < 1200 && (
							<Accordion
								className="menu_accordeon"
								expanded={expanded === "panel3"}
								onChange={handleChange("panel3")}
							>
								<AccordionSummary
									aria-controls="panel3bh-content"
									id="panel3bh-header"
									expandIcon={<ExpandMoreIcon />}
								>
									<h2>Содержание</h2>
								</AccordionSummary>
								<AccordionDetails>
									<div className="menu">
										{menu?.map((item, i) => (
											<a
												key={i}
												className={`menu__item ${item.classList}`}
												href={`#${item.linkName}`}
											>
												{item.text}
											</a>
										))}
									</div>
								</AccordionDetails>
							</Accordion>
						)}

						<section>
							<h2 className="heading">API</h2>
							{API.length > 0 &&
								API.map((item) => {
									return (
										<p key={item.id}>
											{item.textBeforeStrong &&
												item.textBeforeStrong + " "}
											<strong>{item.strongText}</strong>
											{item.textAfterStrong &&
												" " + item.textAfterStrong}{" "}
											-{" "}
											<Link
												locale={false}
												className="link"
												href={item.href}
												target="_blank"
												rel="noreferrer noopener"
											>
												{item.title}
											</Link>
										</p>
									);
								})}
						</section>

						<section>
							<h2 className="heading">Content Security Policy</h2>
							{contentSecurityPolicy.length > 0 &&
								contentSecurityPolicy.map((item) => {
									return (
										<p key={item.id}>
											{item.textBeforeStrong &&
												item.textBeforeStrong + " "}
											<strong>{item.strongText}</strong>
											{item.textAfterStrong &&
												" " + item.textAfterStrong}{" "} -{" "}
											<Link
												locale={false}
												className="link"
												href={item.href}
												target="_blank"
												rel="noreferrer noopener"
											>
												{item.title}
											</Link>
										</p>
									);
								})}
						</section>

						<section>
							<h2 className="heading">Изображения</h2>
							{images.length > 0 &&
								images.map((item) => {
									return (
										<p key={item.id}>
											{item.textBeforeStrong &&
												item.textBeforeStrong + " "}
											<strong>{item.strongText}</strong>
											{item.textAfterStrong &&
												" " + item.textAfterStrong}{" "}
											-{" "}
											<Link
												locale={false}
												className="link"
												href={item.href}
												target="_blank"
												rel="noreferrer noopener"
											>
												{item.title}
											</Link>
										</p>
									);
								})}
						</section>

						<section>
							<h2 className="heading">Информационные</h2>
							{info.length > 0 &&
								info.map((item) => {
									return (
										<p key={item.id}>
											{item.textBeforeStrong &&
												item.textBeforeStrong + " "}
											<strong>{item.strongText}</strong>
											{item.textAfterStrong &&
												" " + item.textAfterStrong}{" "}
											-{" "}
											<Link
												locale={false}
												className="link"
												href={item.href}
												target="_blank"
												rel="noreferrer noopener"
											>
												{item.title}
											</Link>
										</p>
									);
								})}
						</section>

						<section>
							<h2 className="heading">DApps</h2>
							{dApps.length > 0 &&
								dApps.map((item) => {
									return (
										<p key={item.id}>
											{item.textBeforeStrong &&
												item.textBeforeStrong + " "}
											<strong>{item.strongText}</strong>
											{item.textAfterStrong &&
												" " + item.textAfterStrong}{" "}
											-{" "}
											<Link
												locale={false}
												className="link"
												href={item.href}
												target="_blank"
												rel="noreferrer noopener"
											>
												{item.title}
											</Link>
										</p>
									);
								})}
						</section>

						<section>
							<h2 className="heading">Библиотеки</h2>
							{libraries.length > 0 &&
								libraries.map((item) => {
									return (
										<p key={item.id}>
											{item.textBeforeStrong &&
												item.textBeforeStrong + " "}
											<strong>{item.strongText}</strong>
											{item.textAfterStrong &&
												" " + item.textAfterStrong}{" "} -{" "}
											<Link
												locale={false}
												className="link"
												href={item.href}
												target="_blank"
												rel="noreferrer noopener"
											>
												{item.title}
											</Link>
										</p>
									);
								})}
						</section>

						<section>
							<h2 className="heading">Frameworks</h2>
							{frameworks.length > 0 &&
								frameworks.map((item) => {
									return (
										<p key={item.id}>
											{item.textBeforeStrong &&
												item.textBeforeStrong + " "}
											<strong>{item.strongText}</strong>
											{item.textAfterStrong &&
												" " + item.textAfterStrong}{" "} -{" "}
											<Link
												locale={false}
												className="link"
												href={item.href}
												target="_blank"
												rel="noreferrer noopener"
											>
												{item.title}
											</Link>
										</p>
									);
								})}
						</section>

						<section>
							<h2 className="heading">Инструменты</h2>
							<h3 className="heading">React</h3>
							{instrumentsReact.length > 0 &&
								instrumentsReact.map((item) => {
									return (
										<p key={item.id}>
											{item.textBeforeStrong &&
												item.textBeforeStrong + " "}
											<strong>{item.strongText}</strong>
											{item.textAfterStrong &&
												" " + item.textAfterStrong}{" "} -{" "}
											<Link
												locale={false}
												className="link"
												href={item.href}
												target="_blank"
												rel="noreferrer noopener"
											>
												{item.title}
											</Link>
										</p>
									);
								})}
							<h3 className="heading">Другие</h3>
							{instrumentsOthers.length > 0 &&
								instrumentsOthers.map((item) => {
									return (
										<p key={item.id}>
											{item.textBeforeStrong &&
												item.textBeforeStrong + " "}
											<strong>{item.strongText}</strong>
											{item.textAfterStrong &&
												" " + item.textAfterStrong}{" "} -{" "}
											<Link
												locale={false}
												className="link"
												href={item.href}
												target="_blank"
												rel="noreferrer noopener"
											>
												{item.title}
											</Link>
										</p>
									);
								})}
						</section>

						<section>
							<h2 className="heading">Разное</h2>
							{others.length > 0 &&
								others.map((item) => {
									return (
										<p key={item.id}>
											{item.textBeforeStrong &&
												item.textBeforeStrong + " "}
											<strong>{item.strongText}</strong>
											{item.textAfterStrong &&
												" " + item.textAfterStrong}{" "} -{" "}
											<Link
												locale={false}
												className="link"
												href={item.href}
												target="_blank"
												rel="noreferrer noopener"
											>
												{item.title}
											</Link>
										</p>
									);
								})}
							
						</section>
					</div>

					<aside className="aside">
						{menu.length > 0 && innerWidth > 1200 && (
							<div
								className={`menu ${
									changeMenuPosition && "menu--top"
								}`}
							>
								<h2>Содержание</h2>
								{menu?.map((item, i) => (
									<Link
										locale={false}
										key={i}
										className={`menu__item ${item.classList}`}
										href={`#${item.linkName}`}
									>
										{item.text}
									</Link>
								))}
							</div>
						)}
						{innerWidth > 1000 && (
							<div className="banner">
								<div id="yandex_rtb_R-A-2501461-3"></div>
								<Script
									id="yandex-ads-4"
									strategy="afterInteractive"
								>
									{`
									window.yaContextCb.push(()=>{
										Ya.Context.AdvManager.render({
											"blockId": "R-A-2501461-3",
											"renderTo": "yandex_rtb_R-A-2501461-3"
										})
									})
								`}
								</Script>
							</div>
						)}
					</aside>
				</div>
			</div>
		</>
	);
};

const API = [
	{
		id: 0,
		href: `https://developers.google.com/youtube/player_parameters?hl=ru`,
		title: `https://developers.google.com/youtube/player_parameters?hl=ru`,
		textBeforeStrong: ``,
		strongText: `YouTube iframe player API`,
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
];

const libraries = [
	{
		id: 11,
		href: `https://day.js.org/en/`,
		title: `https://day.js.org/en/`,
		textBeforeStrong: `Библиотека`,
		strongText: `для работы с датами`,
		textAfterStrong: `day.js`,
	},
	{
		id: 12,
		href: `https://animate.style/`,
		title: `https://animate.style/`,
		textBeforeStrong: `Библиотека css`,
		strongText: `анимаций`,
		textAfterStrong: ``,
	},
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
]

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
]

const others = [
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
]

// layout

// {
// 	id: 23,
// 	href: ``,
// 	title: ``,
// 	textBeforeStrong: ``,
// 	strongText: ``,
// 	textAfterStrong: ``,
// },

export default Post;
