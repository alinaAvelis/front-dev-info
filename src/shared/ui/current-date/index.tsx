"use client";
import { useEffect, useState } from "react";

const CurrentDate = () => {
	const [currentDate, setCurrentDate] = useState(0);

	useEffect(() => {
		(() => setCurrentDate(new Date().getFullYear()))();
	}, []);

	return currentDate;
};

export default CurrentDate;
