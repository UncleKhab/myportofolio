import React from 'react'
import * as Scroll from 'react-scroll'
import {useState} from 'react'
import './Navbar.css';

const ScrollLink = Scroll.Link
function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <a href='/' className="navbar-logo" onClick={closeMobileMenu}>
                        <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="Logo"/>
                    </a>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active': 'nav-menu'}>
                        <li className="nav-item">
                            <ScrollLink 
                                to="home"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="nav-link"
                                onClick={closeMobileMenu}
                            >
                                Home
                            </ScrollLink>
                        </li>
                        <li className="nav-item">
                            <ScrollLink 
                                to="projects"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="nav-link"
                                onClick={closeMobileMenu}
                            >
                                Portofolio
                            </ScrollLink>
                        </li>
                        <li className="nav-item">
                            <ScrollLink 
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="nav-link"
                                onClick={closeMobileMenu}
                            >
                                About
                            </ScrollLink>
                        </li>
                        <li className="nav-item">
                            <ScrollLink 
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="nav-link"
                                onClick={closeMobileMenu}
                            >
                                Contact
                            </ScrollLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
