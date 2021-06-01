import React from 'react'
import { IoIosArrowUp } from "react-icons/io";

const ScrollTop = () => {
    const handleClick = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    return (
        <div>
            <button id="scrollTop" onClick={handleClick}><IoIosArrowUp /></button>
        </div>
    )
}

export default ScrollTop
