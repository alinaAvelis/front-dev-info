import React, { useEffect, useState } from "react";
import Cards from "../../components/cards";
import Breadcrumbs from "../../components/breadcrumbs";
import sanityClient from "../../../public/support-func/sanityClient";
import Head from "next/head";
import { selectSearchState } from "../../store/slices/searchSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCategoriesState } from "../../store/slices/categoriesSlice";

export async function getStaticProps() {
	const pageData = await sanityClient.fetch(`*[_type == "posts"]`);
	const categories = await sanityClient.fetch(`*[_type == "categories"]`);
	console.log(pageData);
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

			<div className="container container--center">
				<Breadcrumbs pathArr={[{ name: "Посты", url: "/posts" }]} />

				<section className="section tabs mt-50">
					<h1 className="title">Все посты</h1>

					<div className="tabs_btns flex ">
						<Cards data={filtredPosts.slice(0, sliceValue)} />
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
		</>
	);
};

export default AllStories;
