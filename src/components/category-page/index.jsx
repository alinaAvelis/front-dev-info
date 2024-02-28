"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
const Breadcrumbs = dynamic(() =>
    import("@/components/breadcrumbs/Breadcrumbs")
);
const Cards = dynamic(() => import("@/components/cards/Cards")); 
import DesctopAdds from "@/components/adds/desktop-adds/page";
import BottomAdds from "@/components/adds/bottom-adds/page";
import List from "@/components/list/List";

const CategoryPage = ({ allPosts, category }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='container--center  main_container container'>
            <Breadcrumbs
                pathArr={[
                    { name: "Категории", url: "/categories" },
                    { name: category?.title },
                ]}
            />

            <div className='page_container  mt-16 flex'>
                <section className='section tabs mt-16'>
                    <h1 className='title'>{category?.title}</h1>

                    <div className='tabs_btns flex '>
                        <Cards
                            data={allPosts?.filter(
                                (point) =>
                                    point?.category?._ref === category?._id
                            )}
                            to='posts'
                        />
                    </div>

                    <BottomAdds />
                </section>

                <div className='aside aside--small'>
                    <DesctopAdds />
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
