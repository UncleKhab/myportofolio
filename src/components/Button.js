import React from 'react'
import './Button.css'

const STYLES = ['btn--primary', 'btn--secondary']
const SIZES = ['btn--small', 'btn--medium', 'btn--large']
export const Button = ({children, link, target, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize)
        ? buttonSize
        : SIZES[0]
    return(
        
            <a href={link} className={`btn ${checkButtonStyle} ${checkButtonSize}`} target={target}>
               {children}
            </a>
       
    )
}