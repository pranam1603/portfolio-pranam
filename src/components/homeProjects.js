import React from 'react'
import { FaReact, FaHtml5, FaCss3Alt, FaSearch } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { Link } from "react-router-dom"

const HomeProjects = ({ item }) => {
    const { image, language, text, url } = item
    return (
        <div className="product">
            <div className="productHeader">
                <a href={url} target="_blank"><img className="productImage" src={image} rel="noopener noreferrer" /></a>
            </div>
            <h3><a style={{ color: '#fff' }} href={url} rel="noopener noreferrer" target="_blank">{text}</a></h3>
            {
                language.map(lang => {
                    return (
                        <span key={lang.id}>{lang.icon}</span>
                    )
                })
            }
        </div>
    )
}

export default HomeProjects
