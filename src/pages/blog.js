import React from 'react'
import { FaInstagram, FaTwitter, FaRedditAlien } from 'react-icons/fa'


const blog = () => {
    return (
        <>
            <div className="blog-page">
                <div className="blogPage-cont">
                    <div className="blogPage-left">
                        <a href="blog/1"><img src='https://www.thebalance.com/thmb/nSshNovfSEiczCL1X59G3ZF24Wc=/2221x1350/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-595307834-594d67423df78cae81e0bce0.jpg' alt="blog" /></a>
                    </div>
                    <div className="blogPage-right">
                        <h2><a htef="blog/1">Stock market as a career!</a></h2>
                        <p>Stock market is a place where a common man can enter and make decent source of income without any big investment or load. It requires knowledge,analytical skills and most importantly psychology...</p>
                        <span>Stock Market<span className="black">,</span> Educational</span>
                        <p>Author | Pranam Jain | 14 min read</p>
                        <ul>
                            <li><a href="https://www.instagram.com/pranam_1603" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                            <li><a href="https://twitter.com/Pranamjain02" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
                            <li><a href="https://www.reddit.com/user/Pranamj" target="_blank" rel="noopener noreferrer"><FaRedditAlien /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="blogPage-cont">
                    <div className="blogPage-left">
                        <a href="blog/2"><img src='https://images.unsplash.com/photo-1550418290-a8d86ad674a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aWRlYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt="blog" /></a>
                    </div>
                    <div className="blogPage-right">
                        <h2><a href="blog/2">How to find a great startup idea?</a></h2>
                        <p>"Startup" this word is very fashionable and impressive between the today’s youngster and students irrespective of their profession...</p>
                        <span>StartUp<span className="black">,</span> Educational</span>
                        <p>Author | Pranam Jain | 17 min read</p>
                        <ul>
                            <li><a href="https://www.instagram.com/pranam_1603" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                            <li><a href="https://twitter.com/Pranamjain02" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
                            <li><a href="https://www.reddit.com/user/Pranamj" target="_blank" rel="noopener noreferrer"><FaRedditAlien /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default blog

