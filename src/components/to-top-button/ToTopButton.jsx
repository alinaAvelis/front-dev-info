"use client";
import React, { useEffect, useState } from "react";

const ToTopButton = () => {
    const [showToTop, setShowToTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (scrollY > 200) {
                setShowToTop(true);
            } else {
                setShowToTop(false);
            }
        });
    });

    return (
        showToTop && (
            <button
                className='fixed z-50 bottom-32 right-5 mt-20 flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-sm bg-gray-200 shadow-sm shadow-neutral-500 md:right-10 cursor-pointer'
                onClick={() => {
                    window?.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    });
                }}
            >
                <span>&uarr;</span>
                <span>Top</span>
            </button>
        )
    );
};

export default ToTopButton;
