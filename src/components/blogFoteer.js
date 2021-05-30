import React from 'react'
import { FaInstagram, FaTwitterSquare, FaRedditAlien, } from "react-icons/fa";

const BlogFoteer = () => {
    return (
        <div className="footer">
            <h3>Writer |  Pranam Jain </h3>
            <ul>
                <li><a style={{ color: '#fff' }} href="https://www.instagram.com/pranam_1603" target="_blank" rel="noopener noreferrer" ><FaInstagram /></a></li>
                <li><a style={{ color: '#fff' }} href="https://twitter.com/Pranamjain02" target="_blank" rel="noopener noreferrer" ><FaTwitterSquare /></a></li>
                <li><a style={{ color: '#fff' }} href="https://www.reddit.com/user/Pranamj" target="_blank" rel="noopener noreferrer" ><FaRedditAlien /></a></li>
            </ul>
            <p>COPYRIGHT © {new Date().getFullYear()} . ALL RIGHTS RESERVED</p>
            <p>10, Unity Society Nehru Nagar ( 462003 ) Bhopal </p>
        </div>
    )
}

export default BlogFoteer
