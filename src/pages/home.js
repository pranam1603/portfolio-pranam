import React from 'react'
import Image from '../Images/istockphoto-1160620218-612x612.jpg'
import { FaCode } from 'react-icons/fa'
import { GiCutDiamond } from "react-icons/gi";
import {
    Tabs,
    About,
    Copyright,
    FeaturedProducts,
    Mailbox,
    Tools,
    Bloghome,
    ScrollTop
} from '../components'


const home = () => {

    return (
        <>
            <div id="hero">
                <img src={Image} alt="hero" />
            </div>
            <div className="skills">
                <div className="skill-cont">
                    <article id="article">
                        <h2><FaCode /></h2>
                        <h4>Front-End Developer</h4>
                        <div className="underline"></div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sequi.
                        </p>
                    </article>
                </div>
                <div className="skill-cont">
                    <article id="article">
                        <h2><GiCutDiamond /></h2>
                        <h4>Web Design</h4>
                        <div className="underline"></div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sequi.
                        </p>
                    </article>
                </div>
                <div className="skill-cont">
                    <article id="article">
                        <h2><FaCode /></h2>
                        <h4>Back-End Developer</h4>
                        <div className="underline"></div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sequi.
                        </p>
                    </article>
                </div>
            </div>
            <main id="main">
                <About />
            </main>
            <div style={{ paddingTop: '90px', paddingBottom: '90px', background: '#f8f8f8' }}>
                <Tabs />
            </div>
            <div id="feacture" style={{ backgroundColor: '#3a3e3b' }}>
                <FeaturedProducts />
            </div>
            <div>
                <Tools />
            </div>
            <div>
                <Bloghome />
            </div>
            <section>
                <Mailbox />
            </section>
            <section style={{ backgroundColor: '#3a3e3b' }}>
                <Copyright />
            </section>
            <ScrollTop />
        </>
    )
}

export default home
