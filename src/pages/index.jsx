import React, { useEffect } from "react";
import Script from "next/script";
import Link from "next/link";

import sanityClient from "../../public/support-func/sanityClient";
import { sortByDate } from "../../public/support-func/support.js";
import { setCategoriesState } from "../store/slices/categoriesSlice";
import { useDispatch } from "react-redux";
import Head from "next/head";
import dynamic from "next/dynamic";
const Cards = dynamic(() => import("../components/cards"));
import MainLayout from "../layouts/main-layout";

export async function getStaticProps() {
	const pageData = await sanityClient.fetch(
		`*[_type == "posts" && active == true]`
	);
	const categories = await sanityClient.fetch(`*[_type == "categories"]`);

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
	}, [categories, dispatch]);

	const handleResize = () => {
		setInnerWidth(window?.innerWidth);
	};

	return (
		<>
			<Head>
				<title>FrontDevInfo - посты о frontend разработке</title>
				<meta
					name="keywords"
					content="программирование, посты, JavaScrip, frontend, javascrip, frontend разработка, frontend js, frontend 2023, frontend code, frontend обучение, frontend html, web frontend, фронтенд, фронтенд, фронтенд обучение, frontend обучение, бесплатный фронтенд, фронтенд сайт, веб фронтенд, js фронтенд, фронт енд инфо, front-dev-info, front dev info, FrontDevInfo"
				/>

				<meta
					name="description"
					content="Посты о frontend разработке"
					key="ogdesc"
				/>
			</Head>
			<MainLayout categories={categories}>
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

				<div className="aside">
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
			</MainLayout>
		</>
	);
};

export default HomePage;
