import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import SearchBar from './SearchBar';
import Buttons from './Buttons';
import { FaBars } from "react-icons/fa";

export default function Navbar() {

    const headerRef = useRef(null);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <header ref={headerRef}>
            <nav>
                <div className='logo'>
                    <h1>Movies Spot</h1>
                </div>
                <div className="navLinks">
                    <ul>
                        <li><Link style={{ textDecoration: 'none', color: 'white' }} to="/"> ANASAYFA </Link></li>
                        <li><Link style={{ textDecoration: 'none', color: 'white' }} to="/movie"> FILMLER </Link></li>
                        <li><Link style={{ textDecoration: 'none', color: 'white' }} to="/tv"> DİZİLER </Link></li>
                    </ul>
                    <SearchBar />
                    <Buttons type="outlined" icon={<FaBars/>}/>
                </div>
            </nav>
        </header >
    )
}
