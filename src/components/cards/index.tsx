import React from "react";

type cardsProps = {
	data: any;
};

const Cards = ({ data }: cardsProps) => {
	return (
		<ul className={`tabs_container grid`}>
			{data?.map((item, i) => {
				return (
					<li key={i + "card"}>
						<a className="card" href={`/posts/${item.slug.current}`}>
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
