"use client";

import { useState, useEffect } from "react";


const CookieMessage = () => {
	const [show, setShow] = useState(false);

	 useEffect(() => {
	 	const isAcceptedJson = sessionStorage.getItem("cookieAccepted");
	 	let showTimeout = null;

	 	if ((isAcceptedJson && JSON.parse(isAcceptedJson))) {
	 		setShow(false);
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
			className={`bottom-5 left-5 right-5 bg-white p-5 rounded-md  z-50 shadow-md mx-auto lg:w-2/3 flex bordered-item flex-col sm:flex-row gap-3  sm:gap-10 items-center text-center sm:text-left transition-all ${
				show ? "opacity-100 translate-y-0 fixed" : "opacity-0 translate-y-10 absolute pointer-events-none -z-10"
			}`}
		>
			<p>
				Мы используем cookie для&nbsp;обеспечения работы сайта. Продолжая
				пользоваться сайтом, вы&nbsp;соглашаетесь с&nbsp;использованием
				cookie. Вы&nbsp;можете отключить их&nbsp;в&nbsp;настройках
				вашего&nbsp;браузера.
			</p>
			<button className="w-fit button " 
             onClick={onAccept}
            >
				Принять
			</button>
		</div>
	);
};

export default CookieMessage;
