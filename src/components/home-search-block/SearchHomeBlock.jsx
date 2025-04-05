"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { setSearchState } from "@/lib/features/searchSlice";
import { useAppDispatch } from "@/lib/hooks";
// import { deleteScript, deleteSimbols } from "../../../public/support-func/support";

const SearchHomeBlock = () => {
    const [value, setValue] = useState("");
    const { push } = useRouter();
    // const [ error, setError ] = useState("");
    const dispatch = useAppDispatch();
    useEffect(() => {
        window.addEventListener("keydown", (e) => {
            if (e.keyCode === 13) {
                push("/posts");
            }
        });
    });

    const onInputChange = (e) => {
        setValue(e.target.value);
        window.localStorage.setItem("searchValue", e.target.value);
        dispatch(setSearchState(e.target.value));
        // deleteScript(e.target.value, setError);
        // deleteSimbols(e.target.value, setError);
    };

    return (
        <section className='search_block'>
            <h2 className='visually-hidden'>Поиск</h2>

            <div className='items-center search_block__container relative px-5 md:px-10 mx-auto flex'>
                <div className='search_block_back'>
                    <code>{code}</code>
                </div>

                <div className='max-w-screen-xl w-full px-5 md:px-10 mx-auto'>
                    <div className='search_container  flex w-full '>
                        <input
                            type='text'
                            className='input'
                            value={value}
                            onChange={onInputChange}
                            placeholder='Поиск по постам...'
                        />

                        <button
                            className='button button--no_styles search_icon  justify-center items-center  flex'
                            type='button'
                            onClick={() => {
                                push("/posts");
                            }}
                        >
                            <svg
                                width='36'
                                height='37'
                                viewBox='0 0 36 37'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path d='M35.0891 33.4099L25.7409 24.0608C27.988 21.4199 29.2188 18.0872 29.2188 14.6094C29.2188 6.55359 22.6652 0 14.6094 0C6.55359 0 0 6.55359 0 14.6094C0 22.6652 6.55359 29.2188 14.6094 29.2188C17.8226 29.2188 20.9559 28.1488 23.4988 26.1946L32.902 35.597C33.1941 35.8901 33.5827 36.0508 33.9959 36.0508C34.4084 36.0508 34.7969 35.8901 35.0891 35.597C35.6924 34.9938 35.6924 34.0123 35.0891 33.4099ZM14.6094 2.92188C21.0538 2.92188 26.2969 8.16492 26.2969 14.6094C26.2969 21.0538 21.0538 26.2969 14.6094 26.2969C8.16492 26.2969 2.92188 21.0538 2.92188 14.6094C2.92188 8.16492 8.16492 2.92188 14.6094 2.92188Z' />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* {error.length && <p className="error">{error}</p>} */}
            </div>
        </section>
    );
};

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
this.x = Math.random()*w;<br />
(function(){<br />
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
this.x = Math.random()*w;<br />
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
this.x = Math.random()*w;<br />
(function(){<br />
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

export default SearchHomeBlock;
