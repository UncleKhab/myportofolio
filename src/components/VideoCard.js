import React from 'react'
import { Button } from './Button'
import './VideoCard.css'

function VideoCard(props) {
    const {img_src, title, github} = props
    return (
        <div className="card">
            <div className="card-wrapper">
                <img className="card-img" src={process.env.PUBLIC_URL + `${img_src}`} alt="WalkIn"/>
                <p className="card-title">{title}</p>
            </div>
            <div className="buttons">
                    <Button 
                        link="/"
                        buttonStyle="btn--secondary"
                        buttonSize= "btn--small"
                        target="_blank"
                    >
                        <img src={process.env.PUBLIC_URL + '/images/web-info.svg'} alt="Logo"/>
                    </Button>
                    <Button 
                        link={github}
                        buttonStyle="btn--secondary"
                        buttonSize= "btn--small"
                        target="_blank"
                    >
                        <img src={process.env.PUBLIC_URL + '/images/github.svg'} alt="Logo"/>
                    </Button>
                    <Button 
                        link="/"
                        buttonStyle="btn--secondary"
                        buttonSize= "btn--large"
                        target="_blank"
                    >
                        Preview
                    </Button>
                </div>
        </div>
    )
}

export default VideoCard

