import React, { useEffect } from "react";
import Link from "next/link";

import sanityClient from "../../public/support-func/sanityClient";
import { sortByDate } from "../../public/support-func/support.js";
import { setCategoriesState } from "../store/slices/categoriesSlice";
import { useDispatch } from "react-redux";

import dynamic from "next/dynamic";
const Cards = dynamic(() => import("../components/cards"));
import MainLayout from "../layouts/main-layout";

export async function getStaticProps() {
	const pageData = await sanityClient.fetch(`*[_type == "posts" && active == true]`);
	const categories = await sanityClient.fetch(
		`*[_type == "categories"]`
	);

	return {
		props: {
			pageData,
			categories,
		},
		revalidate: 300,
	};
}

const HomePage = ({ pageData, categories }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		if (categories) {
			dispatch(setCategoriesState(categories));
		}
	}, [categories, dispatch]);

	return (
		<MainLayout
			categories={categories}
			headTitle="FrontDevInfo - посты о frontend разработке"
			headKeywords="программирование, посты, JavaScrip, frontend, javascrip, frontend разработка, frontend js, frontend 2023, frontend code, frontend обучение, frontend html, web frontend, фронтенд, фронтенд, фронтенд обучение, frontend обучение, бесплатный фронтенд, фронтенд сайт, веб фронтенд, js фронтенд, фронт енд инфо, front-dev-info, front dev info, FrontDevInfo"
			headDescription="Посты о frontend разработке"
		>
			<section className="section tabs container  container--center main_container">
				<h2 className="visually-hidden">Карточки</h2>
				<div className="tabs_btns flex ">
					<Cards data={sortByDate(pageData).slice(0, 9)} />
				</div>
				{pageData.length > 9 && (
					<Link
						href="/posts"
						className="button button--fill button--center"
					>
						На страницу постов
					</Link>
				)}
			</section>
		</MainLayout>
	);
};

export default HomePage;
