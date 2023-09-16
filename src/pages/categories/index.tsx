import React, { useEffect } from "react";
import Link from "next/link";
import sanityClient from "../../../public/support-func/sanityClient";
import { useDispatch } from "react-redux";
import { setCategoriesState } from "../../store/slices/categoriesSlice";
import dynamic from "next/dynamic";
const Breadcrumbs = dynamic(() => import("../../components/breadcrumbs"));
import MainLayout from "../../layouts/main-layout";

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
		<MainLayout
			categories={categories}
			headTitle="FrontDevInfo - все категории"
			headKeywords="программирование, посты, JavaScrip, frontend"
			headDescription="Посты о frontend разработке"
		>
			<div className="container  container--center main_container">
				<Breadcrumbs
					pathArr={[{ name: "Категории", url: "/categories" }]}
				/>
				<section className="section tabs mt-16">
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
		</MainLayout>
	);
};

export default CategoriesPage;
