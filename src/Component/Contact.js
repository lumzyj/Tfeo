import React from "react"

export default function Contact(){
    return(
        <section className="contact-section">
                <h2>Get In Touch</h2>
            <div className="contact-container">
                <div className="contact-i">
                <img src="../images/Get in touch.gif" alt="cool" className="slider"/>
                </div>
                <form className="text-area">
                <label for="fname">Full name</label><br></br>
                <input type="text" id="fname" name="fname"/><br></br>
                <label for="Email">Your Email Address</label><br></br>
                <input type="text" id="email" /><br></br>
                <label for="phonenubmer">Your Phone number</label><br></br>
                <input type="text" id="number"/><br></br>
                <label for="message">Type a message</label><br></br>
                <textarea id="Textarea" rows="15" cols="105" ></textarea><br></br>
                <input type="submit" value="Send Message"/>
                </form>
            </div>
        </section>
            
    
    )
}