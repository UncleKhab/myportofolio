import React from 'react'
import Section from "./Section"
import "./Footer.css"
import {Button} from './Button'
function Footer() {
    return (
        <div className="footer">
            <Section section_id="footer">
                <div className="footer-wrapper">
                    <div className="footer-socials">
                    <img className="footer-logo" src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="Logo"/>
                    <div> 
                        <div className="footer-buttons hero-buttons">
                                <Button 
                                    link="http://github.com/UncleKhab"
                                    buttonStyle="btn--primary"
                                    buttonSize= "btn--small"
                                    target="_blank"
                                >
                                    <img src={process.env.PUBLIC_URL + '/images/github.svg'} alt="Logo"/>
                                </Button>
                                <Button 
                                    link="https://www.linkedin.com/in/stefan-alexandru-cojocaru-0263bb1b5/"
                                    buttonStyle="btn--primary"
                                    buttonSize= "btn--small"
                                    target="_blank"
                                >
                                    <img src={process.env.PUBLIC_URL + '/images/linkedin.svg'} alt="Logo"/>
                                </Button>
                                <Button 
                                    link="https://dribbble.com/UncleKhab"
                                    buttonStyle="btn--primary"
                                    buttonSize= "btn--small"
                                    target="_blank"
                                >
                                    <img src={process.env.PUBLIC_URL + '/images/dribbble.svg'} alt="Logo"/>
                                </Button>
                               
                            </div>
                    </div>
                    <img className="footer-logo" src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="Logo"/>
                    </div>
                    <div className="copy">
                        <p>@stefancojocaru.a@gmail.com ©2021</p>
                    </div>
                </div>
               
            </Section>
        </div>
    )
}

export default Footer
