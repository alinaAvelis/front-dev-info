import React from "react";
import Image from "next/image";
import { urlFor } from "@/utils/sanity-utils";

const Cards = ({ data, to = "posts" }) => {
    return (
        <>
            {data.length > 0 ? (
                <ul className={`tabs_container grid`}>
                    {data?.map((item, i) => {
                        return (
                            <li
                                key={i + "card"}
                                className='border border-solid border-[#dddde1] pt-3'
                            >
                                <a
                                    className='card flex h-full flex-col justify-between'
                                    href={
                                        item.toOtherPage
                                            ? `${item.slug.current}`
                                            : `/${to}/${item.slug.current}`
                                    }
                                >
                                    <span className="flex flex-col gap-5">
                                        <span className='card_title bold bold px-3 text-2xl font-bold'>
                                            {" "}
                                            {item.title}{" "}
                                        </span>

                                        <span className='px-3 pb-3'>
                                            {" "}
                                            {item.shortDescription}{" "}
                                        </span>
                                    </span>

                                    <span className='w-full '>
                                        {item.mainImage ? (
                                            <Image
                                                className='img'
                                                src={urlFor(
                                                    item.mainImage.asset
                                                ).url()}
                                                alt=''
                                                width={1000}
                                                height={800}
                                            />
                                        ) : (
                                            <span className=' inline-block h-full w-full bg-[#dddde1]'></span>
                                        )}
                                    </span>
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

export default Cards;
