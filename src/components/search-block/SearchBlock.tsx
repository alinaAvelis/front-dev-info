"use client";
import React, { useCallback, useEffect, useState, ChangeEvent } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import useSearch from "@/hooks/use-search";
import { setPostsByPreloaded } from "@/lib/features/posts/postsSlice";
import { setSearchState } from "@/lib/features/search/searchSlice";
import { useSearchValueSelector } from "@/lib/features/search/hooks/use-search-selector";
import { useLimitSelector } from "@/lib/features/posts/hooks/use-posts-selector";
import useClientDictionary from "@/dictionary/hooks/use-client-dictionary";
import Input from "@/shared/ui/input";
import useValidateInput from "@/hooks/use-validate-input";
import { usePathname } from "next/navigation";

const code = `(function(){<br />
let canvas = document.createElement('canvas'),<br />  
ctx = canvas.getContext('2d'),<br />             
w = canvas.width = innerWidth,<br />
h = canvas.height = innerHeight,<br />
particles = [],<br />
properties = {<br />
bgColor : 'rgba(17, 17, 19, 1)',<br />
particleColor : 'rgba(255, 40, 40, 1)',<br />
particleRadius : 3,<br />
particleCount : 60,<br />
particleMaxVelocity : 0.5,<br />
lineLength : 150,<br />
particleLife : 6,<br />
};<br />
<br />
document.querySelector('body').appendChild(canvas);<br />
<br />
window.onresize = function() {<br />
w = canvas.width = innerWidth;<br />
h = canvas.height = innerHeight;<br />
}<br />
<br />
class Particle {<br />
constructor() {<br />
this.x = Math.random()*w;<br />`;

const SearchBlock = () => {
	const searchValue = useSearchValueSelector();
		const pathname = usePathname();
	const [validationError, setValidationError] = useState<boolean | string>(false);
	const router = useRouter();
	const limit = useLimitSelector();
	const { searchPosts } = useSearch({ limit });
	const dispatch = useAppDispatch();
	const text = useClientDictionary("search");

	const resetPosts = useCallback(() => {
		dispatch(setPostsByPreloaded());
	}, [dispatch]);

	const validate = useValidateInput();

	const onSearch = useCallback(() => {
		// console.log(v)
		if (pathname !== "/posts") {
			router.push("/posts");
		}
		if (searchValue && !validationError) {
			searchPosts(searchValue);
		} else {
			resetPosts();
		}
	}, [pathname, resetPosts, router, searchPosts, searchValue, validationError]);

	useEffect(() => {
		const handlePressKeyboard = (e: KeyboardEvent) => {
			// console.log(e.keyCode);
			if (e.keyCode === 13) {
				onSearch();
			}
		};
		window.addEventListener("keydown", handlePressKeyboard);
		return () => window.removeEventListener("keydown", handlePressKeyboard);
	}, [onSearch]);

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const currentValue = e.target.value;
		const error = validate(currentValue);
		setValidationError(error);
		dispatch(setSearchState(currentValue));
		if (!currentValue) {
			resetPosts();
		}
	};

	return (
		<section className="search_block search_block--small ">
			<h2 className="visually-hidden">{text("search")}</h2>
			<div className="py-2 px-5 flex justify-center items-center mx-auto max-w-screen-xl">
				<div className="search_block_back">
					<pre>
						<code>{code}</code>
					</pre>
				</div>
				<div className="search_container">
					<Input
						label={text("search")}
						type="search"
						className="input"
						fullWidth
						value={searchValue}
						onChange={onInputChange}
						placeholder={text("searchPlaceholder")}
						error={Boolean(validationError)}
						helperText={validationError}
					/>

					<button
						className="button button--no_styles search_icon flex justify-center items-center w-10"
						type="button"
						onClick={onSearch}
						aria-label="search icon"
					>
						<svg
							width="36"
							height="37"
							viewBox="0 0 36 37"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M35.0891 33.4099L25.7409 24.0608C27.988 21.4199 29.2188 18.0872 29.2188 14.6094C29.2188 6.55359 22.6652 0 14.6094 0C6.55359 0 0 6.55359 0 14.6094C0 22.6652 6.55359 29.2188 14.6094 29.2188C17.8226 29.2188 20.9559 28.1488 23.4988 26.1946L32.902 35.597C33.1941 35.8901 33.5827 36.0508 33.9959 36.0508C34.4084 36.0508 34.7969 35.8901 35.0891 35.597C35.6924 34.9938 35.6924 34.0123 35.0891 33.4099ZM14.6094 2.92188C21.0538 2.92188 26.2969 8.16492 26.2969 14.6094C26.2969 21.0538 21.0538 26.2969 14.6094 26.2969C8.16492 26.2969 2.92188 21.0538 2.92188 14.6094C2.92188 8.16492 8.16492 2.92188 14.6094 2.92188Z" />
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
};

export default SearchBlock;
