import React from "react";
import Link from "next/link";
import { cutText } from "../../services/support";

type CardProps = {
	title: string;
	text: string;
	linkToStory?: string;
	linkToCategory?: string;
};

const Card = ({ title, text, linkToStory, linkToCategory }: CardProps) => {
	return (
		<div className="card">
			{/* {console.log(text)} */}
			<div>
				<h3 className="card__title">{title}</h3>

				<div>
					{cutText(text, 465)
						.split("\n\n")
						.map((item: any, i: number) => {
							return (
								<p className="text" key={i + "text"}>
									{item}
								</p>
							);
						})}
				</div>
			</div>

			<div className="card__links">
				{linkToStory && (
					<Link href={linkToStory} className="accent_text">
						Читать
					</Link>
				)}

				{linkToCategory && (
					<Link href={linkToCategory}>Перейти в категорию</Link>
				)}
			</div>
		</div>
	);
};

export default Card;
