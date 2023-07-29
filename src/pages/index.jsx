import React, { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import sanityClient from "../../public/support-func/sanityClient";
import { sortByDate } from "../../public/support-func/support.js";
import Cards from "../components/cards";
import { setCategoriesState } from "../store/slices/categoriesSlice";
import { useDispatch } from "react-redux";

export async function getStaticProps() {
	const pageData = await sanityClient.fetch(`*[_type == "posts"]`);
	const categories = await sanityClient.fetch(
		`*[_type == "categories" && activeCategory == true]`
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
	}, [categories]);

	return (
		<>
			<Head>
				<title>FrontDevInfo - посты о frontend разработке</title>
				<meta
					name="keywords"
					content="программирование, посты, JavaScrip, frontend"
				/>
				<meta
					name="description"
					content="Посты о frontend разработке"
					key="ogdesc"
				/>
			</Head>
			<section className="section tabs container  container--center">
				<h2 className="visually-hidden">Карточки</h2>
				<div className="tabs_btns flex ">
					<Cards data={sortByDate(pageData).slice(0, 9)} />
				</div>
				{pageData.length > 9 && (
					<Link
						href="/posts"
						className="button button--fill button--center"
					>
						Все посты
					</Link>
				)}
			</section>
		</>
	);
};

export default HomePage;
