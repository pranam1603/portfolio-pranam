import React from 'react'
import { FaCode } from 'react-icons/fa'
import { GiCutDiamond } from "react-icons/gi";
import Particles from 'react-particles-js';
import Typewriter from 'typewriter-effect';
import { FaInstagram, FaTwitter, FaRedditAlien, FaLinkedinIn } from 'react-icons/fa'

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
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 60
                            },
                            "size": {
                                "value": 3
                            },
                            "move": {
                                "speed": 2,
                            },
                            line_linked: {
                                shadow: {
                                    enable: true,
                                    color: "#5CAA45",
                                    blur: 5
                                }
                            }

                        },
                        "polygon": {
                            "enable": true,
                            "type": 'inside',
                            "move": {
                                radius: 10
                            },
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }}
                    style={{
                        width: '100%',
                        height: '100vh',
                    }}
                />
                <div className="hero-info">
                    <h1>PRANAM JAIN</h1>
                    <p>I'm
                        <span><Typewriter
                            options={{
                                strings: [" a Student. ", "a Freelancer.", " a Web Designer.", "a Developer."],
                                autoStart: true,
                                loop: true,

                            }}
                        />
                        </span>
                    </p>
                    <div className="hero-ButtonContainer">
                        <a href="https://twitter.com/Pranamjain02" target="_blank" rel='noopener noreferrer' ><FaTwitter /></a>
                        <a href="https://www.reddit.com/user/Pranamj" target="_blank" rel='noopener noreferrer' ><FaRedditAlien /></a>
                        <a href="http://www.linkedin.com/in/pranam-jain" target="_blank" rel='noopener noreferrer' ><FaLinkedinIn /></a>
                        <a href="https://www.instagram.com/pranam_1603/" target="_blank" rel='noopener noreferrer' ><FaInstagram /></a>
                    </div>
                </div>
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
