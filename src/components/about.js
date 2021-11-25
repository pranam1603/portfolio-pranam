import React from 'react'
import aboutImg from '../Images/demo6.jpg'

const about = () => {
    return (
        <main id="main">
            <div className="about-section">
                <article className="about-img">
                    <img src={aboutImg} alt="about" />
                </article>
                <article className="about-text">
                    <div>
                        <h3>About Me</h3>
                        <h2>PRANAM JAIN</h2>
                    </div>
                    <p>Hello My name is Pranam Jain, and I'm a bhopal-based freelancer. I am also worked in some companies . Currently I am working as Software Developer Intern at <i>Star Catalysts</i>.</p>
                    <p>I have a diverse set of skills, ranging from design, to HTML+CSS+Javascript+React. I also use Node.js and MongoDb in backend.</p>
                    <a href="/about" className="main-btn ">Know more</a>
                </article>
            </div>
        </main>
    )
}

export default about
