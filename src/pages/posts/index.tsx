import React, { useEffect, useState } from "react";
import Script from "next/script";
import Head from "next/head";
import sanityClient from "../../../public/support-func/sanityClient";
import { sortByDate } from "../../../public/support-func/support.js";
import { selectSearchState } from "../../store/slices/searchSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCategoriesState } from "../../store/slices/categoriesSlice";
import MainLayout from "../../layouts/main-layout";

import dynamic from "next/dynamic";
const Breadcrumbs = dynamic(() => import("../../components/breadcrumbs"));
const Cards = dynamic(() => import("../../components/cards"));

export async function getStaticProps() {
	const pageData = await sanityClient.fetch(
		`*[_type == "posts" && active == true]`
	);
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

const AllStories = ({ pageData, categories }) => {
	const [filtredPosts, setFiltredPosts] = useState([]);
	const [sliceValue, setSliceValue] = useState(9);
	const searchState = useSelector(selectSearchState);
	const dispatch = useDispatch();
	const [innerWidth, setInnerWidth] = useState(0);

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.scrollTo(0, 0);

			window.addEventListener("resize", handleResize);
			handleResize();
			return () => window.removeEventListener("resize", handleResize);
		}
	}, []);

	useEffect(() => {
		if (categories) {
			dispatch(setCategoriesState(categories));
		}
	}, [categories]);

	useEffect(() => {
		if (searchState) {
			setFiltredPosts(
				pageData.filter((item) =>
					item.title.toLowerCase().includes(searchState.toLowerCase())
				)
			);
		} else {
			setFiltredPosts(pageData);
		}
	}, [pageData, searchState]);

	const handleResize = () => {
		setInnerWidth(window?.innerWidth);
	};

	return (
		<>
			<Head>
				<title>FrontDevInfo - все посты</title>
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
			<MainLayout categories={categories}>
				<div className="container">
					<Breadcrumbs pathArr={[{ name: "Посты", url: "/posts" }]} />

					<div className="flex page_container mt-16">
						<section className="section tabs container  container--center main_container">
							<h1 className="title">Все посты</h1>

							<div className="tabs_btns flex ">
								<Cards
									data={sortByDate(filtredPosts).slice(
										0,
										sliceValue
									)}
								/>
							</div>
							{filtredPosts.length > sliceValue && (
								<button
									className="button button--fill button--center mb-5"
									onClick={() => {
										setSliceValue(sliceValue + 9);
									}}
								>
									Еще посты
								</button>
							)}
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
						</section>

						<div className="aside aside--small">
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

export default AllStories;
