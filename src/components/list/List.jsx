import React, { useMemo } from "react";

const List = ({ data, to = "posts" }) => {

    return (
        <>
            {data.length > 0 ? (
                <ul className="tabs_container ">
                    {data?.map((item, i) => {
                        return (
                            <li
                                key={i + "card"}
                                className='pt-3'
                            >
                                <a
                                    className='card_title justify-between bold px-3 text-xl md:text-2xl font-bold'
                                    href={
                                        item.toOtherPage
                                            ? `${item.slug.current}`
                                            : `/${to}/${item.slug.current}`
                                    }
                                >
                                    {i + 1 }) {item.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p>Ничего не найдено</p>
            )}
        </>
    );
};

export default List;
