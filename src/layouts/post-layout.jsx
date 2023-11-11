import React, { useEffect, useState } from "react";
// import {
// 	VKShareButton,
// 	VKIcon,
// 	EmailShareButton,
// 	EmailIcon,
// 	WhatsappShareButton,
// 	WhatsappIcon,
// 	TelegramShareButton,
// 	TelegramIcon,
// } from "next-share";
// import dynamic from 'next/dynamic';
import { getDateString } from "../services/support";
import Script from "next/script";
import { useDispatch } from "react-redux";
import { setCategoriesState } from "../store/slices/categoriesSlice";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { sortByDate } from "../../public/support-func/support.js";
import dynamic from "next/dynamic";
const Breadcrumbs = dynamic(() => import("../components/breadcrumbs"));
const Cards = dynamic(() => import("../components/cards"));
import MainLayout from "../layouts/main-layout";

// сделать отдельно хук суппорт где будет обрезаться location


const useFormattedDate = (date) => {
	const [formattedDate, setFormattedDate] = useState(null);

	useEffect(() => setFormattedDate(getDateString(date)), []);

	return formattedDate;
};

const PostLayout = ({children, categories, allPosts, title, headKeywords, headDescription, breadcrumbsArray, postDate}) => {
	const dispatch = useDispatch();
	const [menu, setMenu] = useState([]);
	const [expanded, setExpanded] = useState(false);
	const [innerWidth, setInnerWidth] = useState(0);
	const [changeMenuPosition, setChangeMenuPosition] = useState(false);
	const [lastPosts, setLastPosts] = useState([]);
	useEffect(() => {
		setmMenu();
		setPosts();
		if (typeof window !== "undefined") {
			window.scrollTo(0, 0);

			window.addEventListener("resize", handleResize);
			handleResize();
			return () => window.removeEventListener("resize", handleResize);
		}
	}, []);

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

	useEffect(() => {
		if (categories) {
			dispatch(setCategoriesState(categories));
		}
	}, [categories, dispatch]);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (scrollY > 200) {
				setChangeMenuPosition(true);
			} else {
				setChangeMenuPosition(false);
			}
		});
	});

	const setPosts = () => {
		if (allPosts?.length) {
			const newArr = allPosts.filter(
				(n) => n.slug.current !== `algorithm-execution-speed`
			);
			setLastPosts(newArr && sortByDate(newArr));
		}
	};

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	const handleResize = () => {
		setInnerWidth(window?.innerWidth);
	};

	return (
		<MainLayout
			categories={categories}
			headTitle={title}
			headKeywords={headKeywords}
			headDescription={headDescription}
		>
			<div className="container container--center main_container">
				<Breadcrumbs
					pathArr={[
						{ name: "Посты", url: "/posts" },
						...breadcrumbsArray,
					]}
				/>
				<div className="mt-16  flex page_container">
					<div className="post main  main--not_main">
						<h1>{title}</h1>
						{menu.length > 0 && innerWidth < 1200 && (
							<Accordion
								className="menu_accordeon"
								expanded={expanded === "panel2"}
								onChange={handleChange("panel2")}
							>
								<AccordionSummary
									aria-controls="panel2bh-content"
									id="panel2bh-header"
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
						<p className="post_date">
							{useFormattedDate(postDate)}
						</p>

                        {children}

						<div className="other_posts">
							<h2>Другие посты</h2>
							<Cards data={lastPosts.slice(0, 3)} />
						</div>

						<div id="adfox_169091256339947002"></div>
						<Script
							id="yandex-ads-adfox-1"
							strategy="afterInteractive"
						>
							{`
									window.yaContextCb.push(()=>{
										Ya.adfoxCode.create({
											ownerId: 1464385,
											containerId: 'adfox_169091256339947002',
											params: {
												pp: 'g',
												ps: 'grkh',
												p2: 'hukd'
											}
										})
									})
								`}
						</Script>
					</div>

					<div className="aside">
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

						{innerWidth > 1000 && (
							<div className="banner">
								<div id="yandex_rtb_R-A-2501461-3"></div>
								<Script
									id="yandex-ads-3"
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
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default PostLayout;
