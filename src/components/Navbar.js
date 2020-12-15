import React from 'react'
import { Link } from 'react-router-dom'
import {useEffect, useState} from 'react'
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        <img src={process.env.PUBLIC_URL + '/images/mobile-logo-top.svg'} alt="Logo"/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active': 'nav-menu'}>
                        <li className="nav-item">
                            <Link 
                                to="/"
                                className="nav-link"
                                onClick={closeMobileMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/"
                                className="nav-link"
                                onClick={closeMobileMenu}
                            >
                                Portofolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/"
                                className="nav-link"
                                onClick={closeMobileMenu}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/"
                                className="nav-link"
                                onClick={closeMobileMenu}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
