"use client";
import React from "react";
import CategoryLink from "@/components/category-link"
import Link from "next/link";



const Cards = ({ data, to = "posts", withImage = false, withCategory = true, categories }) => {
	return (
		<>
			{data?.length > 0 ? (
				<ul className={`tabs_container grid`}>
					{data?.map((item, i) => {
						return (
							<li
								key={i + "card"}
								className="border border-solid border-[#dddde1] p-3 flex flex-col gap-3 "
							>
								<Link
									className="card flex! h-full flex-col justify-between link"
									href={
										item.toOtherPage
											? `${item.slug.current}`
											: `/${to}/${item.slug.current}`
									}
								>
									<span className="flex flex-col gap-3 md:gap-5">
										<span className="card_title bold bold text-xl md:text-2xl font-bold leading-none">
											{item.title}
										</span>

										<span>{item.shortDescription}</span>
									</span>

									{/* {withImage && <span className='w-full '>
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
                                    </span>} */}
								</Link>

                                {withCategory && <CategoryLink card={item} categories={categories} />}
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
