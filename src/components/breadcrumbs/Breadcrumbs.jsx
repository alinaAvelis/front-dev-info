"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Breadcrumbs = ({ pathArr }) => {
    const [path, setPath] = useState([]);

    useEffect(() => {
        setPath([{ name: "Главная", url: "/" }, ...pathArr]);
    }, [pathArr]);

    return (
        <div className="flex mt-5 items-center">
            {path &&
                path.map((item, index) => {
                    return item.url ? (
                        <Link
                            key={item.name + index}
                            href={item.url}
                            className="px-2 first:pl-0 relative before:absolute before:block before:rounded-full before:w-1 before:h-1 before:top-[0.6em] before:-right-[2px] before:bg-[#979797] last:before:hidden text-sm!"
                        >
                            {item.name}
                        </Link>
                    ) : (
                        <span
                            key={item.name + index}
                            className="px-2 first:pl-0 relative before:absolute before:block before:rounded-full before:w-1 before:h-1 before:top-[0.6em] before:-right-[2px] before:bg-[#979797] last:before:hidden text-sm! truncate"
                        >
                            {item.name}
                        </span>
                    );
                })}
        </div>
    );
};

export default Breadcrumbs;
