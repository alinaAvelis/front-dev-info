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

						<section>
							<h2 className="heading">API</h2>
							<p>
								<strong>YouTube iframe player API</strong> -{" "}
								<Link
									locale={false}
									className="link"
									href="https://developers.google.com/youtube/player_parameters?hl=ru"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://developers.google.com/youtube/player_parameters?hl=ru
								</Link>
							</p>
						</section>

						<section>
							<h2 className="heading">Content Security Policy</h2>
							<p>
								<strong>Документация</strong> Content Security
								Policy -{" "}
								<Link
									locale={false}
									className="link"
									href="https://content-security-policy.com/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://content-security-policy.com/
								</Link>
							</p>
							<p>
								Сгенерировать{" "}
								<strong>sha256 для Inline скриптов</strong> -{" "}
								<Link
									locale={false}
									className="link"
									href="https://strict-csp-codelab.glitch.me/csp_sha256_util.html"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://strict-csp-codelab.glitch.me/csp_sha256_util.html
								</Link>
							</p>
						</section>

						<section>
							<h2 className="heading">Изображения</h2>
							<p>
								Сгенерировать <strong>favicon</strong>{" "}
								<Link
									locale={false}
									className="link"
									href="https://realfavicongenerator.net/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://realfavicongenerator.net/
								</Link>
							</p>
							<p>
								<strong>Скачать svg</strong> бесплатно{" "}
								<Link
									locale={false}
									className="link"
									href="https://www.svgrepo.com/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://www.svgrepo.com/
								</Link>
							</p>
							<p>
								<strong>Сжать картинку</strong> до меньших
								размеров (WebP, PNG и JPEG) -{" "}
								<Link
									locale={false}
									className="link"
									href="https://tinypng.com/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://tinypng.com/
								</Link>
							</p>
							<p>
								<strong>Изменить формат</strong> (В том числе
								форматировать <strong>в webp</strong> ) -{" "}
								<Link
									locale={false}
									className="link"
									href="https://squoosh.app/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://squoosh.app/
								</Link>
							</p>
						</section>

						<section>
							<h2 className="heading">Информационные</h2>
							<p>
								Различные{" "}
								<strong>roadmaps для разработки</strong> -{" "}
								<Link
									locale={false}
									className="link"
									href="https://roadmap.sh/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://roadmap.sh/
								</Link>
							</p>
							<p>
								<strong>Roadmap для Javascript</strong> -{" "}
								<Link
									locale={false}
									className="link"
									href="https://roadmap.sh/javascript"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://roadmap.sh/javascript
								</Link>
							</p>
							<p>
								<strong>Лучшие практики</strong> во frontend -{" "}
								<Link
									locale={false}
									className="link"
									href="https://roadmap.sh/best-practices/frontend-performance"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://roadmap.sh/best-practices/frontend-performance
								</Link>
							</p>
							<p>
								Персональный{" "}
								<strong>помощник для программистов</strong> с
								возможностью поиска -{" "}
								<Link
									locale={false}
									className="link"
									href="https://www.phind.com"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://www.phind.com
								</Link>
							</p>
							<p>
								Полезно{" "}
								<strong>для подготовки к собеседованию</strong>{" "}
								-{" "}
								<Link
									locale={false}
									className="link"
									href="https://www.techiedelight.com/ru/data-structures-and-algorithms-problems/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://www.techiedelight.com/ru/data-structures-and-algorithms-problems/
								</Link>
							</p>
						</section>

						<section>
							<h2 className="heading">Библиотеки</h2>
							<p>
								Библиотека <strong>для работы с датами</strong> day.js -{" "}
								<Link
									locale={false}
									className="link"
									href="https://day.js.org/en/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://day.js.org/en/
								</Link>
							</p>
							<p>
								Библиотека <strong>анимаций</strong> на css -{" "}
								<Link
									locale={false}
									className="link"
									href="https://animate.style/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://animate.style/
								</Link>
							</p>
							<p>
								Библиотека{" "}
								<strong>компонентов для React Chakra</strong> -{" "}
								<Link
									locale={false}
									className="link"
									href="https://chakra-ui.com/getting-started"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://chakra-ui.com/getting-started
								</Link>
							</p>
							<p>
								Библиотека{" "}
								<strong>
									компонентов для React Material UI
								</strong>{" "}
								-{" "}
								<Link
									locale={false}
									className="link"
									href="https://mui.com/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://mui.com/
								</Link>
							</p>
						</section>

						<section>
							<h2 className="heading">Frameworks</h2>
							<p>
								<strong>Foundation</strong> -{" "}
								<Link
									locale={false}
									className="link"
									href="https://get.foundation/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://get.foundation/
								</Link>
							</p>
							<p>
								<strong>Vue</strong> -{" "}
								<Link
									locale={false}
									className="link"
									href="https://vuejs.org/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://vuejs.org/
								</Link>
							</p>
							<p>
								<strong>React</strong> -{" "}
								<Link
									locale={false}
									className="link"
									href="https://react.dev/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://react.dev/
								</Link>
							</p>
							<p>
								<strong>Tailwindcss</strong> - CSS-фреймворк{" "}
								<Link
									locale={false}
									className="link"
									href="https://tailwindcss.com/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://tailwindcss.com/
								</Link>
							</p>
						</section>

						<section>
							<h2 className="heading">Инструменты</h2>
							<p>
								Инструмент для работы <strong>с формами</strong> в React -{" "}
								<Link
									locale={false}
									className="link"
									href="https://react-hook-form.com/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://react-hook-form.com/
								</Link>
							</p>
							<p>
								<strong>UI компоненты</strong> для React и Vue -{" "}
								<Link
									locale={false}
									className="link"
									href="https://headlessui.com/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://headlessui.com/
								</Link>
							</p>
							<p>
								<strong>Next.js</strong> инструмент для React -{" "}
								<Link
									locale={false}
									className="link"
									href="https://nextjs.org/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://nextjs.org/
								</Link>
							</p>
							<p>
								<strong>Vite</strong> -{" "}
								<Link
									locale={false}
									className="link"
									href="https://vitejs.dev/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://vitejs.dev/
								</Link>
							</p>
						</section>

						<section>
							<h2 className="heading">Разное</h2>
							<p>
								<strong>Визуализация JSON</strong> (, XML, CSV,
								YAML, TOML) -{" "}
								<Link
									locale={false}
									className="link"
									href="https://jsoncrack.com/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://jsoncrack.com/
								</Link>
							</p>
							<p>
								<strong>Подборка цветов </strong> adobe -{" "}
								<Link
									locale={false}
									className="link"
									href="https://color.adobe.com/ru/create/color-wheel"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://color.adobe.com/ru/create/color-wheel
								</Link>
							</p>
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

export default Post;
