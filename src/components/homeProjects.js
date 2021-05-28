import React from 'react'
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const HomeProjects = ({ item }) => {
    const { image, language, text, url } = item
    return (
        <div className="product">
            <img className="productImage" src={image} alt="productPicture" />
            <h3><a style={{ color: '#fff' }} href={url} target="_blank">{text}</a></h3>
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
