"use client";
import React, { useState, useRef, useEffect } from "react";

import Link from "next/link";
// import style from "./index.module.scss";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
const Modal = dynamic(() => import("../modal/Modal"));
const SearchHomeBlock = dynamic(() =>
    import("../home-search-block/SearchHomeBlock")
);
const SearchBlock = dynamic(() => import("../search-block/SearchBlock"));
const CloseBtn = dynamic(() => import("../close_btn/CloseBtn"));

const AppHeader = ({ categories }) => {
    const [openModal, setOpenModal] = useState(false);
    const mobileMenu = useRef(null);
    const [isHomeSearch, setIsHomeSearch] = useState(false);

    const pathname = usePathname();

    useEffect(() => {
        if (pathname === "/") {
            setIsHomeSearch(true);
        } else {
            setIsHomeSearch(false);
        }
    }, [pathname]);

    const postResoursesPages =
        pathname.includes(`/posts/`) || pathname.includes(`/resourses`);

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
            <header
                className={`z-10  w-full  bg-white ${
                    postResoursesPages ? `` : `fixed right-0 top-0`
                }`}
            >
                <div className='mx-auto max-w-screen-xl px-5'>
                    <div className='flex flex-col items-center justify-between gap-5 py-2 sm:flex-row'>
                        <div className='flex w-full items-center justify-between gap-2 md:w-fit'>
                            <Link
                                className='link text-sm font-bold! text-gray-300! md:text-lg'
                                href='/'
                                onClick={onClose}
                            >
                                FRONT-DEV-INFO
                            </Link>

                            <button
                                className='button button--small text-sm md:hidden md:text-lg'
                                type='button'
                                data-type='open_donate'
                                onClick={() => setOpenModal(true)}
                            >
                                Поддержать
                            </button>
                        </div>
                        <div className='flex items-center justify-end gap-5'>
                            <button
                                className='button button--no_styles text-base md:text-lg'
                                type='button'
                                data-type='open_donate'
                                onClick={handleOpenMenu}
                            >
                                Категории
                            </button>
                            <Link
                                className='link text-base font-bold md:text-lg'
                                href='/posts'
                            >
                                Посты
                            </Link>
                            <Link
                                className='link text-base font-bold md:text-lg'
                                href='/resourses'
                            >
                                Ресурсы
                            </Link>
                            <button
                                className='button button--small text-sm md:text-lg hidden md:block'
                                type='button'
                                data-type='open_donate'
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

                    
                    <div ref={mobileMenu} className='nav_container'>
                        <CloseBtn clickHandler={onClose} />

                        <nav className='header_nav grid overscroll-contain'>
                            {categories?.map((item, i) => {
                                if (item.activeCategory === true) {
                                    return (
                                        <Link
                                            key={i}
                                            className='link'
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
                </div>

                {!isHomeSearch && <SearchBlock />}
            </header>

            {isHomeSearch && (
                 <SearchHomeBlock />
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

                    <p className='subtitle text'>Metamask</p>
                    <p className='text address'>
                        0xf71fbed2cfb0dbFD2EAFA1BA2cABE02CCF1a86C7
                    </p>
                </Modal>
            )}
        </>
    );
};

export default AppHeader;
