import React, { useState, useEffect } from 'react';

import '../styles/navbar.scss'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    return (
        <nav>
            <div className="container1">
                <div className="logo">
                    <a href="/">
                        Logo
                    </a>
                </div>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <div className={`menu-icon ${menuOpen ? 'open' : ''}`}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>
                <ul className={`menu ${menuOpen ? 'open' : ''}`}>
                    <li>
                        <a href="/" className={currentPath === '/' ? 'active' : ''}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/leaderBoard" className={currentPath === '/leaderBoard' ? 'active' : ''}>
                            LeaderBoard
                        </a>
                    </li>
            
                    <li>
                        <a href="/leaderBoard" className={currentPath === '/signUp' ? 'active' : ''}>
                            SignUp
                        </a>
                    </li>

                    <li>
                        <a href="/quiz" className={currentPath === '/quiz' ? 'active' : ''}>
                            Quiz App
                        </a>
                    </li>


                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
