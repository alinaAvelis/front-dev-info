"use client";
import React, { useState, useRef, useEffect } from "react";

import Link from "next/link";
// import style from "./index.module.scss";
import { usePathname } from 'next/navigation'
import dynamic from "next/dynamic";
const Modal = dynamic(() => import("../modal/Modal"));
const SearchHomeBlock = dynamic(() => import("../home-search-block/SearchHomeBlock"));
const SearchBlock = dynamic(() => import("../search-block/SearchBlock"));
const CloseBtn = dynamic(() => import("../close_btn/CloseBtn"));

const AppHeader = ({ categories }) => {
	const [openModal, setOpenModal] = useState(false);
	const mobileMenu = useRef(null);
	const [isHomeSearch, setIsHomeSearch] = useState(false);

	const pathname = usePathname()

	useEffect(() => {
		console.log(pathname)
		if (pathname === "/") {
			setIsHomeSearch(true);
		} else {
			setIsHomeSearch(false);
		}
	}, [pathname]);

	const postResoursesPages = pathname.includes(`/posts/`) || pathname === `resourses`

	const handleOpenMenu = () => {
		const menu = mobileMenu.current;
		menu?.classList.add("open");
		const body = document.querySelector("body");
		body.style.overflow = "hidden";
	};

	const onClose = () => {
		const menu = mobileMenu.current;
		menu?.classList.remove("open");
		const body = document.querySelector("body");
		body.style.overflowY = "visible";
	};

	return (
		<>
			<header className={`bg-white  w-full z-10 ${postResoursesPages ? `` : `fixed top-0 right-0`}`}>
				<div className="flex gap-5 sm:items-center justify-between flex-col sm:flex-row py-2 px-5">
					<Link
						className="link text-gray-500 text-sm md:text-lg font-bold"
						href="/"
						onClick={onClose}
					>
						FRONT-DEV-INFO
					</Link>
					<div className="flex gap-5 items-center justify-end">
						<button
							className="button button--no_styles  text-sm md:text-lg"
							type="button"
							data-type="open_donate"
							onClick={handleOpenMenu}
						>
							Категории
						</button>
						<Link
							className="link text-sm md:text-lg font-bold"
							href="/posts"
						>
							Посты
						</Link>
						<Link
							className="link text-sm md:text-lg font-bold"
							href="/resourses"
						>
							Ресурсы
						</Link>
						<button
							className="button button--small  text-sm md:text-lg"
							type="button"
							data-type="open_donate"
							onClick={() => setOpenModal(true)}
						>
							Поддержать
						</button>
						{/* <button
						id="burger"
						className="burger grid md:hidden bg-inherit"
						type="button"
						onClick={handleOpenMenu}
					>
						<p className="w-full h-1 bg-slate-300 rounded-2xl"></p>
						<p className="w-full h-1 bg-slate-300 rounded-2xl"></p>
						<p className="w-full h-1 bg-slate-300 rounded-2xl"></p>
					</button> */}
					</div>
				</div>

				{!isHomeSearch && <SearchBlock />}

				<div ref={mobileMenu} className="nav_container">
					<CloseBtn clickHandler={onClose} />

					<nav className="grid header_nav">
						{categories?.map((item, i) => {
							if (item.activeCategory === true) {
								return (
									<Link
										key={i}
										className="link"
										href={`/categories/${item.slug.current}`}
										onClick={onClose}
									>
										{item.title}
									</Link>
								);
							}
						})}
					</nav>
				</div>
			</header>

			{isHomeSearch && (
				<section className="section">
					<SearchHomeBlock />
				</section>
			)}

			{openModal && (
				<Modal onClose={() => setOpenModal(false)}>
					{/* <p className="subtitle text">Patreon</p>
					<a href="" className="link" target="_blank">
						Ссылка
					</a>

					<p className="subtitle text">Boosty</p>
					<a href="" className="link" target="_blank">
						Ссылка
					</a> */}

					<p className="subtitle text">Metamask</p>
					<p className="text address">
						0xf71fbed2cfb0dbFD2EAFA1BA2cABE02CCF1a86C7
					</p>
				</Modal>
			)}
		</>
	);
};

export default AppHeader;
