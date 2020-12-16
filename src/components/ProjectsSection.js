import React from 'react'
import Section from './Section'
import VideoCard from "./VideoCard"
import './ProjectsSection.css'


function ProjectsSection() {
    return (
        <Section
            title="Projects"
            section_id="projects"  
        >
            <div className="cards-row">
                <VideoCard
                    img_src='/images/placeholder.png' 
                    title='Sign Up - Form' 
                    github="https://github.com/UncleKhab/Daily-UI/tree/main/Day%201%20-%20SignUp%20Form"
                />
                <VideoCard
                    img_src='/images/placeholder.png' 
                    title='Sign Up - Form' 
                    github="https://github.com/UncleKhab/Daily-UI/tree/main/Day%201%20-%20SignUp%20Form"
                />
                <VideoCard
                    img_src='/images/placeholder.png' 
                    title='Sign Up - Form' 
                    github="https://github.com/UncleKhab/Daily-UI/tree/main/Day%201%20-%20SignUp%20Form"
                />
            </div>
            <div className="cards-row">
                <VideoCard
                    img_src='/images/placeholder.png' 
                    title='Sign Up - Form' 
                    github="https://github.com/UncleKhab/Daily-UI/tree/main/Day%201%20-%20SignUp%20Form"
                />
                <VideoCard
                    img_src='/images/placeholder.png' 
                    title='Sign Up - Form' 
                    github="https://github.com/UncleKhab/Daily-UI/tree/main/Day%201%20-%20SignUp%20Form"
                />
                <VideoCard
                    img_src='/images/placeholder.png' 
                    title='Sign Up - Form' 
                    github="https://github.com/UncleKhab/Daily-UI/tree/main/Day%201%20-%20SignUp%20Form"
                />
            </div>
        </Section>
    )
}

export default ProjectsSection
