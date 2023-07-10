import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Card from "../components/card";
import Image from "next/image";
// import { useData } from '../hooks/useData';
import sanityClient from "../../public/support-func/sanityClient";
import { sortByDate } from "../../public/support-func/support.js";
import img from "../../public/image/author_page/main1.png";
import me from "../../public/image/author_page/1.jpg";
import { groq } from "next-sanity";
import Cards from "../components/cards";
import {  setCategoriesState } from "../store/slices/categoriesSlice";
import { useDispatch } from "react-redux";

export async function getStaticProps() {
	// const pageMeta = await sanityClient.fetch(`*[_type == "metadata" && title == "/"] `);
	const pageData = await sanityClient.fetch(`*[_type == "posts"]`);
	const categories = await sanityClient.fetch(
		`*[_type == "categories" && activeCategory == true]`
	);
	// const postQuery = groq`*[_type == "stories" && active == true && isPremier == true][0]`;
	// const premierData = await sanityClient.fetch(postQuery);

	return {
		props: {
			// pageMeta: pageMeta[0],
			pageData,
			// premierTitle: premierData?.title,
			categories,
		},
		revalidate: 300,
	};
}

const HomePage = ({ pageData, categories }) =>
	// {pageMeta, pageData, premierTitle, categories}
	{
		const dispatch = useDispatch();
		useEffect(() => {
			window.scrollTo(0, 0);
		}, []);

		useEffect(() => {
		  if(categories) {
			dispatch( setCategoriesState(categories));
		  }
		}, [categories])

		return (
			<>
				{/* <Head></Head> */}
				<section className="section tabs container  container--center">
					<h2 className="visually-hidden">Карточки</h2>

					<div className="tabs_btns flex ">
						<Cards data={pageData} />
					</div>
				</section>
			</>
		);
	};

export default HomePage;
