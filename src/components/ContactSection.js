import React, {useState, useEffect} from 'react'
import emailjs from 'emailjs-com'
import Section from './Section'
import {USER_KEY, TEMPLATE, SERVICE} from "./Sett.js"
import './ContactSection.css'
import Alert from './Alert'
function ContactSection() {
    const [showAlert, setShowAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState("Message Sent Succesfully!")
    const [alertStyle, setAlertStyle] = useState("alert-green")
    function sendForm(e){
        e.preventDefault()
        let content = e.target.content.value;
        if(content.length < 10){
            setShowAlert(true);
            setAlertMessage("Your message needs to be at least 10 characters long")
            setAlertStyle("alert-red")
        }
        else{
            emailjs.sendForm(SERVICE, TEMPLATE, e.target, USER_KEY)
            .then((result) => {
                setShowAlert(true)
                setAlertMessage("Message Sent Succesfully!");
                setAlertStyle("alert-green");
            }, (error) => {
                console.log(error.text);
            })
            e.target.reset() 
        }
        
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
            {showAlert ? <Alert style={alertStyle} message={alertMessage} setShowAlert={setShowAlert} /> : null}
        </Section>
    )
}

export default ContactSection
