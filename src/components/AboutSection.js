import React from 'react'
import Section from './Section'
import AboutCard from './AboutCard'
import './AboutSection.css'
// web-fast.svg web-dinamic.svg web-intuitive.svg web-responsive.svg
function AboutSection() {
    const dynamicText = "Websites don't have to be static. I create dynamic websites that create a unique and plesant experience for the user."
    const fastText = "I value time and tend to express this in the projects I make. Fast Loading speed is one of my top priorities."
    const intuitiveText = "Ease of use is what keeps the users coming back to your service. I prioritize accessibility and navigation to create a simpole and effective user flow."
    const responsiveText = "Any website should look and feel amazing no matter what device is used to access it. Each project is developed with responsivness in mind."
    return (
        <div>
            <Section title="About"
                     section_id="about">
                <div className="about-row">
                    <AboutCard 
                        img="/images/dynamic-icon.svg"
                        title="Dynamic"
                        text={dynamicText}
                    />
                    <AboutCard 
                        img="/images/web-fast.svg"
                        title="Fast"
                        text={fastText}
                    />
                    <AboutCard 
                        img="/images/web-intuitive.svg"
                        title="Intuitive"
                        text={intuitiveText}
                    />
                    <AboutCard 
                        img="/images/responsive-icon.svg"
                        title="Responsive"
                        text={responsiveText}
                    />
                    
                </div>
                <div className="about-wrapper">
                    <div className="tech-stack">
                        <h1 className="tech-div-title">Technologies I work with</h1>
                        <div className="tech-row">
                            <div className="tech-card">
                                <h1 className="tech-title">React</h1>
                                <img src={process.env.PUBLIC_URL + '/images/techstack/web-react.svg'} alt="react-icon"/>
                            </div>
                            <div className="tech-card">
                                <h1 className="tech-title">HTML</h1>
                                <img src={process.env.PUBLIC_URL + '/images/techstack/web-html.svg'} alt="HTML-icon"/>
                            </div>
                            <div className="tech-card">
                                <h1 className="tech-title">CSS</h1>
                                <img src={process.env.PUBLIC_URL + '/images/techstack/web-css.svg'} alt="CSS-icon"/>
                            </div>
                            <div className="tech-card">
                                <h1 className="tech-title">Javascript</h1>
                                <img src={process.env.PUBLIC_URL + '/images/techstack/web-javascript.svg'} alt="Javascript-icon"/>
                            </div>
                            <div className="tech-card">
                                <h1 className="tech-title">Django</h1>
                                <img src={process.env.PUBLIC_URL + '/images/techstack/web-django.svg'} alt="Django-icon"/>
                            </div>
                            <div className="tech-card">
                                <h1 className="tech-title">Python</h1>
                                <img src={process.env.PUBLIC_URL + '/images/techstack/web-python.svg'} alt="Python-icon"/>
                            </div>
                            <div className="tech-card">
                                <h1 className="tech-title">Git</h1>
                                <img src={process.env.PUBLIC_URL + '/images/techstack/web-git.svg'} alt="Git-icon"/>
                            </div>
                            <div className="tech-card">
                                <h1 className="tech-title">Github</h1>
                                <img src={process.env.PUBLIC_URL + '/images/techstack/web-github.svg'} alt="Github-icon"/>
                            </div>
                            <div className="tech-card">
                                <h1 className="tech-title">Linux/Ubuntu</h1>
                                <img src={process.env.PUBLIC_URL + '/images/techstack/web-linux.svg'} alt="Linux/Ubuntu-icon"/>
                            </div>
                            <div className="tech-card">
                                <h1 className="tech-title">Adobe XD</h1>
                                <img src={process.env.PUBLIC_URL + '/images/techstack/web-adobe-xd.svg'} alt="Adobe XD icon"/>
                            </div>
                        </div>
                    </div>
                    <div className="my-info">
                        <img src="https://via.placeholder.com/150" alt="Profile" className="profile-picture"/>
                        <h2 className="profile-title">A litte bit about myself</h2>
                        <p className="profile-text">
                            I'm a Junior Web Developer passionate about designing and developing great projects. I am ambitious and self motivated learner that enjoys to learn something new everyday.
                        </p>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default AboutSection
