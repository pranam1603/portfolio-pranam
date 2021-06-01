import React from 'react'
import Particles from 'react-particles-js';
import Typewriter from 'typewriter-effect';
import { FaInstagram, FaTwitter, FaRedditAlien, FaLinkedinIn } from 'react-icons/fa'

const Hero = () => {
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
                    <div id="forTypewriter">I'm
                        <div><Typewriter
                            options={{
                                strings: [" a Student. ", "a Freelancer.", " a Web Designer.", "a Developer."],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        </div>
                    </div>
                    <div className="hero-ButtonContainer">
                        <a href="https://twitter.com/Pranamjain02" target="_blank" rel='noopener noreferrer' ><FaTwitter /></a>
                        <a href="https://www.reddit.com/user/Pranamj" target="_blank" rel='noopener noreferrer' ><FaRedditAlien /></a>
                        <a href="http://www.linkedin.com/in/pranam-jain" target="_blank" rel='noopener noreferrer' ><FaLinkedinIn /></a>
                        <a href="https://www.instagram.com/pranam_1603/" target="_blank" rel='noopener noreferrer' ><FaInstagram /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
