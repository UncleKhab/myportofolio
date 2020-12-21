import React from 'react'
import './Section.css'
import * as Scroll from 'react-scroll'
const Element = Scroll.Element
function Section(props) {
    const {children, title, section_id} = props;
    return (
        <React.Fragment>
            <Element className="section" id={`${section_id}`} name={section_id}>
                <h1 className="section-title">{title}</h1>
                {children}
            </Element>
        </React.Fragment>
    )
}

export default Section
