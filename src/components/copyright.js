import React from 'react'
import { social } from '../data/navLinks'


const copyright = () => {
    return (
        <>
            <section className="copyright-section">
                <div>
                    {social.map(item => {
                        const { id, url, icon } = item
                        return (
                            <a key={id} href={url} rel="noopener noreferrer">{icon}</a>
                        )
                    })}
                </div>
                <p>&copy; {new Date().getFullYear()} <span>PRANAM.</span> ALL RIGHTS RESERVED</p>
                <p className="heart-para">Built with <span className="heart">&#10084;</span> by Pranam</p>
            </section>
        </>
    )
}

export default copyright
