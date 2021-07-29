import React from 'react'
import { FaCode, FaLaptopCode } from 'react-icons/fa'
import { GiCutDiamond } from "react-icons/gi";

const Skills = () => {
    return (
        <div className="skills">
            <div className="skill-cont">
                <article id="article">
                    <h2><FaCode /></h2>
                    <h4>Front-End Developer</h4>
                    <div className="underline"></div>
                    <p>
                        I love Front-End Development. Usaually i like to spent my time in front-end. My favourite framework is React.

                    </p>
                </article>
            </div>
            <div className="skill-cont">
                <article id="article">
                    <h2><GiCutDiamond /></h2>
                    <h4>MERN Developer</h4>
                    <div className="underline"></div>
                    <p>
                        I am a MERN Developer, and i learn it with making projects and working with others which teach me many things.
                    </p>
                </article>
            </div>
            <div className="skill-cont">
                <article id="article">
                    <h2><FaLaptopCode /></h2>
                    <h4>Back-End Developer</h4>
                    <div className="underline"></div>
                    <p>
                        I like to work on large scale projects. that's why i spent most of my time with Backend, and
                        i love it.
                    </p>
                </article>
            </div>
        </div>
    )
}

export default Skills
