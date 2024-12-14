import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from './logo.png';
import Menu_icon from './menu-icon.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    // Sticky navbar effect on scroll
    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Toggle mobile menu
    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="Logo" className="logo" />

            {/* Mobile and Desktop Menu */}
            <ul className={mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}>
                <li>
                    <Link to="hero" smooth={true} offset={0} duration={500} onClick={toggleMenu}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="programs" smooth={true} offset={0} duration={500} onClick={toggleMenu}>
                        Program
                    </Link>
                </li>
                <li>
                    <Link to="About" smooth={true} offset={0} duration={500} onClick={toggleMenu}>
                        About us
                    </Link>
                </li>
                <li>
                    <Link to="campus" smooth={true} offset={0} duration={500} onClick={toggleMenu}>
                        Campus
                    </Link>
                </li>
                <li>
                    <Link to="testimonials" smooth={true} offset={0} duration={500} onClick={toggleMenu}>
                        Testimonials
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} offset={0} duration={500} onClick={toggleMenu}>
                        <button className="btn">Contact</button>
                    </Link>
                </li>
            </ul>

            {/* Mobile Menu Icon */}
            <img src={Menu_icon} alt="Menu Icon" className="menu-icon" onClick={toggleMenu} />
        </nav>
    );
};

export default Navbar;
