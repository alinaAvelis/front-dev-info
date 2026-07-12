"use client";
import React, { useMemo } from "react";
import useDictionary from "@/shared/i18n/use-dictionary";

const AppFooter = () => {
    	const general = useDictionary("general");
    const getCurrentYear = useMemo(() => {
        return new Date().getFullYear();
    }, []);
    return (
        <footer className='mt-10 bg-gray-300 py-5 '>
            <div className='mx-auto flex flex-col md:flex-row w-full max-w-screen-xl items-center justify-between px-5 md:px-10'>
                <p>© {getCurrentYear} front-dev-info</p>

                <div className='text-sm w-full md:w-96 text-center md:text-left'>
                    {general?.writeToMe}{" "}
                    <strong>
                        <a href='mailto:frontdevinfo@gmail.com'>
                            frontdevinfo@gmail.com
                        </a>
                    </strong>
                    .
                </div>
            </div>
        </footer>
    );
};

export default AppFooter;
