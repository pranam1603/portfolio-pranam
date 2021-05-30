import React from 'react'
import document from '../Images/RESUME.docx'
import { BsArrowDown } from "react-icons/bs";

const mailbox = () => {
    return (
        <>
            <section className="mailUs" style={{ backgroundColor: '#fff' }}>
                <div>
                    <h2>Let's Work Together</h2>
                    <p>Drop your mail and i will contact you for working together! We will work together and rock together. I am waiting for your mail. </p>
                    <p style={{ fontWeight: 'bolder' }}><span><BsArrowDown /></span> Download my Resume from here  </p>
                    <a href={document} download="Pranam resume" >Download Resume</a>
                </div>
                <div>
                    <form action="https://formspree.io/f/mzbyrbkn"
                        method="POST">
                        <input type="email" placeholder="Drop mail for work together!" name="reply_to" />
                        <button type="submit">Send</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default mailbox
