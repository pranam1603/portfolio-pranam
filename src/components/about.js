import React from 'react'
import aboutImg from '../Images/demo6.jpg'
import { Link } from 'react-router-dom'

const about = () => {
    return (
        <div className="about-section">
            <article className="about-img">
                <img src={aboutImg} />
            </article>
            <article className="about-text">
                <div>
                    <h3>About Me</h3>
                    <h2>PRANAM JAIN</h2>
                </div>
                <p>Hello My name is Pranam Jain, and I'm a bhopal-based freelancer. I am also worked in some companies . Currentky i'm working in a Turkey based Startup <i>MyDosTech</i>.</p>
                <p>I have a diverse set of skills, ranging from design, to HTML+CSS+Javascript +React. I also use Node.js and MongoDb in backend.</p>
                <Link to="/about" class="main-btn ">Know more</Link>
            </article>
        </div>
    )
}

export default about
