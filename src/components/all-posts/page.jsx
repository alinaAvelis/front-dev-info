"use client";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
// import { sortByDate } from "@/utils/utils";
import { useAppSelector } from "@/lib/hooks";
import DesctopAdds from "@/components/adds/desktop-adds/page";
import BottomAdds from "@/components/adds/bottom-adds/page";
import dynamic from "next/dynamic";
import List from "@/components/list/List";

const Cards = dynamic(() => import("@/components/cards/Cards"));

const AllPosts = ({ pageData, title, homePage = false }) => {
    const [filtredPosts, setFiltredPosts] = useState([]);
    const [sliceValue, setSliceValue] = useState(9);
    const [view, setView] = useState('cards');
    const searchValue = useAppSelector((state) => state.searchReducer.value);

    useEffect(() => {
        if (searchValue && !homePage) {
            setFiltredPosts(
                pageData.filter((item) =>
                    item.title.toLowerCase().includes(searchValue.toLowerCase())
                )
            );
        } else {
            setFiltredPosts(pageData);
        }
    }, [homePage, pageData, searchValue]);

    // useEffect(() => {
    //     setFiltredPosts(pageData);
    // }, [homePage, pageData]);

    const transformedData = useMemo(() => {
        return filtredPosts.slice(0, sliceValue)
    }, [filtredPosts, sliceValue])

    return (
        <div className={`page_container mt-16 flex`}>
            <div>
                <div className='flex gap-2'>
                    <button type='button' onClick={() => setView('cards')} title="карточки" className="hover:opacity-80">
                        <span className='grid grid-cols-3 gap-[2px]  h-5 w-5'>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                                <span
                                    key={i}
                                    className='block h-full w-full bg-gray-900'
                                />
                            ))}
                        </span>
                    </button>
                    <button type='button ' onClick={() => setView('list')} title="список" className="hover:opacity-80">
                        <span className='flex flex-col justify-between h-5 w-5'>
                            {[1, 2, 3].map((i) => (
                                <span key={i} className="flex gap-[2px]">
                                    <span
                                        className='block h-[4.5px] w-[4.5px]  bg-gray-900'
                                    />
                                    <span
                                        className='block h-[4.5px] w-full bg-gray-900'
                                    />
                                </span>
                            ))}
                        </span>
                    </button>
                </div>
                <section className='section tabs mt-16'>
                    {homePage ? (
                        <h2 className='visually-hidden'>{title}</h2>
                    ) : (
                        <h1 className='title'>{title}</h1>
                    )}

                    <div className='tabs_btns flex '>
                       {view === `cards` ? <Cards
                            data={transformedData}
                        /> : <List  data={transformedData}/>} 
                    </div>
                    {filtredPosts.length > sliceValue && !homePage && (
                        <button
                            className='button button--fill button--center'
                            onClick={() => {
                                setSliceValue(sliceValue + 9);
                            }}
                        >
                            Еще посты
                        </button>
                    )}
                    {homePage && filtredPosts.length > 9 && (
                        <Link
                            href='/posts'
                            className='button button--fill button--center'
                        >
                            На страницу постов
                        </Link>
                    )}

                    <BottomAdds />
                </section>
            </div>

            <div className='aside aside--small'>
                <DesctopAdds />
            </div>
        </div>
    );
};

export default AllPosts;
