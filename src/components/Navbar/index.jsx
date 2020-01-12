import React, { useContext } from 'react';
import { CharacterContext } from '../../context';
import logo from './logo.png';
import { NavLink, Link } from 'react-router-dom';
import './navbar.scss';

const NavbarLink = ({ route, title, icon }) => {
    return (
        <NavLink to={route} className='navbar-links-item' activeClassName='nav-active'>
            <i className={`${icon} fas navbar-links-item-icon`} />{title}
        </NavLink>
    );
}

function Navbar() {
    const { navbarOpen, navbarToggleHandler } = useContext(CharacterContext);
    return (
        <nav className="navbar">
            <div className="navbar-main">
                <div>
                    <i
                        className="fas fa-bars navbar-main-icon navbar-main-icon-bar icon"
                        onClick={navbarToggleHandler}
                    />
                    <Link to='/'>
                        <img
                            src={logo}
                            alt='main logo'
                            className='navbar-main-logo'
                        />
                    </Link>
                </div>
                <div>
                    <ul className={navbarOpen ? 'navbar-links show-nav' : 'navbar-links'}>
                        <li><NavbarLink icon='fa-home' route='/' title='HOME' /></li>
                        <li><NavbarLink icon='fa-users' route='/characters' title='CHARACTERS' /></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


export default Navbar;
