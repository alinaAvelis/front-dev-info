"use client";
import React, { useEffect } from "react";
import Link from "next/link";

const AllCategories = ({ categories }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className='section tabs mt-16'>
            <h1 className='title'>Все категории</h1>

            <ul className='gap grid'>
                {categories?.map((item, i) => {
                    return (
                        <li key={item._id}>
                            <Link
                                className='link category_link'
                                href={`/categories/${item.slug.current}`}
                            >
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default AllCategories;
