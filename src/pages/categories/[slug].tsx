import React, { useEffect } from "react";
import Head from "next/head";
import sanityClient from "../../../public/support-func/sanityClient";
// import { sortByDate } from '../../../public/support-func/support.js';
import { groq } from "next-sanity";
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
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

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
				<div className="container  container--center main_container">
					<Breadcrumbs
						pathArr={[
							{ name: "Категории", url: "/categories" },
							{ name: category?.title },
						]}
					/>
					<section className="section tabs mt-16">
						<h1 className="title">{category?.title}</h1>

						<div className="tabs_btns flex ">
							<Cards
								data={pageData?.filter(
									(point: any) =>
										point?.category?._ref === category?._id
								)}
								to="posts"
							/>
						</div>
					</section>
				</div>
			</MainLayout>
		</>
	);
};

export default Category;
