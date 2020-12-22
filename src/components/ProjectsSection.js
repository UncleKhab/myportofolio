import React from 'react'
import Section from './Section'
import VideoCard from "./VideoCard"
import './ProjectsSection.css'

const content = {
    title: "SignUp- Form",
    techStack: "React/Django/HTML/CSS/Javascript",
    github:"https://github.com/UncleKhab/Daily-UI/tree/main/Day%201%20-%20SignUp%20Form",
    img_src:'/images/placeholder.png',
    descriptionList: [
        "SignUp form is a single page web-application that allows the users to register or sign-up to a web-service of their choice",
        "Using JS and Django the users are stored inside a custom database",
        "Using JS and Django the users are stored inside a custom database"
    ],
    featuresList:[
        "Create User",
        "Register User",
        "Sign-in as User",
        "Remove Users",
        "Change Passwords",
        "Send Messages",
        "Verify User",
        "Receive Messages",
    ]
}

function ProjectsSection() {
    return (
        <Section
            title="Projects"
            section_id="projects"  
        >
            <div className="cards-row">
                <VideoCard
                    content={content}
                />
                <VideoCard
                    content={content}
                />
                <VideoCard
                    content={content}
                />
            </div>
            <div className="cards-row">
                <VideoCard
                    content={content}
                />
                <VideoCard
                    content={content}
                />
                <VideoCard
                    content={content}
                />
            </div>
        </Section>
    )
}

export default ProjectsSection


