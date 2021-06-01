import React from 'react'

const HomeProjects = ({ item }) => {
    const { image, language, text, url } = item
    return (
        <div className="product">
            <div className="productHeader">
                <a href={url} target="_blank" rel="noopener noreferrer" ><img className="productImage" src={image} alt="productMAge" /></a>
            </div>
            <h3><a style={{ color: '#fff' }} href={url} rel="noopener noreferrer" target="_blank">{text}</a></h3>
            {
                language.map((lang, index) => {
                    return (
                        <span key={index}>{lang.icon}</span>
                    )
                })
            }
        </div>
    )
}

export default HomeProjects
