import React, { useEffect, useRef, useState } from 'react';
import { MdOutlineDownloading as DownloadIcon } from 'react-icons/md';
import Link from 'next/link';

function Header() {
    const [showNavbar, setShowNavbar] = useState(true);
    let lastScrollTop = useRef(0);
    const navbar = useRef(null);

    const handleHideNavbar = () => {
        setShowNavbar(false);
    };

    const handleScroll = () => {
        if (window.innerWidth > 1050) {
            const scrollTop =
                window.scrollY || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                setShowNavbar(false); //Scroll w dół - ukryj navbar
            } else {
                setShowNavbar(true); //Scroll w górę - pokaż navbar
            }
            lastScrollTop = scrollTop;
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    {
        /*
        <div data-scroll data-scroll-speed={1}>
            <h3>testttt</h3>
        </div>
    */
    }
    return (
        <header>
            <nav
                className={`${showNavbar ? 'navbar--show' : 'navbar--hide'}`}
                ref={navbar}
            >
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
                    <Link
                        className='link'
                        onClick={handleHideNavbar}
                        href='#about'
                    >
                        About
                    </Link>
                    <Link
                        className='link'
                        onClick={handleHideNavbar}
                        href='#projects'
                    >
                        Projects
                    </Link>
                    <Link
                        className='link'
                        onClick={handleHideNavbar}
                        href='#contact'
                    >
                        Contact
                    </Link>

                    <a
                        href='/CV/CV.pdf'
                        download='Hubert Łepski CV.pdf'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <div className='header_button'>
                            <p className='primary'>GET CV</p>
                            <div className='secondary'>
                                <DownloadIcon />
                            </div>
                            <div className='rounded' />
                        </div>
                    </a>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
