import React from 'react'
import './AboutCard.css'
function AboutCard(props) {
    const {title, img, text} = props
    return (
        <div className="about-card">
            <h1 className="about-card-title">{title}</h1>
            <img src={process.env.PUBLIC_URL + `${img}`} alt="Dynamic"/>
            <p>{text}</p>
        </div>
    )
}

export default AboutCard
