import React from 'react'
import {Button} from './Button'
import './HeroSection.css'
import HeroSectionAnimation from './HeroSectionAnimation'


function HeroSection() {
    return (
        <>
            <div className="hero">
                <div className="hero-wrapper">
                    <div className="hero-details">
                        <div className="hero-info">
                            <label htmlFor="hero-name">Hi, my name is</label>
                            <h1 id="hero-name">Stefan Cojocaru</h1>
                            <label htmlFor="hero-title">And I'm a</label>
                            <h1 id="hero-title">Web Developer</h1>
                        </div>
                        <div className="hero-buttons">
                            <Button 
                                link="http://github.com"
                                buttonStyle="btn--primary"
                                buttonSize= "btn--small"
                            >
                                <img src={process.env.PUBLIC_URL + '/images/github.svg'} alt="Logo"/>
                            </Button>
                            <Button 
                                link="http://github.com"
                                buttonStyle="btn--primary"
                                buttonSize= "btn--small"
                            >
                                <img src={process.env.PUBLIC_URL + '/images/linkedin.svg'} alt="Logo"/>
                            </Button>
                            <Button 
                                link="http://github.com"
                                buttonStyle="btn--primary"
                                buttonSize= "btn--small"
                            >
                                <img src={process.env.PUBLIC_URL + '/images/dribbble.svg'} alt="Logo"/>
                            </Button>
                            <Button 
                                link="http://github.com"
                                buttonStyle="btn--primary"
                                buttonSize= "btn--large"
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
        </>
    )
}

export default HeroSection
