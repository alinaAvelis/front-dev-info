import React, { useEffect, useState } from "react";
import Head from "next/head";
import sanityClient from "../../../public/support-func/sanityClient";
// import { sortByDate } from '../../../public/support-func/support.js';
import { groq } from "next-sanity";
import Script from "next/script";
import dynamic from "next/dynamic";
const Breadcrumbs = dynamic(() => import("../../components/breadcrumbs"));
const Cards = dynamic(() => import("../../components/cards"));
import MainLayout from "../../layouts/main-layout";

export async function getStaticProps({ params }) {
	const categoryQuery = groq`*[_type == "categories" && activeCategory == true && slug.current == $slug][0]`;
	const pageData = await sanityClient.fetch(
		`*[_type == "posts" && active == true]`
	);
	const category = await sanityClient.fetch(categoryQuery, {
		slug: params.slug,
	});
	const categories = await sanityClient.fetch(
		`*[_type == "categories" && activeCategory == true]`
	);

	return {
		props: {
			pageData,
			category,
			categories,
		},
		revalidate: 300,
	};
}

export const getStaticPaths = async () => {
	const categories = await sanityClient.fetch(
		`*[_type == "categories" && activeCategory == true] { slug }`
	);
	const paths = categories.map((category: any) => ({
		params: {
			slug: category.slug.current,
		},
	}));

	return {
		paths,
		fallback: true,
	};
};

const Category = ({ pageData, category, categories }) => {
	const [innerWidth, setInnerWidth] = useState(0);

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.scrollTo(0, 0);

			window.addEventListener("resize", handleResize);
			handleResize();
			return () => window.removeEventListener("resize", handleResize);
		}
	}, []);

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
				<div className="container">
					<Breadcrumbs
						pathArr={[
							{ name: "Категории", url: "/categories" },
							{ name: category?.title },
						]}
					/>
					<div className="mt-16  flex page_container">
						<section className="section tabs container--center main_container">
							<h1 className="title">{category?.title}</h1>
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
							<div className="tabs_btns flex ">
								<Cards
									data={pageData?.filter(
										(point: any) =>
											point?.category?._ref ===
											category?._id
									)}
									to="posts"
								/>
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

export default Category;
