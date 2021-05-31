import React from 'react'
import { FaQuoteLeft, } from "react-icons/fa";
import Copyright from '../components/copyright'
import BlogFoteer from '../components/blogFoteer';
import image from '../Images/Screenshot_20210530-182809.jpg'
import {
    ScrollTop
} from "../components"

const Blog2 = () => {
    return (
        <>
            <div className="singleBlog-1">
                <div className="singleblog-header">
                    <img src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnVzaW5lc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt='stock' />
                </div>
                <main id="single-Blog">

                    <div className="singleBlog-body">
                        <h1>How to find a great startup idea?</h1>
                        <p style={{ textAlign: 'center' }}>
                            <i style={{ color: '#000', fontWeight: 'bold' }}>"Startup"</i> this word is very fashionable and impressive between the today’s youngster and students irrespective of their profession. Every student think about startup once in their life. It is everyone’s dream but the questions is IT IS THAT SIMPLE? answer is no it is not that simple. Running a startup is very exhausting & tough.
                        </p>
                        <p style={{ textAlign: 'center' }}>
                            The main problem due to which many startups life is end is Lack of Experience and Weak management team.
                        </p>
                        <h3>Tasks before starting a startup :</h3>
                        <ul>
                            <li>First people should read the case study about what wrong with the previous startups and learn from them.</li>
                            <li>People must clear about their vision and business idea because they spent their 3-4 years of their life on that idea.
                            </li>
                            <li>Most startups take a lot more time to get off the ground than you expect. Know where your living expenses for the first year will come from (savings, a job, spouse’s income, etc.).</li>
                        </ul>
                        <img className="sucess-stockImage" src="https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN0YXJ0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Success" />

                        <h2>What makes a business idea great :</h2>
                        <p>It is the ultimate question and one that is straightforward to answer.</p>
                        <p>You see, we have thousands of examples all around us. Whether it be a product in your home or service you’ve used. All those products and services started life as an idea.
                            Whatever the product, the idea inspired you to make a purchase. Consider that for a second. The inspiration I refer to might be a solution to a problem or a means to make your life easier. In the end, you spent money on it.</p>
                        <h2>Who to find a great business idea :</h2>
                        <p>From the above note you find how important to start a startup with great idea. This is great if you have a idea but if you blank about idea then you have to find it first. But now the question is How we can find a great business idea? Basically this varies from person to person different person has different point of view on it. </p>
                        <p>Every person have hundred of ideas in their mind but you has to shortlist them.</p>
                        <p>I think the best way to find a great idea is to take feedback survey about your idea because people give you a honest review on your idea and you has to know about what people and society want.</p>
                        <h3>Size, Growth, Competition framework  to short list your idea.</h3>
                        <img style={{ marginTop: '20px' }} src={image} alt="startupimage" />
                        <h3> 4 steps to find business idea :</h3>
                        <ul>
                            <li>Implement Strategic Foresight.</li>
                            <li>Solve a Personal Problem.</li>
                            <li>Follow Your Passion.</li>
                            <li>Improve Current Technologies.</li>
                        </ul>
                        <h4 className="quote"><FaQuoteLeft /></h4>
                        <h4><i>“Be the first or the best”</i></h4>
                        <h2>Start With the Right Idea :
                        </h2>
                        <p>If you take one thing from reading this, it is to start with the right idea.I wish this help you to find a startup idea.
                            <span>“Take the time to confirm your idea, get some feedback from potential customers. This is the true test as to whether your idea is a good one or a bad one.” </span>
                        </p>
                        <p>
                            Understand what or who your competition is. In an ideal world, avoid any competition with big companies. Always work on question, what makes you different? Why should I buy from you instead of the other guy?
                        </p>
                        <p>
                            These questions are good to ask. They are a good way to test your idea and to try You will certainly have them. For then, you might just have a good business idea for your startup.
                        </p>
                    </div>
                    <BlogFoteer />

                </main>
            </div>
            <ScrollTop />
            <div style={{ backgroundColor: '#3a3e3b' }}>
                <Copyright />
            </div>
        </>
    )
}

export default Blog2