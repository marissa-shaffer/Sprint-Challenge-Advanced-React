import React from 'react';
import {useDarkMode} from "../hooks/useDarkMode";

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode("dark-mode");
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <nav className="navbar">
            <h1 className="title">Women's World Cup Players</h1>
            <div className="dark-mode-toggle">
                <div 
                onClick={toggleMode} 
                className={darkMode ? 'toggle toggled' : 'toggle'}>  
                </div>
            </div>
        </nav>
    );

};

export default Navbar;