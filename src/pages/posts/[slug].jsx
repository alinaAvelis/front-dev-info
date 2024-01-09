import React, { useEffect, useState } from "react";
import Link from "next/link.js";
import parse from "html-react-parser";
import Head from "next/head";
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
import { getDateString } from "../../services/support";
import sanityClient from "../../../public/support-func/sanityClient";
import Script from "next/script";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "../../../public/support-func/sanity-support";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import Vimeo from "@u-wave/react-vimeo";
import getVideoId from "get-video-id";
import { groq } from "next-sanity";
import { useDispatch } from "react-redux";
import { setCategoriesState } from "../../store/slices/categoriesSlice";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { sortByDate } from "../../../public/support-func/support.js";
import dynamic from "next/dynamic";
const Breadcrumbs = dynamic(() => import("../../components/breadcrumbs"));
const Cards = dynamic(() => import("../../components/cards"));
import MainLayout from "../../layouts/main-layout";
import CodeInput from "../../components/code-input";

export async function getStaticProps({ params }) {
	const postQuery = groq`*[_type == "posts" && active == true && slug.current == $slug][0]`;
	const allPosts = await sanityClient.fetch(
		`*[_type == "posts" && active == true]`
	);
	const pageData = await sanityClient.fetch(postQuery, { slug: params.slug });
	const categories = await sanityClient.fetch(
		`*[_type == "categories" && activeCategory == true]`
	);
	return {
		props: {
			pageData: pageData,
			categories,
			allPosts: allPosts,
		},

		revalidate: 60,
	};
}

export const getStaticPaths = async () => {
	const posts = await sanityClient.fetch(
		`*[_type == "posts" && active == true] { slug }`
	);
	const paths = posts.map((post) => ({
		params: {
			slug: post.slug.current,
		},
	}));

	return {
		paths,
		fallback: true,
	};
};

const components = {
	block: {
		normal: ({ children }) => <p className="text">{children}</p>,
		h2: ({ children }) => <h2 className="heading">{children}</h2>,
		h3: ({ children }) => <h3 className="heading">{children}</h3>,
		h4: ({ children }) => <h4 className="heading">{children}</h4>,
		h5: ({ children }) => <h5 className="heading">{children}</h5>,
		h6: ({ children }) => <h6 className="heading">{children}</h6>,
	},
	list: {
		// Ex. 1: customizing common list types
		bullet: ({ children }) => (
			<ul className="mt-2 list-disc pl-10">{children}</ul>
		),
		number: ({ children }) => <ol className="mt-2">{children}</ol>,

		// Ex. 2: rendering custom lists
		checkmarks: ({ children }) => <ol className="mt-2">{children}</ol>,
	},
	marks: {
		accent_text: ({ children }) => (
			<span className="accent_text">{children}</span>
		),
		link: ({ value, children }) => {
			const { blank, href } = value;
			return blank ? (
				<a
					className="link"
					href={href}
					target="_blank"
					rel="noreferrer noopener"
				>
					{children}
				</a>
			) : (
				<a className="link" href={href}>
					{children}
				</a>
			);
		},
		internalLink: ({ value, children }) => {
			const { href } = value;
			return (
				<Link className="link" target="_blank" href={href}>
					{children}
				</Link>
			);
		},
		gitHub_link: ({ value, children }) => {
			const { href } = value;
			return (
				<a
					className="button"
					href={href}
					target="_blank"
					rel="noreferrer noopener"
				>
					{children}
				</a>
			);
		},
	},
	types: {
		code_input: ({ value }) => {
			const { language, code } = value;
			return <CodeInput language={language} code={code} />;
		},
		code_input_to_page: ({ value }) => {
			const { code } = value;
			const newCode = parse(code);
			return <div className="mt-5">{newCode}</div>;
		},
		one_image: ({ value }) => {
			const { asset, alt, caption } = value;
			return (
				<div className="post_img my-5">
					<Image
						className="img"
						src={urlFor(asset._ref).url()}
						alt={alt}
						width={200}
						height={200}
					/>
				</div>
			);
		},
		one_image_vertical: ({ value }) => {
			const { asset, alt, caption } = value;
			return (
				<div className="post_img  post_img--vertical">
					<Image
						className="img"
						src={urlFor(asset._ref).url()}
						alt={alt}
						width={200}
						height={200}
					/>
				</div>
			);
		},
		youtubeVideo: ({ node }) => {
			const { url } = node;
			const { id } = getVideoId(url);
			return (
				<div className="youtube_video_container">
					<LiteYouTubeEmbed title={id} id={id} />
				</div>
			);
		},
		vimeoVideo: ({ value }) => {
			const { url } = value;
			const { id } = getVideoId(url);
			return <Vimeo className="post__video" video={id}></Vimeo>;
		},
		table: ({ value }) => {
			const { rows } = value;
			return (
				<table className="table table-auto mt-2">
					<thead>
						<tr>
							{rows[0].cells.map((item, i) => (
								<th
									key={i + "th"}
									className="border border-solid border-slate-400 p-2"
								>
									{item}
								</th>
							))}
						</tr>
					</thead>

					<tbody>
						{rows.map((item, i) => {
							if (i !== 0) {
								return (
									<tr key={item._key}>
										{item.cells.map((item, i) => (
											<td
												key={i + "tr"}
												className="border border-solid border-slate-400 p-2"
											>
												{item}
											</td>
										))}
									</tr>
								);
							}
						})}
					</tbody>
				</table>
			);
		},
	},
};

const useFormattedDate = (date) => {
	const [formattedDate, setFormattedDate] = useState(null);

	useEffect(() => setFormattedDate(getDateString(date)), []);

	return formattedDate;
};

const Post = ({ pageData, categories, allPosts }) => {
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
	}, [categories]);

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
				(n) => n.slug.current !== pageData.slug.current
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
		<>
			<Head>
				<title>{pageData?.title}</title>
				<meta name="keywords" content={pageData?.tags} />

				<meta
					name="description"
					content={pageData?.shortDescription}
					key="ogdesc"
				/>
			</Head>
			<MainLayout categories={categories}>
				<div className="container container--center main_container">
					<Breadcrumbs
						pathArr={[
							{ name: "Посты", url: "/posts" },
							{ name: pageData?.title },
						]}
					/>
					<div className="mt-16  flex page_container">
						<div className="post main  main--not_main">
							<h1>{pageData?.title}</h1>
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
								{useFormattedDate(pageData?.releaseDate)}
							</p>
							<PortableText
								value={pageData?.content}
								components={components}
							/>

							

							<div className="other_posts">
								<h2>Другие посты</h2>
								<Cards data={lastPosts.slice(0, 3)} />
							</div>
							<div className="banner">
								<div id="yandex_rtb_R-A-2501461-11"></div>
								<Script
									id="yandex-ads-11"
									strategy="afterInteractive"
								>
									{`
										window.yaContextCb.push(()=>{
											Ya.Context.AdvManager.render({
												"blockId": "R-A-2501461-11",
												"renderTo": "yandex_rtb_R-A-2501461-11"
											})
										})`}
								</Script>
							</div>
							<div className="banner">
								<div id="yandex_rtb_R-A-2501461-10"></div>
								<Script
									id="yandex-ads-10"
									strategy="afterInteractive"
								>
									{`
										window.yaContextCb.push(()=>{
											Ya.Context.AdvManager.render({
												"blockId": "R-A-2501461-10",
												"renderTo": "yandex_rtb_R-A-2501461-10"
											})
										})`}
								</Script>
							</div>
							<div className="banner">
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
								<>
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

									<div className="banner">
										<div id="yandex_rtb_R-A-2501461-6"></div>
										<Script
											id="yandex-ads-6"
											strategy="afterInteractive"
										>
											{`
										window.yaContextCb.push(()=>{
											Ya.Context.AdvManager.render({
												"blockId": "R-A-2501461-6",
												"renderTo": "yandex_rtb_R-A-2501461-6"
											})
										})`}
										</Script>
									</div>

									<div className="banner">
										<div id="yandex_rtb_R-A-2501461-7"></div>
										<Script
											id="yandex-ads-7"
											strategy="afterInteractive"
										>
											{`
										window.yaContextCb.push(()=>{
											Ya.Context.AdvManager.render({
												"blockId": "R-A-2501461-7",
												"renderTo": "yandex_rtb_R-A-2501461-7"
											})
										})`}
										</Script>
									</div>

									<div className="banner">
										<div id="yandex_rtb_R-A-2501461-8"></div>
										<Script
											id="yandex-ads-8"
											strategy="afterInteractive"
										>
											{`
										window.yaContextCb.push(()=>{
											Ya.Context.AdvManager.render({
												"blockId": "R-A-2501461-8",
												"renderTo": "yandex_rtb_R-A-2501461-8"
											})
										})`}
										</Script>
									</div>

									<div className="banner">
										<div id="yandex_rtb_R-A-2501461-9"></div>
										<Script
											id="yandex-ads-9"
											strategy="afterInteractive"
										>
											{`
										window.yaContextCb.push(()=>{
											Ya.Context.AdvManager.render({
												"blockId": "R-A-2501461-9",
												"renderTo": "yandex_rtb_R-A-2501461-9"
											})
										})`}
										</Script>
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			</MainLayout>
		</>
	);
};

export default Post;
