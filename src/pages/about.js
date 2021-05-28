import React from 'react'
import Copyright from '../components/copyright'
import aboutIMage from '../Images/Screenshot_20201013-123949__01__01__01__01.jpg'
import { FaReact, FaAws, FaHtml5, FaSass, FaCss3Alt, FaBootstrap, FaGithub, FaNode } from "react-icons/fa";
import { SiJavascript, SiBulma, SiNetlify, SiJquery, SiMongodb } from "react-icons/si";
import { AiFillApi } from "react-icons/ai";

const about = () => {
    return (
        <div id="forColor">
            <div className="about-section" id="about-section">
                <div className='about-section-text'>
                    <h1>About us</h1>
                    <h3>lorem lorem lorem lorem lorem <br />lorem lorem lorem loe </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                    <section className="lang-table">
                        <ul>
                            <li><span><FaHtml5 /></span>HTML</li>
                            <li><span><FaCss3Alt /></span>CSS</li>
                            <li><span><SiJavascript /></span>JAVASCRIPT</li>
                            <li><span><FaReact /></span>REACT</li>
                            <li><span><FaBootstrap /></span>BOOTSTRAP</li>
                            <li><span><SiJquery /></span>jQUERY</li>
                        </ul>
                        <ul>
                            <li><span><FaGithub /></span>GITHUB</li>
                            <li><span><AiFillApi /></span>APIs</li>
                            <li><span><FaNode /></span>NODE.JS</li>
                            <li><span><SiMongodb /></span>MONGODB</li>
                            <li><span><SiNetlify /></span>NETLIFY</li>
                        </ul>
                        <ul>
                            <li><span><FaSass /></span>SASS</li>
                            <li><span><SiBulma /></span>BULMA</li>
                            <li><span><FaAws /></span>AWS</li>
                        </ul>
                    </section>
                </div>
                <div>
                    <img className='profile' src={aboutIMage} alt="phoot" />
                </div>
            </div>
            <div style={{ backgroundColor: '#3a3e3b' }} >
                <Copyright />
            </div>
        </div>
    )
}

export default about
