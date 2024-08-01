import React from 'react';

import { FaArrowRightLong } from 'react-icons/fa6';
import { MdOutlineDownloading } from 'react-icons/md';
function Header() {
    return (
        <header>
            <nav>
                <div className='person'>
                    <img src='icon.png' alt='person thumbnial' />
                    <p>Hubert Łepski</p>
                </div>

                <ul className='nav-links'>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>Contact</li>

                    <div className='header_button'>
                        <p className='primary'>GET CV</p>
                        <div className='secondary'>
                            <MdOutlineDownloading />
                        </div>
                        <div className='rounded' />
                    </div>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
