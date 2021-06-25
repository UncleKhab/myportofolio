import React from 'react'
import Section from './Section'
import VideoCard from "./VideoCard"
import './ProjectsSection.css'


const projects = {
    personalwebsite: {
        title: "Portofolio Website",
        techStack: "React/Email.js",
        github:"https://github.com/UncleKhab/myportofolio",
        preview: 'http://stefancojocaru.com',
        video_link: 'https://youtu.be/9rbo8cmceHU',
        img_src:'/images/personalwebsite.png',
        descriptionList: [
            "Implemented a design I made in adobe XD using React/CSS and Email.js service.",
            "This project's purpose is to have a personalized website for my other projects.",
            "I plan to continue the development and implement a Blog Section using a Django REST api with mySQL database to store the articles."
        ],
        featuresList: [
            "Showcase Projects",
            "Contact Form",
            "Responsive",
            "SVG animation",
        ], 
    },
    dequest: {
        title: "DeQuest - Quizzapp",
        techStack: "Javascript/Bootstrap/Flask",
        github:"https://github.com/UncleKhab/DeQuest-CS50x-Final-Project",
        preview: '/',
        video_link: 'https://www.youtube.com/watch?v=T6NVu2T3Rc0&t=13s&ab_channel=UncleKhab',
        img_src:'/images/dequest.png',
        descriptionList: [
            "This WebApp is developed using Flask and Javascript with Bootstrap 4 components.",
            "It's purpose is to allow users to create/read/update/delete quizzes for other users.",
            "I uses a Hashing algorithm to store passwords inside a SQL database."
        ],
        featuresList: [
            "Sign-in / Register",
            "CRUD a quiz",
            "Take a quiz",
            "Check leaderboards",
            "Manage your profile"
        ], 
    },
    catmail: {
        title: "CatMail - Mailing Service",
        techStack: "Javascript/Django",
        github:"https://github.com/UncleKhab/gotMail",
        preview: '/',
        video_link: 'https://www.youtube.com/watch?v=rVSqF1fTV70&t=2s&ab_channel=UncleKhab',
        img_src:'/images/catmail.png',
        descriptionList: [
            "Designed in AdobeXD and developed using Django and Javascript.",
            "This app it's an email service that allows users to send and receive messages.",
            "It makes API calls to a Django application and handles the data using Javascript."
        ],
        featuresList: [
            "Sign-in / Register",
            "Send emails",
            "Receive emails",
            "Reply to emails",
            "Archive emails",
            "Check mailboxes"
        ], 
    },
    enchanter: {
        title: "EnChanter - Social Network",
        techStack: "Javascript/Django",
        github:"https://github.com/UncleKhab/enChanter",
        preview: '/',
        video_link: 'https://youtu.be/h2yX2Uxg9Ds',
        img_src:'/images/enchanter.png',
        descriptionList: [
            "A twitter-like app where users can post and follow eachother.",
            "I created a Django API and a plesant user interface using Javascript.",
            "The design is made in AdobeXD"
        ],
        featuresList: [
            "Sign-in / Register",
            "Follow users",
            "Like/Unlike Posts",
            "Create/Edit Posts",
            "See User Profiles"
        ], 
    },
    commerce: {
        title: "Auctions Platform",
        techStack: "Javascript/Bootstrap/Django",
        github:"https://github.com/UncleKhab/cs50commerce",
        preview: '/',
        video_link: 'https://www.youtube.com/watch?v=p_TOX7rlF4E&ab_channel=UncleKhab',
        img_src:'/images/auctions.png',
        descriptionList: [
            "An eBay-like e-commerce auctioning website.",
            "It uses Django and Javascript with Bootstrap Components.",
            "Allows users to create and manage listing or bid on other available listings."
        ],
        featuresList: [
            "Sign-in / Register",
            "Create Auction",
            "Bid on Listings",
            "Create Watchlist",
            "Comment on Listings",
            
        ], 
    },
    heedpoint : {
        title: "HeedPoint - Coming Soon!",
        techStack: "React/Django REST/Scss",
        github:"https://github.com/UncleKhab/heedpointone",
        preview: '/',
        video_link: 'https://www.youtube.com/watch?v=yqWX86uT5jM&ab_channel=MRTPC',
        img_src:'/images/comingsoon.png',
        descriptionList: [
            "A Project Management app still in development.",
            "This App will be made using Django REST framework with a React Frontend.",
            "Users will be able to create projects, set deadline and add other people to help them complete the tasks."
        ],
        featuresList: [
            "Sign-in / Register",
            "CRUD Project",
            "Set Deadlines",
            "Add Members",
            "Add Tasks",
            "Review Tasks",
            
        ], 
    },
}
function ProjectsSection() {
    return (
        <Section
            title="Projects"
            section_id="projects"  
        >
            <div className="cards-row">
                <VideoCard
                    content={projects.enchanter}
                />
                <VideoCard
                    content={projects.personalwebsite}
                />
                <VideoCard
                    content={projects.catmail}
                />
                <VideoCard
                    content={projects.dequest}
                />
                <VideoCard
                    content={projects.commerce}
                />
                <VideoCard
                    content={projects.heedpoint}
                />
            </div>
        </Section>
    )
}

export default ProjectsSection


