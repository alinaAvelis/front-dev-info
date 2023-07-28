import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import CloseBtn from "../close_btn";
import SearchBlock from "../search-block";
import SearchHomeBlock from "../home-search-block";
// import style from "./index.module.scss";
import Modal from "../modal";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

const AppHeader = () => {
	const [openModal, setOpenModal] = useState(false);

	const mobileMenu = useRef<HTMLInputElement>(null);
	const [isHomeSearch, setIsHomeSearch] = useState(false);

	const router = useRouter();

	const [expanded, setExpanded] = React.useState<string | false>(false);

	useEffect(() => {
		if (router.asPath === "/") {
			setIsHomeSearch(true);
		} else {
			setIsHomeSearch(false);
		}
	}, [router]);

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

	const handleChange =
		(panel: string) =>
		(event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};

	return (
		<>
			<header className="header  flex">
				<button
					id="burger"
					className="button button--no_styles burger grid"
					type="button"
					onClick={handleOpenMenu}
				>
					<p className="burger_item"></p>
					<p className="burger_item"></p>
					<p className="burger_item"></p>
				</button>

				<div ref={mobileMenu} className="nav_container">
					<CloseBtn clickHandler={onClose} />

					<Accordion
						expanded={expanded === "panel1"}
						onChange={handleChange("panel1")}
					>
						<AccordionSummary
							aria-controls="panel1bh-content"
							id="panel1bh-header"
						>
							Информация о сайте
						</AccordionSummary>
						<AccordionDetails>
							На этом сайте я делюсь информацией, которую
							использую в процессе работы. Посты пишутся больше в
							формате памяток, чем полномасштабных статей.
						</AccordionDetails>
					</Accordion>

					<button
						className="button donate_btn"
						type="button"
						data-type="open_donate"
						onClick={() => setOpenModal(true)}
					>
						Поддержать
					</button>

					<nav className="grid header_nav">
						<Link className="link" href="/posts" onClick={onClose}>
							Все посты
						</Link>
						<Link
							className="link"
							href="/categories"
							onClick={onClose}
						>
							Все категории
						</Link>
						<Link
							className="link"
							href="/resourses"
							onClick={onClose}
						>
							Ресурсы
						</Link>
					</nav>
				</div>
			</header>

			<section className="section">
				{isHomeSearch ? <SearchHomeBlock /> : <SearchBlock />}
			</section>

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
