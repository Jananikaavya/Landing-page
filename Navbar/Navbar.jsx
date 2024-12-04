import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from './logo.png';
import Menu_icon from './menu-icon.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  
    const [sticky, setSticky] = useState(false);
    

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    const [mobileMenu,setMobileMenu] =useState(false);
    const toggleMenu = ()=>{
      mobileMenu ? setMobileMenu(false): setMobileMenu(true);
      
    }
    

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="Logo" className="logo" />
            
            <ul className={mobileMenu ?'':'.hide-mobile-menu'}>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='programs' smooth={true} offset={0} duration={500}>Program</Link></li>
                <li><Link to='About' smooth={true} offset={0} duration={150}>About us</Link></li>
                <li><Link to='campus' smooth={true} offset={0} duration={-260}>Campus</Link></li>
                <li><Link to='testimonials' smooth={true} offset={0} duration={-260}>Testimonials</Link></li>
                <li><Link to='contact' smooth={true} offset={0} duration={-260}><button className='btn'>Contact</button></Link></li>
            </ul>
            <img src={Menu_icon}alt="" className='menu-icon'onClick={toggleMenu}/>
        </nav>
    );
};

export default Navbar;
