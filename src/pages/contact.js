import React from 'react'
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const contact = () => {
    return (
        <>
            <div style={{ backgroundColor: '#caffcc' }}>
                <h1 id="form-h1">Contact US</h1>
                <div id="underline"></div>
                <div className="contact-section" style={{ backgroundColor: '#caffcc' }}>
                    <article className="contact">
                        <div className="contact-info">
                            <h2><span><FaLocationArrow /></span>ADDRESS</h2>
                            <p id="h4">Nehru Nagar Police Station 462003 Bhopal, Madhya Pradesh </p>
                        </div>
                        <div className="contact-info">
                            <h2><span><IoMdMail /></span>EMAIL</h2>
                            <p id="h4">Pranamjain02@gmail.com</p>
                        </div>
                        <div className="contact-info">
                            <h2><span><FaPhone /></span>PHONE</h2>
                            <p id="h4">+91 8269866601</p>
                        </div>
                    </article>
                    <article className='form-section '>
                        <form action="https://formspree.io/f/mleabeqz"
                            method="POST">
                            <input type="text" placeholder="NAME" name="name" />
                            <input type="text" placeholder="EMAIL" name="email" />
                            <textarea rows='8' type="text" placeholder="MESSAGE" name="message" />
                            <button type="submit" >send</button>
                        </form>
                    </article>
                </div>
            </div>
        </>
    )
}

export default contact
