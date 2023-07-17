import React, {useEffect, useState} from 'react';
// import { useData } from '../../hooks/useData';
import Cards from "../../components/cards";
import { useRouter } from 'next/router';
import Breadcrumbs from '../../components/breadcrumbs';
import sanityClient from "../../../public/support-func/sanityClient";
import { sortByDate } from '../../../public/support-func/support.js';
import Head from 'next/head';
import {groq} from 'next-sanity';
import Script from "next/script";
// сделать подгрузку при скролле

export async function getStaticProps({ params }) {
	// const pageMeta = await sanityClient.fetch(`*[_type == "metadata" && title == "/"] `);
    ;
    const categoryQuery = groq`*[_type == "categories" && activeCategory == true && slug.current == $slug][0]`;
	const pageData = await sanityClient.fetch(`*[_type == "posts"]`);
    const category = await sanityClient.fetch(categoryQuery, { slug: params.slug });

	// const postQuery = groq`*[_type == "stories" && active == true && isPremier == true][0]`;
	return {
		props: {
			// pageMeta: pageMeta[0],
			pageData,
			category,
		},
		revalidate: 300,
	};
}


export const getStaticPaths = async () => {
    const categories = await sanityClient.fetch(`*[_type == "categories" && activeCategory == true] { slug }`);
    const paths = categories.map((category: any) => ({
        params: {
            slug: category.slug.current
        }
    }));

    return { 
        paths, 
        fallback: true
    };
};

const Category = ({pageData, category}) => {
    const router = useRouter();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return (
        <>
            <Head>
            <title>{ category?.title }</title>
            <meta name="description" content={category?.shortDescription} />
            <meta name="keywords" content={category?.meta_keywords} />
            </Head>
            
            <div className="container  container--center">
                <Breadcrumbs pathArr={[{name: "Категории", url: "/categories",}, {name: category?.title}]} />
				<section className="section tabs mt-50">
					<h1 className="title">{category?.title}</h1>
                    
					<div className="tabs_btns flex ">
                        
						<Cards data={pageData?.filter((point: any) => point?.category?._ref === category?._id)} to="posts" />
					</div>
				</section>
			</div>

        </>
    )
}

export default Category;