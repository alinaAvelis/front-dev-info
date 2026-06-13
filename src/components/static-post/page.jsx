"use client";

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
import { getDateString } from "@/utils/utils";
import { sortByDate } from "@/utils/utils";
import dynamic from "next/dynamic";
import { useMemo } from "react";
const Cards = dynamic(() => import("@/components/cards/Cards"));

const StaticPost = ({ allPosts, createDate, title, children }) => {

	const lastPosts = useMemo(() => {
		if (allPosts?.length) {
			const newArr = allPosts.filter(
				(n) => n.slug.current !== `algorithm-execution-speed`,
			);
			return sortByDate(newArr);
		}

		return [];
	}, [allPosts]);

	return (
		<div className="page_container  mt-8! md:mt-16! flex">
			<div className="post main  main--not_main">
				<h1>{title}</h1>

				<p className="post_date">{getDateString(createDate)}</p>
				{children}

				<div className="other_posts">
					<h2>Другие посты</h2>
					<Cards data={lastPosts.slice(0, 3)} withCategory={false} />
				</div>
			</div>

			<div className="aside">
				<PostMenu />
			</div>
		</div>
	);
};

export default StaticPost;
