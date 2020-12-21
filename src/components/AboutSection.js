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
            <Section title="About">
                <div className="about-row">
                    <AboutCard 
                        img="/images/web-dynamic.svg"
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
                        img="/images/web-responsive.svg"
                        title="Responsive"
                        text={responsiveText}
                    />
                    
                </div>
            </Section>
        </div>
    )
}

export default AboutSection
