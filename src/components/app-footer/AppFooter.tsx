"use client";
import React, { useMemo } from "react";

type AppFooterProps = {};

const AppFooter = ({}: AppFooterProps) => {
    const getCurrentYear = useMemo(() => {
        return new Date().getFullYear();
    }, []);
    return (
        <footer className='mt-10 bg-gray-300 py-5 '>
            <div className='mx-auto flex w-full max-w-screen-xl items-center justify-between px-5 md:px-10'>
                <p>© {getCurrentYear} front-dev-info</p>

                <div className='header_contacts w-96 '>
                    Если вы заметили ошибку или есть замечания, вы можете
                    написать на почту:{" "}
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
