import React, { useState } from 'react'
import { links } from '../data/navLinks'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [checked, setChecked] = useState(false)

    const handleClick = () => {
        setChecked(!checked)
    }

    return (<div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
        <label htmlFor="navi-toggle" onClick={handleClick} className="navigation__button">
            {checked ? < FaTimes /> : <FaBars />}
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
            <ul className="navigation__list">
                {links.map(link => {
                    return (
                        <li className="navigation__item" key={link.id}><a className="navigation__link" href={link.url} ><span>0{link.id}</span>{link.text}</a></li>
                    )
                })}
            </ul>
        </nav>
    </div>)
}

export default Navbar
