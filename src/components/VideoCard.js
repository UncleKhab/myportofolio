import React, {useState} from 'react'
import { Button } from './Button'
import {InfoModal} from './InfoModal'
import './VideoCard.css'

function VideoCard(props) {
    const {content} = props;
    const {img_src, title, github} = content;
    const [showModal, setShowModal] = useState(false)
    

    function handleInfo() {
        setShowModal(prev => !prev)
        document.body.style.overflow = showModal ? "" : "hidden";
        }
    return (
        <>
        <div className="card">
            <div className="card-wrapper" onClick={handleInfo}>
                <img className="card-img" src={process.env.PUBLIC_URL + `${img_src}`} alt="WalkIn" />
                <p className="card-title">{title}</p>
            </div>
            <div className="buttons">
                    <button 
                        className="btn btn--small btn--secondary"
                        onClick={handleInfo}
                    >
                        <img src={process.env.PUBLIC_URL + '/images/web-info.svg'} alt="Logo"/>
                    </button>
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
        <InfoModal showModal={showModal} setShowModal={setShowModal} content={content}>
                    
        </InfoModal>
        </>
    )
}

export default VideoCard

