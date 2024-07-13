"use client";
import React, { useEffect,  useState } from "react";
import ToTopButton from "@/components/to-top-button/ToTopButton.jsx"
import Link from "next/link.js";
import parse from "html-react-parser";
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
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/utils/sanity-utils";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { sortByDate } from "@/utils/utils";
import dynamic from "next/dynamic";
const Breadcrumbs = dynamic(() =>
    import("@/components/breadcrumbs/Breadcrumbs")
);
const Cards = dynamic(() => import("@/components/cards/Cards"));
import CodeInput from "@/components/code-input";
import DesctopAdds from "@/components/adds/desktop-adds/page";
import BottomAdds from "@/components/adds/bottom-adds/page";

const components = {
    block: {
        normal: ({ children }) => <p className='text'>{children}</p>,
        h2: ({ children }) => <h2 className='heading'>{children}</h2>,
        h3: ({ children }) => <h3 className='heading'>{children}</h3>,
        h4: ({ children }) => <h4 className='heading'>{children}</h4>,
        h5: ({ children }) => <h5 className='heading'>{children}</h5>,
        h6: ({ children }) => <h6 className='heading'>{children}</h6>,
    },
    list: {
        // Ex. 1: customizing common list types
        bullet: ({ children }) => (
            <ul className='mt-2 list-disc pl-10'>{children}</ul>
        ),
        number: ({ children }) => <ol className='mt-2'>{children}</ol>,

        // Ex. 2: rendering custom lists
        checkmarks: ({ children }) => <ol className='mt-2'>{children}</ol>,
    },
    marks: {
        accent_text: ({ children }) => (
            <span className='accent_text'>{children}</span>
        ),
        link: ({ value, children }) => {
            const { blank, href } = value;
            return blank ? (
                <a
                    className='link'
                    href={href}
                    target='_blank'
                    rel='noreferrer noopener'
                >
                    {children}
                </a>
            ) : (
                <a className='link' href={href}>
                    {children}
                </a>
            );
        },
        internalLink: ({ value, children }) => {
            const { href } = value;
            return (
                <Link className='link' target='_blank' href={href}>
                    {children}
                </Link>
            );
        },
        gitHub_link: ({ value, children }) => {
            const { href } = value;
            return (
                <a
                    className='button'
                    href={href}
                    target='_blank'
                    rel='noreferrer noopener'
                >
                    {children}
                </a>
            );
        },
        ancor_link_main: ({ value, children }) => {
            const { name } = value;
            return (
                <span
                    id={name}
                >
                    {children}
                </span>
            );
        },
    },
    types: {
        code_input: ({ value }) => {
            const { language, code, filename } = value;
            return <CodeInput language={language} code={code} filename={filename} />;
        },
        code_input_to_page: ({ value }) => {
            const { code } = value;
            const newCode = parse(code);
            return <div className='mt-5'>{newCode}</div>;
        },
        one_image: ({ value }) => {
            const { asset, alt, caption } = value;
            return (
                <div className='post_img my-5'>
                    <Image
                        className='img'
                        src={urlFor(asset._ref).url()}
                        alt={alt}
                        width={2000}
                        height={2000}
                    />
                </div>
            );
        },
        one_image_vertical: ({ value }) => {
            const { asset, alt, caption } = value;
            return (
                <div className='post_img  post_img--vertical'>
                    <Image
                        className='img'
                        src={urlFor(asset._ref).url()}
                        alt={alt}
                        width={2000}
                        height={2000}
                    />
                </div>
            );
        },
        table: ({ value }) => {
            const { rows } = value;
            return (
                <table className='mt-2 table table-auto'>
                    <thead>
                        <tr>
                            {rows[0].cells.map((item, i) => (
                                <th
                                    key={i + "th"}
                                    className='border border-solid border-slate-400 p-2'
                                >
                                    {item}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {rows.map((item, i) => {
                            if (i !== 0) {
                                return (
                                    <tr key={item._key}>
                                        {item.cells.map((item, i) => (
                                            <td
                                                key={i + "tr"}
                                                className='border border-solid border-slate-400 p-2'
                                            >
                                                {item}
                                            </td>
                                        ))}
                                    </tr>
                                );
                            }
                        })}
                    </tbody>
                </table>
            );
        },
    },
};

const useFormattedDate = (date) => {
    const [formattedDate, setFormattedDate] = useState(null);

    useEffect(() => setFormattedDate(getDateString(date)), []);

    return formattedDate;
};

const PostPage = ({ post, allPosts }) => {
    const [menu, setMenu] = useState([]);
    const [expanded, setExpanded] = useState(false);
    const [innerWidth, setInnerWidth] = useState(0);
    const [changeMenuPosition, setChangeMenuPosition] = useState(false);
    const [lastPosts, setLastPosts] = useState([]);
    useEffect(() => {
        setmMenu();
        if (typeof window !== "undefined") {
            window.scrollTo(0, 0);

            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    useEffect(() => {
        if (allPosts?.length && post) {
            const newArr = allPosts.filter(
                (n) => n.slug.current !== post.slug.current
            );
            setLastPosts(newArr && sortByDate(newArr));
        }
    }, [allPosts, post]);

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
                        classList: "relative",
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
            console.log(e);
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

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleResize = () => {
        setInnerWidth(window?.innerWidth);
    };

    return (
        <div className='main_container container'>
            <Breadcrumbs
                pathArr={[
                    { name: "Посты", url: "/posts" },
                    { name: post?.title },
                ]}
            />
            <div className='page_container  mt-16 flex'>
                <div className='post main  main--not_main'>
                    <h1>{post?.title}</h1>
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
                                <h2>Содержание</h2>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className='menu'>
                                    {menu?.map((item, i) => {
                                        return (
                                            <a
                                                key={i}
                                                className={`menu__item ${item.classList}`}
                                                href={`#${item.linkName}`}
                                            >
                                                {item.text}
                                            </a>
                                        );
                                    })}
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    )}
                    <p className='post_date'>
                        {useFormattedDate(post?.releaseDate)}
                    </p>
                    <PortableText
                        value={post?.content}
                        components={components}
                    />

                    <div className='other_posts'>
                        <h2>Другие посты</h2>
                        <Cards data={lastPosts.slice(0, 3)} withImage={false} />
                    </div>

                    <BottomAdds />
                </div>

                <div className='aside'>
                    {menu.length > 0 && innerWidth > 1200 && (
                        <div
                            className={`menu ${
                                changeMenuPosition && "menu--top"
                            }`}
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

            <ToTopButton />
        </div>
    );
};

export default PostPage;
