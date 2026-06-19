"use client";
import React, { useMemo, useEffect } from "react";
import ToTopButton from "@/components/to-top-button/ToTopButton.jsx";
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
import PostMenu from "@/components/post/menu";
import { sortByDate } from "@/utils/utils";
import dynamic from "next/dynamic";
const Breadcrumbs = dynamic(() => import("@/components/breadcrumbs"));
const Cards = dynamic(() => import("@/components/cards/Cards"));

const PostLayout = ({ currentPostSlug, pathArr, allPosts, children }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const lastPosts = useMemo(() => {
	
		if (allPosts?.length && currentPostSlug) {
			const newArr = allPosts.filter(
				(n) => n.slug.current !== currentPostSlug,
			);
			return sortByDate(newArr);
		} else {
			return [];
		}
	}, [allPosts, currentPostSlug]);

	return (
		<div className="main_container relative px-5 md:px-10 mt-40 md:mt-30 max-w-screen-xl mx-auto">
			<Breadcrumbs pathArr={pathArr} />
			<div className="page_container flex">
				<div className="post main  main--not_main order-2 lg:order-1">
					{children}

					{lastPosts.length > 0 && (
						<div className="other_posts">
							<h2>Другие посты</h2>
							<Cards
								data={lastPosts.slice(0, 3)}
								withImage={false}
								withCategory={false}
							/>
						</div>
					)}
				</div>

				<div className="aside order-1 lg:order-2">
					<PostMenu />
				</div>
			</div>

			<ToTopButton />
		</div>
	);
};

export default PostLayout;
