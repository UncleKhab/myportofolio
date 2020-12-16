import React from 'react'
import './Section.css'
import * as Scroll from 'react-scroll'
const Element = Scroll.Element
function Section(props) {
    const {children, title, section_id} = props;
    return (
        <React.Fragment>
            <Element class="section" id={`${section_id}`} name={section_id}>
                <h1 class="section-title">{title}</h1>
                {children}
            </Element>
        </React.Fragment>
    )
}

export default Section
