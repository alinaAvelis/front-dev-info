import React, { useEffect, useState } from "react";
// import { useData } from '../../hooks/useData';
import Cards from "../../components/cards";
import Breadcrumbs from "../../components/breadcrumbs";
import Script from "next/script";
// import Fuse from 'fuse.js';
import sanityClient from "../../../public/support-func/sanityClient";
import Head from "next/head";
// import { sortByDate } from "../../../public/support-func/support.js";
import { selectSearchState } from "../../store/slices/searchSlice";
import { useSelector } from "react-redux";
// import BlockPagination from '../../components/block-pagination';
import { useDispatch } from "react-redux";
import { setCategoriesState } from "../../store/slices/categoriesSlice";
// сделать подгрузку при скролле

export async function getStaticProps() {
	// const pageMeta = await sanityClient.fetch(`*[_type == "metadata" && title == "/"] `);
	const pageData = await sanityClient.fetch(`*[_type == "posts"]`);
	const categories = await sanityClient.fetch(`*[_type == "categories"]`);
	// const postQuery = groq`*[_type == "stories" && active == true && isPremier == true][0]`;
	console.log(pageData);
	return {
		props: {
			// pageMeta: pageMeta[0],
			pageData,
			categories,
		},
		revalidate: 300,
	};
}

// const fuseOptions = {F
// 	includeScore: true,
// 	keys: ['title', 'shortDescription', 'tags']
//   }

const AllStories = ({ pageData, categories }) => {
	const [filtredPosts, setFiltredPosts] = useState([]);
	const [filterString, setFilterString] = useState("");
	const searchState = useSelector(selectSearchState);
	const dispatch = useDispatch();

	useEffect(() => {
		if (categories) {
			dispatch(setCategoriesState(categories));
		}
	}, [categories]);

	// useEffect(() => {
	// 	if(searchState) {
	// 		setFiltredPosts(pageData.filter(item => item.title.toLowerCase().includes(searchState.toLowerCase())))
	// 	} else {
	// 		setFiltredPosts(pageData)
	// 	}
	// }, [searchState]);

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
						<Cards data={filtredPosts.slice(0, 6)} />
						<div className="banner">
							<div id="yandex_rtb_R-A-2501461-1"></div>
							<Script id="yandex-ads" strategy="afterInteractive">
									{`
							window.yaContextCb.push(()=>{
								Ya.Context.AdvManager.renderFeed({
									"blockId": "R-A-2501461-1",
									"renderTo": "yandex_rtb_R-A-2501461-1"
								})
							})
							`}
							</Script>
						</div>
						<Cards data={filtredPosts.slice(6, 12)} />
					</div>
				</section>
			</div>
		</>
	);
};

export default AllStories;
