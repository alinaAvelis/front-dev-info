import React, { useEffect, useState } from "react";
import {
	VKShareButton,
	VKIcon,
	EmailShareButton,
	EmailIcon,
	WhatsappShareButton,
	WhatsappIcon,
	TelegramShareButton,
	TelegramIcon,
} from "next-share";
import { getDateString } from "../../services/support";
import Breadcrumbs from "../../components/breadcrumbs";
import sanityClient from "../../../public/support-func/sanityClient";
import Head from "next/head";

import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "../../../public/support-func/sanity-support";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import Vimeo from "@u-wave/react-vimeo";
import getVideoId from "get-video-id";
import { groq } from "next-sanity";
import { useDispatch } from "react-redux";
import {  setCategoriesState } from "../../store/slices/categoriesSlice";

// сделать отдельно хук суппорт где будет обрезаться location

export async function getStaticProps({ params }) {
	const postQuery = groq`*[_type == "posts" && active == true && slug.current == $slug][0]`;
	const pageData = await sanityClient.fetch(postQuery, { slug: params.slug });
	const categories = await sanityClient.fetch(`*[_type == "categories"]`);
	return {
		props: {
			pageData: pageData,
			categories
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
	marks: {
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

			return (
				<div className="code_block">
					<p className="code_block__lang">{language ? language : 'JavaScript'}</p>

					<pre>
						<code>{code}</code>
					</pre>
				</div>
			);
		},
		one_image: ({ value }) => {
			const { asset, alt, caption } = value;
			return (
				<div className="post_img">
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
	},
};

const Post = ({ pageData, categories }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		window.scrollTo(0, 0);
		setMenu();
	}, []);

	const setMenu = () => {
		try {
			const headings = document.querySelectorAll(".heading");

			const menuList = document.querySelector(".menu_container .menu");

			const createMenuItems = (elements) => {
				elements.forEach((el, i) => {
					const tag = el?.nodeName;
					const text = el?.innerText;
					const linkName = tag + i;
					const menuLink = document.createElement("a");
					// const titleLink = document.createElement("a");
					menuLink.innerText = text;
					menuLink.setAttribute("href", `#${linkName}`);
					menuLink.classList.add("menu__item");
					menuList?.append(menuLink);

					el.setAttribute("id", `${linkName}`);
					switch (tag) {
						case "H1":
							menuLink.classList.add("first_level");
							break;
						case "H2":
							menuLink.classList.add("second_level");
							break;
						case "H3":
							menuLink.classList.add("three_level");
							break;
						case "H4":
							menuLink.classList.add("four_level");
							break;
						case "H5":
							menuLink.classList.add("five_level");
							break;
						case "H6":
							menuLink.classList.add("six_level");
							break;
						default:
							break;
					}
				});
			};

			createMenuItems(headings);
		} catch (e) {
			// console.log(e);
		}
	};

	useEffect(() => {
		if(categories) {
		  dispatch( setCategoriesState(categories));
		}
	  }, [categories])

	return (
		<div className="container container--center">
			<Head>
				<title>{pageData?.title}</title>
				<meta name="keywords" content={pageData?.tags} /> 
				<meta name="description" content={pageData?.shortDescription} key="ogdesc"/>
			</Head>
			<Breadcrumbs
				pathArr={[
					{ name: "Посты", url: "/posts" },
					{ name: pageData?.title },
				]}
			/>
			<div className=" mt-50  flex page_container">
				<div className="post main  main--not_main">
					<h1>{pageData?.title}</h1>

					<article className="menu_container">
						<h2>Содержание</h2>
						<div className="menu"></div>
					</article>

					<PortableText
						value={pageData?.content}
						components={components}
					/>
					<p className="post_date">
						{getDateString(pageData?.releaseDate)}
					</p>
				</div>

				{/* Aside */}
				<aside className="aside"></aside>
			</div>
		</div>
	);
};

export default Post;
