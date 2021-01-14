import React from 'react'
import {Button} from './Button'
import './HeroSection.css'
import HeroSectionAnimation from './HeroSectionAnimation'
import * as Scroll from 'react-scroll'
const Element = Scroll.Element


function HeroSection() {
    return (
        <>
           
        <React.Fragment>
            <Element id="home" name="home">
                <div className="hero">
                    <div className="hero-wrapper">
                        <div className="hero-details">
                            <div className="hero-info">
                                <label htmlFor="hero-name">Hi, my name is</label>
                                <h1 id="hero-name">Stefan Cojocaru</h1>
                                <label htmlFor="hero-title">And I'm a</label>
                                <h1 id="hero-title">Web Developer</h1>
                                <h1 id="hero-description">
                                    Design and Develop from your dreams into the real world.
                                </h1>
                            </div>
                            <div className="hero-buttons">
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
                                <Button 
                                    link="https://docs.google.com/document/d/1Jvcz2qEdstocQIbQKYDRI8QuskH-6V0_58VCs6OgY24/edit?usp=sharing"
                                    buttonStyle="btn--primary"
                                    buttonSize= "btn--large"
                                    target="_blank"
                                >
                                    Resume
                                </Button>
                            </div>
                        </div>
                        <div className="hero-image">
                            <HeroSectionAnimation/>
                        </div>
                    </div>
                </div>
            </Element>
        </React.Fragment>
        </>
    )
}

export default HeroSection
