import React from 'react'

const mailbox = () => {
    return (
        <>
            <section className="mailUs" style={{ backgroundColor: '#fff' }}>
                <div>
                    <h2>Resume</h2>
                    <p>Drop your mail! Drop your mail! Drop your mail! Drop your mail!<br />Drop your mail! </p>
                </div>
                <div>
                    <form action="https://formspree.io/f/mzbyrbkn"
                        method="POST">
                        <input type="email" placeholder="Drop your mail here!" name="reply_to" />
                        <button type="submit">Send</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default mailbox
