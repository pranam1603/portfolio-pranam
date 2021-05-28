import React from 'react'
import image from '../Images/demo.jpg'
import { SiMicroDotBlog } from "react-icons/si";
import { FaUser, FaTags } from "react-icons/fa";

const bloghome = () => {
    return (
        <section className="blog">
            <h2>Blog<span><SiMicroDotBlog /></span></h2>
            <div id="underline"></div>
            <div className="blog-section">
                <div className="blog-card">
                    <div className="blogCard-header">
                        <div className="card-date">
                            <h5>04</h5>
                            <h4>Apr</h4>
                        </div>
                    </div>
                    <div className="blogCard-body">
                        <h6 id="blog-heading">Integer Aliquet Dignissim Tellus</h6>
                        <p className="card-admin">
                            <span><FaUser /></span>
                            Pranam Jain
                            <span><FaTags /></span>
                            Tag 1, Tag 2
                        </p>
                        <p className="blogCard-body-para">
                            Vestibulum consequat praesent bibendum vehicula mi sed fermentum erat sit amet imperdiet dictum enim lectus
                            ......
                        </p>
                        <button className="cardBody-button">Read More</button>
                    </div>
                </div>
                <div className="blog-card">
                    <div className="blogCard-header">
                        <div className="card-date">
                            <h5>04</h5>
                            <h4>Apr</h4>
                        </div>
                    </div>
                    <div className="blogCard-body">
                        <h6 id="blog-heading">Integer Aliquet Dignissim Tellus</h6>
                        <p className="card-admin">
                            <span><FaUser /></span>
                            Pranam Jain

                            <span><FaTags /></span>
                            Tag 1, Tag 2
                        </p>
                        <p className="blogCard-body-para">
                            Vestibulum consequat praesent bibendum vehicula mi sed fermentum erat sit amet imperdiet dictum enim lectus
                            ......
                        </p>
                        <button className="cardBody-button">Read More</button>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default bloghome