import React from 'react'
import * as Scroll from 'react-scroll'
import {useState, useEffect} from 'react'
import './Navbar.css';

const ScrollLink = Scroll.Link
function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [scrolled, setScrolled] = useState(false)
    const closeMobileMenu = () => setClick(false);

    function debounce(func, wait = 10, immediate = true) {
        let timeout;
        return function() {
          let context = this, args = arguments;
          let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          let callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
    }
    function checkScroll() {
        let scrollPosition = window.scrollY
        if(scrollPosition > 100 && !scrolled){
            setScrolled(true)
        }
        if(scrollPosition < 100 && scrolled){
            setScrolled(false)
        }
    }
    useEffect(()=> {
        console.log(scrolled)
    },[scrolled])
    let navBarClasses = scrolled ? "navbar navbar-scrolled" : "navbar"
    let navLinkClasses = scrolled ? "nav-link nav-link-scrolled" : "nav-link"
    let navLogoClasses = scrolled ? "navbar-logo navbar-logo-scrolled": "navbar-logo"
    let navContainerClasses = scrolled ? "navbar-container navbar-container-scrolled" : "navbar-container"
    
    window.addEventListener('scroll', debounce(checkScroll));
    return (
        <div>
            <nav className={navBarClasses}>
                <div className={navContainerClasses}>
                    <a href='/' className={navLogoClasses} onClick={closeMobileMenu}>
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
                                className={navLinkClasses}
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
                                className={navLinkClasses}
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
                                className={navLinkClasses}
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
                                className={navLinkClasses}
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
