import useDictionary from "@/shared/i18n/use-dictionary";

type ButtonProps = {
	onClick: () => void;
};
const CardsButton = ({ onClick }: ButtonProps) => {
	const general = useDictionary("general");
	return (
		<button
			type="button"
			onClick={onClick}
			title={general?.cards}
			aria-label={general?.cards}
			className="hover:opacity-80 cursor-pointer"
		>
			<svg
				className="fill-gray-600 w-auto h-6 pointer-events-none"
				viewBox="0 0 1920 1920"
			>
				<path
					d="M1800 1320v420c0 33-27 60-60 60h-420v-480h480Zm-600 0v480H720v-480h480Zm-600 0v480H180c-33 0-60-27-60-60v-420h480Zm1200-600v480h-480V720h480Zm-600 0v480H720V720h480Zm-600 0v480H120V720h480Zm1140-600c33 0 60 27 60 60v420h-480V120h420Zm-540 0v480H720V120h480Zm-600 0v480H120V180c0-33 27-60 60-60h420ZM1740 0H180C80.76 0 0 80.76 0 180v1560c0 99.24 80.76 180 180 180h1560c99.24 0 180-80.76 180-180V180c0-99.24-80.76-180-180-180Z"
					fillRule="evenodd"
				/>
			</svg>
		</button>
	);
};

const ListButton = ({ onClick }: ButtonProps) => {
	const general = useDictionary("general");
	return (
		<button
			type="button"
			onClick={onClick}
			title={general?.list}
			aria-label={general?.list}
			className="hover:opacity-80 cursor-pointer"
		>
			<svg
				viewBox="0 0 24 24"
				fill="none"
				className="w-auto h-8 pointer-events-none"
			>
				<path
					d="M8 6L21 6.00078M8 12L21 12.0008M8 18L21 18.0007M3 6.5H4V5.5H3V6.5ZM3 12.5H4V11.5H3V12.5ZM3 18.5H4V17.5H3V18.5Z"
					className="stroke-gray-600"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</button>
	);
};

type TypeButtonsProps = {
	setView: (value: string) => void;
};

const TypeButtons = ({ setView }: TypeButtonsProps) => {
	return (
		<div className="flex gap-2 mb-5">
			<CardsButton onClick={() => setView("cards")} />
			<ListButton onClick={() => setView("list")} />
		</div>
	);
};

export default TypeButtons;
