"use client"
import { useState, useEffect } from "react"

const useDomain = () => {
    const [domain, setDomain] = useState();

    useEffect(() => {
        setDomain(window.location.hostname)
    }, [])

    return {domain};
}

export default useDomain;