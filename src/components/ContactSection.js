import React from 'react'
import emailjs, { sendForm } from 'emailjs-com'
import Section from './Section'
import './ContactSection.css'
function ContactSection() {
    function sendForm(e){
        e.preventDefault()

        emailjs.sendForm('service_sqh8n2v', 'template_yvfvjrz', e.target, 'user_EhQa4PM513sLtK6WLSukf')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        console.log("sent");
    }
    return (
        <Section title="Contact Me"
                 section_id="contact">
            <form className="contact-form" onSubmit={sendForm}>
                <div className="info">
                    <div className="name inputArea">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name"/>
                    </div>
                    <div className="email inputArea">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email"/>
                    </div>
                </div>
                <div className="subject inputArea">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" name="subject" id="subject"/>
                </div>
                <div className="message inputArea">
                    <label htmlFor="content">Message</label>
                    <textarea name="content" id="content" cols="30" rows="10"></textarea>
                </div>
                <button className="send-btn btn btn--secondary btn--large"type="submit">Send</button>
            </form>
        </Section>
    )
}

export default ContactSection
