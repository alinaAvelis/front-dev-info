import React, { useEffect, useRef } from "react";
import Link from "next/link";
import sanityClient from "../../../public/support-func/sanityClient";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { setCategoriesState } from "../../store/slices/categoriesSlice";
import dynamic from 'next/dynamic';
const Breadcrumbs = dynamic(() => import("../../components/breadcrumbs"));

export async function getStaticProps() {
	const categories = await sanityClient.fetch(
		`*[_type == "categories" && activeCategory == true]`
	);
	return {
		props: {
			categories,
		},
		revalidate: 300,
	};
}

const CategoriesPage = ({ categories }) => {
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

			<div className="container  container--center main_container">
				<Breadcrumbs
					pathArr={[{ name: "Категории", url: "/categories" }]}
				/>
				<section className="section tabs mt-50">
					<h1 className="title">Все категории</h1>

					<ul className="grid gap">
						{categories?.map((item: any, i: number) => {
							return (
								<li key={item._id}>
									<Link
										className="link category_link"
										href={`/categories/${item.slug.current}`}
									>
										{item.title}
									</Link>
								</li>
							);
						})}
					</ul>
				</section>
			</div>
		</>
	);
};

export default CategoriesPage;
