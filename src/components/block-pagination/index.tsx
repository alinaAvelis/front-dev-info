import React, { useState, useEffect, useRef } from "react";

const BlockPagination = ({ pageCount, setPage, currentPage }) => {
	const [numbers, setNumbers] = useState([]);
	const list = useRef();

	const onClickHandle = (num: number) => {
		setPage(num);
	};

	useEffect(() => {
		console.log(list);
		const pages = [];
		for (let i = 1; i <= pageCount; i++) {
			pages.push(i);
		}

		setNumbers(pages);
	}, []);

	return (
		<ul ref={list} className="pagination list-types-none">
			{numbers.map((item: number, i: number) => (
				<li key={i + "p"} onClick={() => onClickHandle(i)}>
					{item}
				</li>
			))}
		</ul>
	);
};

export default BlockPagination;
