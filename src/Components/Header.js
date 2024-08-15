import React from 'react';
import { MdOutlineDownloading as DownloadIcon } from 'react-icons/md';
import { HiOutlineDocumentArrowDown } from 'react-icons/hi2';

function Header() {
    return (
        <header>
            <nav>
                <div className='person'>
                    <div
                        className='image'
                        style={{ backgroundImage: `url('/Avatar.jpg')` }}
                    >
                        <div className='dot' />
                    </div>

                    <div className='image_text'>
                        <p>Hubert Łepski</p>
                        <p className='availability'>Available for work</p>
                    </div>
                </div>

                <ul className='nav-links'>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>

                    <div className='header_button'>
                        <p className='primary'>GET CV</p>
                        <div className='secondary'>
                            <DownloadIcon />
                        </div>
                        <div className='rounded' />
                    </div>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
