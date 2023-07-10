import React, { useEffect, useRef } from "react";
import Card from "../../components/card";
import Script from "next/script";
import Link from "next/link";
// import { useData } from '../../hooks/useData';
import CloseBtn from "../../components/close_btn";
import sanityClient from "../../../public/support-func/sanityClient";
import { sortByDate } from "../../../public/support-func/support.js";
// сделать загрузку категорий при скролле
// import { createObserve } from '../services/animaion';
// import 'animate.css';
import Breadcrumbs from "../../components/breadcrumbs";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { setCategoriesState } from "../../store/slices/categoriesSlice";

export async function getStaticProps() {
	const categories = await sanityClient.fetch(`*[_type == "categories" && activeCategory == true]`);

	return {
		props: {
			categories,
		},
		revalidate: 300,
	};
}

const CategoriesPage = ({ categories }) => {
	// const {getCategories, peronalsArray} = useData();
	const list = useRef<HTMLInputElement>(null);

	const dispatch = useDispatch();

	useEffect(() => {
		if (categories) {
			dispatch(setCategoriesState(categories));
		}
	}, [categories]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Head>
				<title>FrontDevInfo - все категории</title>
				<meta name="keywords" content="программирование, посты, JavaScrip, frontend" /> 
				<meta name="description" content="Посты о frontend разработке" key="ogdesc"/>
			</Head>
		
			<div className="container  container--center">
				<Breadcrumbs
					pathArr={[{ name: "Категории", url: "/categories" }]}
				/>
				<section className="section tabs mt-50">
					<h1 className="title">Все категории</h1>

					<div className="grid gap">
						{categories?.map((item: any, i: number) => {
							return (
								<Link
									key={item._id}
									className="link"
									href={`/categories/${item.slug.current}`}
								>
									{item.title}
								</Link>
							);
						})}
					</div>
				</section>
			</div>

			<div id="yandex_rtb_R-A-2501461-2"></div>
			<Script id="yandex-ads-2">
				{`
					window.yaContextCb.push(()=>{
						Ya.Context.AdvManager.render({
							"blockId": "R-A-2501461-2",
							"renderTo": "yandex_rtb_R-A-2501461-2"
						})
					})
				`}
			</Script>
		</>
	);
};

export default CategoriesPage;
