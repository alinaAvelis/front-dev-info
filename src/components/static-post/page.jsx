"use client";
import React, { useEffect, useState } from "react";
// import {
// 	VKShareButton,
// 	VKIcon,
// 	EmailShareButton,
// 	EmailIcon,
// 	WhatsappShareButton,
// 	WhatsappIcon,
// 	TelegramShareButton,
// 	TelegramIcon,
// } from "next-share";
// import dynamic from 'next/dynamic';
import { getDateString } from "@/utils/utils";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { sortByDate } from "@/utils/utils";
import dynamic from "next/dynamic";
const Cards = dynamic(() => import("@/components/cards/Cards"));
import DesctopAdds from "@/components/adds/desktop-adds/page";
import BottomAdds from "@/components/adds/bottom-adds/page";

const useFormattedDate = (date) => {
    const [formattedDate, setFormattedDate] = useState(null);

    useEffect(() => setFormattedDate(getDateString(date)), []);

    return formattedDate;
};

const StaticPost = ({ allPosts, createDate, title, children }) => {
    const [menu, setMenu] = useState([]);
    const [expanded, setExpanded] = useState(false);
    const [innerWidth, setInnerWidth] = useState(0);
    const [changeMenuPosition, setChangeMenuPosition] = useState(false);
    const [lastPosts, setLastPosts] = useState([]);

    useEffect(() => {
        setmMenu();
        setPosts();
        if (typeof window !== "undefined") {
            window.scrollTo(0, 0);

            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    const setmMenu = () => {
        try {
            const headings = document.querySelectorAll(".heading");
            let links = [];

            const createMenuItems = (elements) => {
                elements.forEach((el, i) => {
                    const tag = el?.nodeName;
                    const text = el?.innerText;
                    const linkName = tag + i;
                    el.setAttribute("id", `${linkName}`);

                    const link = {
                        linkName: linkName,
                        text: text,
                        classList: "",
                    };

                    switch (tag) {
                        case "H1":
                            link.classList = "first_level";
                            break;
                        case "H2":
                            link.classList = "second_level";
                            break;
                        case "H3":
                            link.classList = "three_level";
                            break;
                        case "H4":
                            link.classList = "four_level";
                            break;
                        case "H5":
                            link.classList = "five_level";
                            break;
                        case "H6":
                            link.classList = "six_level";
                            break;
                        default:
                            break;
                    }

                    links?.push(link);
                });
            };

            if (headings.length > 0) {
                createMenuItems(headings);
                setMenu(links);
            }
        } catch (e) {
            // console.log(e);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (scrollY > 200) {
                setChangeMenuPosition(true);
            } else {
                setChangeMenuPosition(false);
            }
        });
    });

    const setPosts = () => {
        if (allPosts?.length) {
            const newArr = allPosts.filter(
                (n) => n.slug.current !== `algorithm-execution-speed`
            );
            setLastPosts(newArr && sortByDate(newArr));
        }
    };

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleResize = () => {
        setInnerWidth(window?.innerWidth);
    };

    return (
        <div className='page_container  mt-8! md:mt-16! flex'>
            <div className='post main  main--not_main'>
                <h1>{title}</h1>
                {menu.length > 0 && innerWidth < 1200 && (
                    <Accordion
                        className='menu_accordeon'
                        expanded={expanded === "panel2"}
                        onChange={handleChange("panel2")}
                    >
                        <AccordionSummary
                            aria-controls='panel2bh-content'
                            id='panel2bh-header'
                            expandIcon={<ExpandMoreIcon />}
                        >
                            Содержание
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className='menu'>
                                {menu?.map((item, i) => (
                                    <a
                                        key={i}
                                        className={`menu__item ${item.classList}`}
                                        href={`#${item.linkName}`}
                                    >
                                        {item.text}
                                    </a>
                                ))}
                            </div>
                        </AccordionDetails>
                    </Accordion>
                )}
                <p className='post_date'>{useFormattedDate(createDate)}</p>
                {children}

                <div className='other_posts'>
                    <h2>Другие посты</h2>
                    <Cards data={lastPosts.slice(0, 3)} />
                </div>

                <BottomAdds />
            </div>

            <div className='aside'>
                {menu.length > 0 && innerWidth > 1200 && (
                    <div
                        className={`menu ${changeMenuPosition && "menu--top"}`}
                    >
                        <h2>Содержание</h2>
                        {menu?.map((item, i) => (
                            <a
                                key={i}
                                className={`menu__item ${item.classList}`}
                                href={`#${item.linkName}`}
                            >
                                {item.text}
                            </a>
                        ))}
                    </div>
                )}

                <DesctopAdds />
            </div>
        </div>
    );
};

export default StaticPost;
