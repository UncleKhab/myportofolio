import React from 'react'
import Section from "./Section"
import "./Footer.css"

function Footer() {
    return (
        <div className="footer">
            <Section section_id="footer">
                <div className="footer-wrapper">
                    <img className="footer-logo" src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="Logo"/>
                    <img className="footer-logo" src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="Logo"/>
                </div>
            </Section>
        </div>
    )
}

export default Footer
