import React from "react";
import Image from "next/image";
import { urlFor } from "../../../public/support-func/sanity-support";

type cardsProps = {
	data: any;
	to?: string;
};

const Cards = ({ data, to = "posts" }: cardsProps) => {
	return (
		<>
			{data.length > 0 ? (
				<ul className={`tabs_container grid`}>
					{data?.map((item, i) => {
						return (
							<li
								key={i + "card"}
								className="border-[#dddde1] border border-solid pt-3"
							>
								<a
									className="card flex flex-col justify-between h-full"
									href={
										item.toOtherPage
											? `${item.slug.current}`
											: `/${to}/${item.slug.current}`
									}
								>
									<span className="card_title px-3">
										{" "}
										{item.title}{" "}
									</span>

									<span className="px-3 pb-3">
										{" "}
										{item.shortDescription}{" "}
									</span>

									<span className="w-full ">
										{item.mainImage ? (
											<Image
												className="img"
												src={urlFor(
													item.mainImage.asset
												).url()}
												alt=""
												width={200}
												height={100}
											/>
										) : (
											<span className=" inline-block w-full h-full bg-[#dddde1]"></span>
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
