import React, { useEffect, useState } from "react";
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
	const pageData = await sanityClient.fetch(`*[_type == "posts" && active == true]`);
	const categories = await sanityClient.fetch(`*[_type == "categories" && activeCategory == true]`);
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

	return (
		<MainLayout
			categories={categories}
			headTitle="FrontDevInfo - все посты"
			headKeywords="программирование, посты, JavaScrip, frontend"
			headDescription="Посты о frontend разработке"
		>
			<div className="container container--center main_container">
				<Breadcrumbs pathArr={[{ name: "Посты", url: "/posts" }]} />

				<section className="section tabs mt-16">
					<h1 className="title">Все посты</h1>

					<div className="tabs_btns flex ">
						<Cards
							data={sortByDate(filtredPosts).slice(0, sliceValue)}
						/>
					</div>
					{filtredPosts.length > sliceValue && (
						<button
							className="button button--fill button--center"
							onClick={() => {
								setSliceValue(sliceValue + 9);
							}}
						>
							Еще посты
						</button>
					)}
				</section>
			</div>
		</MainLayout>
	);
};

export default AllStories;
