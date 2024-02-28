import React from "react";

type CloseBtnProps = {
	clickHandler: any;
};

const CloseBtn = ({ clickHandler }: CloseBtnProps) => {
	return (
		<button
			id="menuClose"
			className="button close_button button--no_styles"
			type="button"
			onClick={clickHandler}
		>
			<svg
				width="65"
				height="65"
				viewBox="0 0 65 65"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M4.75126 58.1038C2.86328 56.0886 2.96639 52.9244 4.98158 51.0365L52.4162 6.59597C54.4314 4.70799 57.5955 4.81111 59.4835 6.82629V6.82629C61.3715 8.84148 61.2684 12.0056 59.2532 13.8936L11.8186 58.3341C9.80339 60.2221 6.63925 60.119 4.75126 58.1038V58.1038Z" />
				<path d="M6.94862 4.66614C8.99568 2.81276 12.1576 2.96977 14.011 5.01683L57.6369 53.2017C59.4903 55.2487 59.3333 58.4107 57.2862 60.264V60.264C55.2392 62.1174 52.0772 61.9604 50.2238 59.9134L6.59794 11.7285C4.74456 9.68145 4.90157 6.51952 6.94862 4.66614V4.66614Z" />
			</svg>
		</button>
	);
};

export default CloseBtn;
