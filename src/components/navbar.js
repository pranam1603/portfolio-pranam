import React, { useState, useRef, useEffect } from 'react'
import { links, social } from '../data/navLinks'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [checked, setChecked] = useState(false)

    return (<div class="navigation">
        <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />

        <label for="navi-toggle" onClick={() => setChecked(!checked)} class="navigation__button">
            {checked ? <FaTimes /> : <FaBars />}
        </label>

        <div class="navigation__background">&nbsp;</div>

        <nav class="navigation__nav">
            <ul class="navigation__list">
                {links.map(link => {
                    return (
                        <li class="navigation__item" key={link.id}><a class="navigation__link" href={link.url} rel="noopener noreferrer" ><span>0{link.id}</span>{link.text}</a></li>
                    )
                })}
            </ul>
        </nav>
    </div>)





























    // const [showLinks, setShowLinks] = useState(false);
    // const refLinksContainer = useRef(null)
    // const linksContainer = useRef(null)

    // useEffect(() => {
    //     const linksHeight = linksContainer.current.getBoundingClientRect().height
    //     if (showLinks) {
    //         refLinksContainer.current.style.height = `${linksHeight}px`
    //     } else {
    //         refLinksContainer.current.style.height = `0px`
    //     }
    // })

    // return (
    //     <>
    //         <nav>
    //             <div className="nav-center">
    //                 <div className="nav-header">
    //                     <a href="/" rel="noopener noreferrer"> <img src="https://see.fontimg.com/api/renderfont4/4BEVW/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/UHJhbmFtIGphaW4/blackpine.png" alt="logo" /></a>
    //                     <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
    //                         <FaBars />
    //                     </button>
    //                 </div>

    //                 <div className={showLinks ? 'links-container show-container' : 'links-container'} ref={refLinksContainer}>
    //                     <ul className="links" ref={linksContainer}>
    //                         {links.map((link) => {
    //                             const { id, url, text } = link
    //                             return (
    //                                 <li key={id}>
    //                                     <a href={url} rel="noopener noreferrer">{text}</a>
    //                                 </li>
    //                             )
    //                         })}
    //                     </ul>
    //                 </div>

    //                 <ul className="social-icons">
    //                     {social.map((icons) => {
    //                         const { id, url, icon } = icons
    //                         return (
    //                             <li key={id}>
    //                                 <a href={url} rel="noopener noreferrer">{icon}</a>
    //                             </li>
    //                         )
    //                     })}
    //                 </ul>
    //             </div>
    //         </nav>
    //     </>
    // )
}

export default Navbar
