"use client";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
// import { sortByDate } from "@/utils/utils";
import { useAppSelector } from "@/lib/hooks";
import BottomAdds from "@/components/adds/bottom-adds/page";
import dynamic from "next/dynamic";
import List from "@/components/list/List";
import useInnerWidth from "@/hooks/use-inner-width/page";

const Cards = dynamic(() => import("@/components/cards/Cards"));

const AllPosts = ({ pageData, title, homePage = false }) => {
	const [filtredPosts, setFiltredPosts] = useState([]);
	const [sliceValue, setSliceValue] = useState(9);
	const [itemsOnPage, setItemsOnPage] = useState(9);
	const [view, setView] = useState("cards");
	const searchValue = useAppSelector((state) => state.searchReducer.value);
	const { innerWidth } = useInnerWidth();

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

	useEffect(() => {
		if (innerWidth > 758) {
			setSliceValue(9);
			setItemsOnPage(9);
		} else {
			setSliceValue(3);
			setItemsOnPage(3);
		}
	}, [innerWidth]);

	const transformedData = useMemo(() => {
		return filtredPosts.slice(0, sliceValue);
	}, [filtredPosts, sliceValue]);

	return (
		<div className="mt-10">
			<div className="w-full">
				<div className="flex gap-2">
					<button
						type="button"
						onClick={() => setView("cards")}
						title="карточки"
						className="hover:opacity-80 cursor-pointer"
					>
						<svg
							className="fill-gray-600 w-auto h-6 pointer-events-none"
							viewBox="0 0 1920 1920"
						>
							<path
								d="M1800 1320v420c0 33-27 60-60 60h-420v-480h480Zm-600 0v480H720v-480h480Zm-600 0v480H180c-33 0-60-27-60-60v-420h480Zm1200-600v480h-480V720h480Zm-600 0v480H720V720h480Zm-600 0v480H120V720h480Zm1140-600c33 0 60 27 60 60v420h-480V120h420Zm-540 0v480H720V120h480Zm-600 0v480H120V180c0-33 27-60 60-60h420ZM1740 0H180C80.76 0 0 80.76 0 180v1560c0 99.24 80.76 180 180 180h1560c99.24 0 180-80.76 180-180V180c0-99.24-80.76-180-180-180Z"
								fillRule="evenodd"
							/>
						</svg>
					</button>
					<button
						type="button "
						onClick={() => setView("list")}
						title="список"
						className="hover:opacity-80 cursor-pointer"
					>
						<svg
							viewBox="0 0 24 24"
							fill="none"
                            className="w-auto h-8 pointer-events-none"
						>
							<path
								d="M8 6L21 6.00078M8 12L21 12.0008M8 18L21 18.0007M3 6.5H4V5.5H3V6.5ZM3 12.5H4V11.5H3V12.5ZM3 18.5H4V17.5H3V18.5Z"
								className="stroke-gray-600"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				</div>
				<section className="section tabs mt-5 md:mt-10">
					{homePage ? (
						<h2 className="visually-hidden">{title}</h2>
					) : (
						<h1 className="title">{title}</h1>
					)}

					<div className="tabs_btns flex ">
						{view === `cards` ? (
							<Cards data={transformedData} />
						) : (
							<List data={transformedData} />
						)}
					</div>
					{filtredPosts.length > sliceValue && !homePage && (
						<button
							className="button button--fill button--center"
							onClick={() => {
								setSliceValue(sliceValue + itemsOnPage);
							}}
						>
							Еще посты
						</button>
					)}
					{homePage && filtredPosts.length > itemsOnPage && (
						<Link
							href="/posts"
							className="button button--fill button--center"
						>
							<span>На страницу постов</span>
						</Link>
					)}

					<BottomAdds />
				</section>
			</div>

			{/* <div className='aside aside--small'>
                <DesctopAdds />
            </div> */}
		</div>
	);
};

export default AllPosts;
