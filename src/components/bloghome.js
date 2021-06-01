import React from 'react'
import { SiMicroDotBlog } from "react-icons/si";
import { FaUser, FaTags } from "react-icons/fa";

const bloghome = () => {
    return (
        <section className="blog">
            <h2>Blogs<span><SiMicroDotBlog /></span></h2>
            <div id="underline"></div>
            <div className="blog-section">
                <div className="blog-card">
                    <div className="blog-style blog-front">
                        <div className="blogCard-header">
                            <div className="card-date">
                                <h5>20</h5>
                                <h4>May</h4>
                            </div>
                        </div>
                        <div className="blogCard-body">
                            <h6 id="blog-heading">
                                <a style={{ color: '#000' }} href="/blog/1">
                                    Stock market as a career
                                </a>
                            </h6>
                            <p className="card-admin">
                                <span><FaUser /></span>
                                Pranam Jain
                                <span><FaTags /></span>
                                Stock,   Educational
                            </p>
                            <p className="blogCard-body-para">
                                Of India's 1.36 billion people, only about 3.7% invest in equities, compared with about 12.7% in China
                                ......
                            </p>
                            <a href="/blog">
                                <button className="cardBody-button">More Blogs</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="blog-card">
                    <div className="blogCard-header" id="specific-image">
                        <div className="card-date">
                            <h5>29</h5>
                            <h4>May</h4>
                        </div>
                    </div>
                    <div className="blogCard-body">
                        <h6 id="blog-heading">
                            <a style={{ color: '#000' }} href="/blog/2">
                                How to find a great startup idea?
                            </a>
                        </h6>
                        <p className="card-admin">
                            <span><FaUser /></span>
                            Pranam Jain

                            <span><FaTags /></span>
                            StartUp
                        </p>
                        <p className="blogCard-body-para">
                            The main problem due to which many startups life is end is Lack of Experience and Weak management team
                            ......
                        </p>
                        <a href="/blog">
                            <button className="cardBody-button">More Blogs</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default bloghome