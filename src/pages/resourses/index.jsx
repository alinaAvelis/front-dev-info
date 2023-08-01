/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import React, { useEffect, useState } from "react";
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
						content="программирование, посты, JavaScrip, frontend,ресурсы"
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
						{/* API */}
						<section>
							<h2 className="heading">API</h2>
							<p>
								<strong>YouTube iframe player API</strong> -{" "}
								<a
									className="link"
									href="https://developers.google.com/youtube/player_parameters?hl=ru"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://developers.google.com/youtube/player_parameters?hl=ru
								</a>
							</p>
						</section>

						{/*Content Security Policy */}
						<section>
							<h2 className="heading">Content Security Policy</h2>
							<p>
								<strong>Документация</strong> Content Security
								Policy -{" "}
								<a
									className="link"
									href="https://content-security-policy.com/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://content-security-policy.com/
								</a>
							</p>
							<p>
								Сгенерировать{" "}
								<strong>sha256 для Inline скриптов</strong> -{" "}
								<a
									className="link"
									href="https://strict-csp-codelab.glitch.me/csp_sha256_util.html"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://strict-csp-codelab.glitch.me/csp_sha256_util.html
								</a>
							</p>
						</section>

						{/* Изображения */}
						<section>
							<h2 className="heading">Изображения</h2>
							<p>
								Сгенерировать <strong>favicon</strong>{" "}
								<a
									className="link"
									href="https://realfavicongenerator.net/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://realfavicongenerator.net/
								</a>
							</p>
							<p>
								<strong>Скачать svg</strong> бесплатно{" "}
								<a
									className="link"
									href="https://www.svgrepo.com/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://www.svgrepo.com/
								</a>
							</p>
							<p>
								<strong>Сжать картинку</strong> до меньших
								размеров (WebP, PNG и JPEG) -{" "}
								<a
									className="link"
									href="https://tinypng.com/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://tinypng.com/
								</a>
							</p>
							<p>
								<strong>Изменить формат</strong> (В том числе
								форматировать <strong>в webp</strong> ) -{" "}
								<a
									className="link"
									href="https://squoosh.app/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://squoosh.app/
								</a>
							</p>
						</section>

						{/* Информационые */}
						<section>
							<h2 className="heading">Информационные</h2>
							<p>
								Различные{" "}
								<strong>roadmaps для разработки</strong> -{" "}
								<a
									className="link"
									href="https://roadmap.sh/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://roadmap.sh/
								</a>
							</p>
							<p>
								<strong>Roadmap для Javascript</strong> -{" "}
								<a
									className="link"
									href="https://roadmap.sh/javascript"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://roadmap.sh/javascript
								</a>
							</p>
							<p>
								<strong>Лучшие практики</strong> во frontend -{" "}
								<a
									className="link"
									href="https://roadmap.sh/best-practices/frontend-performance"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://roadmap.sh/best-practices/frontend-performance
								</a>
							</p>
							<p>
								Персональный{" "}
								<strong>помощник для программистов</strong> с
								возможностью поиска -{" "}
								<a
									className="link"
									href="https://www.phind.com"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://www.phind.com
								</a>
							</p>
							<p>
								Полезно{" "}
								<strong>для подготовки к собеседованию</strong>{" "}
								-{" "}
								<a
									className="link"
									href="https://www.techiedelight.com/ru/data-structures-and-algorithms-problems/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://www.techiedelight.com/ru/data-structures-and-algorithms-problems/
								</a>
							</p>
						</section>

						{/* Библиотеки */}
						<section>
							<h2 className="heading">Библиотеки</h2>
							<p>
								Библиотека <strong>анимаций</strong> на css -{" "}
								<a
									className="link"
									href="https://animate.style/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://animate.style/
								</a>
							</p>
							<p>
								Библиотека{" "}
								<strong>компонентов для React Chakra</strong> -{" "}
								<a
									className="link"
									href="https://chakra-ui.com/getting-started"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://chakra-ui.com/getting-started
								</a>
							</p>
							<p>
								Библиотека{" "}
								<strong>
									компонентов для React Material UI
								</strong>{" "}
								-{" "}
								<a
									className="link"
									href="https://mui.com/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://mui.com/
								</a>
							</p>
						</section>

						{/* Frameworks */}
						<section>
							<h2 className="heading">Frameworks</h2>
							<p>
								<strong>Foundation</strong> -{" "}
								<a
									className="link"
									href="https://get.foundation/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://get.foundation/
								</a>
							</p>
							<p>
								<strong>Vue</strong> -{" "}
								<a
									className="link"
									href="https://vuejs.org/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://vuejs.org/
								</a>
							</p>
							<p>
								<strong>React</strong> -{" "}
								<a
									className="link"
									href="https://react.dev/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://react.dev/
								</a>
							</p>
						</section>

						{/* Инструменты */}
						<section>
							<h2 className="heading">Инструменты</h2>
							<p>
								<strong>Next.js</strong> инструмент для React -{" "}
								<a
									className="link"
									href="https://nextjs.org/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://nextjs.org/
								</a>
							</p>
							<p>
								<strong>Vite</strong> -{" "}
								<a
									className="link"
									href="https://vitejs.dev/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://vitejs.dev/
								</a>
							</p>
						</section>

						{/* Разное */}
						<section>
							<h2 className="heading">Разное</h2>
							<p>
								<strong>Визуализация JSON</strong> (, XML, CSV,
								YAML, TOML) -{" "}
								<a
									className="link"
									href="https://jsoncrack.com/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://jsoncrack.com/
								</a>
							</p>
							<p>
								<strong>Подборка цветов </strong> adobe -{" "}
								<a
									className="link"
									href="https://color.adobe.com/ru/create/color-wheel"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://color.adobe.com/ru/create/color-wheel
								</a>
							</p>
						</section>
					</div>

					{/* Aside */}
					<aside className="aside">
						{menu.length > 0 && innerWidth > 1200 && (
							<div
								className={`menu ${
									changeMenuPosition && "menu--top"
								}`}
							>
								<h2>Содержание</h2>
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
						)}
						<div className="banner">
							<div id="yandex_rtb_R-A-2501461-3"></div>
							<Script
								id="yandex-ads-4"
								strategy="beforeInteractive"
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
					</aside>
				</div>
			</div>
		</>
	);
};

export default Post;
