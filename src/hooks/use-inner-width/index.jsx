"use client"
import { useSyncExternalStore } from 'react';

function subscribe(callback) {
    window.addEventListener('resize', callback);

    return () => {
        window.removeEventListener('resize', callback);
    };
}

function getSnapshot() {
    return window.innerWidth;
}

function getServerSnapshot() {
    return 0; // SSR fallback
}

export default function useInnerWidth() {
    return useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot
    );
}
// import { useState, useEffect } from "react"

// const useInnerWidth = () => {
//     const [innerWidth, setInnerWidth] = useState(0);

//     useEffect(() => {
//         if (typeof window !== "undefined") {
//             window.scrollTo(0, 0);

//             window.addEventListener("resize", handleResize);
//             handleResize();
//             return () => window.removeEventListener("resize", handleResize);
//         }
//     }, []);

//     const handleResize = () => {
//         setInnerWidth(window?.innerWidth);
//     };

//     return {innerWidth};
// }

// export default useInnerWidth;