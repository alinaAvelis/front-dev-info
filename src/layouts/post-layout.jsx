"use client";
import React, { useMemo, useEffect } from "react";
import ToTopButton from "@/shared/ui/to-top-button/ToTopButton.jsx";
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
import useDictionary from "@/shared/i18n/use-dictionary";
import { usePreloadedPostsSelector } from "@/lib/features/posts/hooks/use-posts-selector";
const Breadcrumbs = dynamic(() => import("@/shared/ui/breadcrumbs"));
const Cards = dynamic(() => import("@/components/cards/Cards"));

const PostLayout = ({ currentPostSlug, pathArr, children }) => {
	const general = useDictionary("general");

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const allPosts = usePreloadedPostsSelector();
	const lastPosts = useMemo(() => {
		if (allPosts?.length && currentPostSlug) {
			const newArr = allPosts.filter(
				(n) => n.slug.current !== currentPostSlug,
			);
			return sortByDate(newArr).slice(0, 3);
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
							<h2>{general?.otherPosts}</h2>
							<Cards
								data={lastPosts}
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
