import React from 'react'
import aboutImg from '../Images/about-bcg.jpeg'

const about = () => {
    return (
        <div className="about-section">
            <article className="about-img">
                <img src={aboutImg} />
            </article>
            <article className="about-text">
                <div>
                    <h3>about our</h3>
                    <h2>Pranam</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus numquam rem eos vel consequuntur obcaecati?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus numquam rem eos vel consequuntur obcaecati?</p>
                <a href="/about" class="main-btn ">learn more</a>
            </article>
        </div>
    )
}

export default about
