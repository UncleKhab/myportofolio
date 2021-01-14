import React, { useState, useEffect } from 'react';
import './Alert.css';


function Alert(props) {
    const [message,setMessage] = useState("");
    const [style, setStyle] = useState("");
    const setShowAlert = props.setShowAlert;
    useEffect(() =>{
        setMessage(props.message);
        setStyle(props.style);
        setTimeout(() => {
            setShowAlert(false)
        }, 3000);
    }, [])
    return (
        <div className="alert-wrapper">
            <div className={`alert-box ${style}`}>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Alert
