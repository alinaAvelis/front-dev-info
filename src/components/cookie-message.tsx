"use client";

import { useState, useEffect } from "react";
import useClientDictionary from "@/dictionary/hooks/use-client-dictionary";

const CookieMessage = () => {
	const [show, setShow] = useState(false);
	const text = useClientDictionary("cookie-message");

	useEffect(() => {
		const isAcceptedJson = sessionStorage.getItem("cookieAccepted");
		let showTimeout = null;

		if (isAcceptedJson && JSON.parse(isAcceptedJson)) {
			(() => {
				setShow(false);
			})();
		} else {
			showTimeout = setTimeout(() => {
				setShow(true);
			}, 2000);
		}

		return () => {
			if (showTimeout) {
				clearTimeout(showTimeout);
			}
		};
	}, []);

	const onAccept = () => {
		setShow(false);
		sessionStorage.setItem("cookieAccepted", "true");
	};

	return (
		<div
			className={`bottom-5 left-5 right-5 bg-white fixed p-5 rounded-md  z-50 shadow-md mx-auto lg:w-2/3 flex bordered-item flex-col sm:flex-row gap-3  sm:gap-10 items-center text-center sm:text-left transition-all ${
				show
					? "opacity-100 translate-y-0 "
					: "opacity-0 translate-y-10 pointer-events-none -z-10"
			}`}
		>
			<p>{text("mainText")}</p>
			<button className="w-fit button" onClick={onAccept}>
				{text("accept")}
			</button>
		</div>
	);
};

export default CookieMessage;
