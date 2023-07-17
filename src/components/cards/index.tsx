import React from "react";

type cardsProps = {
	data: any;
	to?: string;
};

const Cards = ({ data, to = "posts" }: cardsProps) => {
	return (
		<ul className={`tabs_container grid`}>
			{data?.map((item, i) => {
				return (
					<li key={i + "card"}>
						<a
							className="card"
							href={`/${to}/${item.slug.current}`}
						>
							<span> {item.title} </span>

							<span> {item.shortDescription} </span>
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export default Cards;
