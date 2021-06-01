import React from 'react'
import { FaCode } from 'react-icons/fa'
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
    )
}

export default Skills
