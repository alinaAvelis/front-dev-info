import React from "react";

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
							<li key={i + "card"}>
								<a
									className="card"
									href={`/${to}/${item.slug.current}`}
								>
									<span className="card_title">
										{" "}
										{item.title}{" "}
									</span>

									<span> {item.shortDescription} </span>
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
