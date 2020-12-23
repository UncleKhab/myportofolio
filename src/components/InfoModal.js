import React, {useRef, useEffect, useCallback } from 'react';
import './InfoModal.css'
import {Button} from "./Button"
import ResponsivePlayer from './ResponsivePlayer';


export const InfoModal = ({showModal, setShowModal, content}) =>{
    const modalRef = useRef()
    const {title, techStack, descriptionList, featuresList, github, video_link, preview} = content;
    let key=0;
    const closeModal = e => {
        if(modalRef.current === e.target){
            setShowModal(false)
            document.body.style.overflow = showModal ? "" : "hidden";
        }
    }
    const keyPress = useCallback(e => {
        if(e.key === 'Escape' && showModal) {
            setShowModal(false)
            document.body.style.overflow = showModal ? "" : "hidden";
        }
    }, [setShowModal, showModal])
    function closeHandler() {
        setShowModal(false);
        document.body.style.overflow = showModal ? "" : "hidden";
    }
    useEffect(() => {
        document.addEventListener('keydown', keyPress)
        return () => {
            document.removeEventListener('keydown', keyPress)
        }
    }, [keyPress])

    
    return(
        <>
            {showModal 
            ? (
                <div className="modal-background" ref={modalRef} onClick={closeModal}>
                    <div className="modal-wrapper">
                        <div className="close-btn" onClick={closeHandler}>
                            <p>X</p>
                        </div>
                        <div className="modal-video">
                            <ResponsivePlayer url={video_link} />
                        </div>
                        <div className="modal-content">
                            <h1 className="modal-title">{title}</h1>
                            <h2 className="modal-techstack">{techStack}</h2>
                            <ul className="modal-description list">
                                {descriptionList.map(item => {key++;return <li key={key}>{item}</li>})}
                            </ul>
                            <ul className="modal-features list">
                                {featuresList.map(item => {key++;return <li key={key}>{item}</li>})}
                            </ul>
                            <div className="modal-buttons">
                                <Button 
                                    link={preview}
                                    buttonStyle="btn--secondary"
                                    buttonSize= "btn--large"
                                    target="_blank"
                                >
                                    Live Preview
                                </Button>
                                <Button 
                                    link={github}
                                    buttonStyle="btn--secondary"
                                    buttonSize= "btn--large"
                                    target="_blank"
                                >
                                    View Code
                                </Button>
                                <button className="btn btn--large mobile-back" onClick={closeHandler}> Back</button>
                            </div>
                        </div>
                    </div>
                </div>) 
            : null}
        </>
    )
}

