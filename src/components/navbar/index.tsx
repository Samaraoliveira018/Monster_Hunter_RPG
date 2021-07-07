
import React from 'react';
import {Link} from 'react-router-dom';

 import  './style.css';

const Navbar: React.FC = ({children}) => {
    return (
        <div>
        <nav className='header'>
            <div className="menu"></div>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
            <ul className='nav-list'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">Game</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
            </ul>
        </nav>
        {children}
        </div>
        );
}

export default Navbar;