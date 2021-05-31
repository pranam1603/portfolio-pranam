import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import BlogFoteer from '../components/blogFoteer';
import Copyright from '../components/copyright'
import {
    ScrollTop
} from "../components"

const Blog1 = () => {
    return (
        <>
            <div className="singleBlog-1">
                <div className="singleblog-header">
                    <img src="https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt='stock' />
                </div>
                <main id="single-Blog">

                    <div className="singleBlog-body">
                        <h1>Stock market as a career</h1>
                        <p>
                            Stock market is a place where a common man can enter and make decent source of income without any big investment or load. It requires knowledge,analytical skills and most importantly psychology. Market is growing year by year so as the potential of making money in it.
                        </p>
                        <h4 className="writer">
                            Of India's 1.36 billion people, only about 3.7% invest in equities, compared with about 12.7% in China, according to stock depository data on the number of investment accounts (and assuming one account per person). ... The relentless stock market rally since March 2020 has drawn in more investors.
                        </h4>
                        <h3>Perks of choosing stock market as a career :</h3>
                        <ul>
                            <li>Flexibility of time</li>
                            <li>make your career on your on pace
                            </li>
                            <li>Be your own bose</li>
                            <li>Earning potential is huge</li>
                            <li>It develops person as more practical thinker</li>
                        </ul>
                        <img className="sucess-stockImage" src="https://images.unsplash.com/photo-1586021280718-53fbadcb65a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" alt="Success" />
                        <h4 className="quote"><FaQuoteLeft /></h4>
                        <h4><i>Rule #1 Don't Lose Money</i></h4>
                        <h4><i>Rule #2 Don't Forget Rule #1</i></h4>
                        <h4 className="writer">WARREN BUFFET</h4>
                        <h2>Requirement for becoming successful trader:</h2>
                        <p>You just need a PC and a phone and you are ready to make your career as a stock trader. These are just the physical asset which one should have to trade properly but most importantly your discipline, risk management and perfect trading setup make you successful one . You can treat it like business or hobby if you treat it like business so it will pay you like business or treat it like hobby it will pay you like hobby.</p>
                        <h2>Eligibility criteria for trading:</h2>
                        <p>Traders mostly are self-taught breed. However, a professional trader needs to understand the basics of finance to start with. A college degree is a prerequisite nowadays—at least if you want to take trading seriously or want to pursue a trading related career in a respectable financial institution or corporation.</p>
                        <h3>Let us first focus on some numbers</h3>
                        <ul>
                            <li>Indian population according to a simple google search is 133 Crores or 1330 Million.</li>
                            <li>Unique bank accounts till date 20 Crores or 200 Million. Just 17% of the total population.</li>
                            <li>People investing in Mutual funds, equities, bonds and similar instruments is mere 2%.</li>
                        </ul>
                        <h3>Job role for student in stock market:</h3>
                        <ul>
                            <li>Stockbroker</li>
                            <li>Financial Advisor</li>
                            <li>Portfolio Management Services </li>
                            <li>Research Analyst</li>
                            <li>Investment Advisor</li>
                        </ul>
                        <h2>Why only few people get succes as a trader :
                        </h2>
                        <p>Stock market is a zero sum game means money only change pockets. there is saying in market that only 10% of the people who trade in market get succes and able to make handsome money while other lose their capital. It also means that money of 90% is being transferred to 10%. Don't get demotivate from above statement , take it as motivation to come under those 10%, do the thing which that 10% are doing and see yourself becoming elite trader.
                            <span>“One of the very nice things about investing in the stock market is that you learn about all different aspects of the economy. It’s your window into a very large world.” </span>
                        </p>
                    </div>
                    <BlogFoteer />

                </main>
                <ScrollTop />
            </div>
            <div style={{ backgroundColor: '#3a3e3b' }}>
                <Copyright />
            </div>
        </>
    )
}

export default Blog1