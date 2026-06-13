"use client";
import { useEffect } from "react";
import { useCategorySelector } from "@/lib/features/categories/hooks/use-category-selector";
import Link from "next/link";

const AllCategories = () => {
	const categories = useCategorySelector();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<section className="section tabs mt-5 md:mt-10">
			<h1 className="title">Все категории</h1>

			<ul className="gap-3 grid">
				{categories?.map((item, i) => {
					return (
						<li key={item._id}>
							<Link
								className="link category_link"
								href={`/categories/${item.slug.current}`}
							>
								{item.title}
							</Link>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default AllCategories;
