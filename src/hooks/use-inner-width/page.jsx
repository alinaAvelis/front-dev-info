"use client"
import { useState, useEffect } from "react"

const useInnerWidth = () => {
    const [innerWidth, setInnerWidth] = useState(0);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.scrollTo(0, 0);

            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    const handleResize = () => {
        setInnerWidth(window?.innerWidth);
    };

    return {innerWidth};
}

export default useInnerWidth;