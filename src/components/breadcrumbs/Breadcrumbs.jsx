"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import s from "./index.module.scss";

const Breadcrumbs = ({ pathArr }) => {
    const [path, setPath] = useState([]);

    useEffect(() => {
        setPath([{ name: "Главная", url: "/" }, ...pathArr]);
    }, [pathArr]);

    return (
        <div className={s.breadcrumbs}>
            {path &&
                path.map((item, index) => {
                    return item.url ? (
                        <Link
                            key={item.name + index}
                            href={item.url}
                            className={s["breadcrumbs__item"]}
                        >
                            {item.name}
                        </Link>
                    ) : (
                        <span
                            key={item.name + index}
                            className={s["breadcrumbs__item"]}
                        >
                            {item.name}
                        </span>
                    );
                })}
        </div>
    );
};

export default Breadcrumbs;
