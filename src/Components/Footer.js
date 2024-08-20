import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { MdArrowOutward as Arrow } from 'react-icons/md';

function Footer() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return (
        <footer>
            <div className='footer_content-container'>
                <div className='footer_content-wrapper'>
                    <main>
                        <motion.svg
                            id='footer_svg'
                            strokeDasharray='2061'
                            initial={{ strokeDashoffset: 2061 }}
                            whileInView={{
                                strokeDashoffset: 0,
                                transition: {
                                    duration: 2.75,
                                    ease: 'easeIn',
                                    delay: 0.4,
                                },
                            }}
                            //Animation starts when 35% of footer is visible
                            viewport={{ once: true, amount: 0.35 }}
                            width='671'
                            height='417'
                            viewBox='0 0 671 417'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <rect width='671' height='417' fill='#1e1e1e' />
                            <rect width='671' height='417' fill='black' />
                            <path
                                d='M251.044 62.9746C250.61 67.7466 248.293 72.5618 246.823 77.0705C244.133 85.32 241.671 93.6356 238.884 101.854C229.244 130.284 216.962 158.08 203.645 184.958C197.126 198.113 191.335 211.963 183.198 224.225C175.966 235.122 163.515 243.213 151.134 247.072C141.704 250.012 131.035 250.037 122.903 243.897C111.709 235.444 105.451 220.755 103.115 207.302C101.522 198.124 100.508 186.762 103.967 177.832C107.036 169.91 117.874 169.761 124.917 169.352C146.798 168.081 168.762 170.187 190.633 170.707C217.524 171.346 244.348 169.173 270.755 163.969C299.613 158.282 339.343 148.645 350.605 117.228C355.446 103.724 355.38 88.746 357.382 74.6695C357.455 74.1566 359.458 66.1055 357.46 71.5715C355.016 78.2569 352.288 84.8258 349.56 91.3986C343.722 105.462 337.657 119.453 332.753 133.88C324.557 157.993 317.947 182.519 308.821 206.334C297.306 236.383 281.782 265.938 262.351 291.683C260.123 294.636 257.83 294.713 261.151 292.303C272.209 284.28 285.204 278.806 297.669 273.483C361.612 246.172 428.325 224.18 496.675 210.903C509.525 208.407 523.113 204.714 536.213 203.778C536.828 203.734 535.062 204.222 534.471 204.398C521.799 208.16 508.865 211.119 496.017 214.195C453.93 224.271 411.413 231.738 368.845 239.482C295.356 252.852 221.386 266.655 146.642 270.423C134.254 271.048 121.501 271.817 109.079 271.082C98.3115 270.444 109.013 265.601 113.106 263.414C158.69 239.06 209.091 224.151 258.208 208.774C323.651 188.285 389.124 167.417 455.279 149.331C480.36 142.474 505.692 134.76 531.257 129.891'
                                stroke='white'
                                stroke-width='7'
                                stroke-linecap='round'
                            />
                        </motion.svg>

                        <div>
                            <h3 className='heading'>
                                Feel free to <span>contact</span> me
                            </h3>
                            <span>&</span>
                            <p className='subHeading'>
                                And let's work <span>together!</span>
                            </p>
                        </div>
                    </main>

                    <div className='footer-links'>
                        <div className='links-wrapper'>
                            <Link
                                href='https://www.behance.net/inspirer10'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='footer-link'
                            >
                                Behance <Arrow className='arrow-icon' />
                            </Link>
                            <Link
                                href='tel:697819866'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='footer-link'
                            >
                                Phone <Arrow className='arrow-icon' />
                            </Link>
                        </div>
                        <div className='links-wrapper'>
                            <Link
                                href='https://github.com/inspirer10'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='footer-link'
                            >
                                GitHub <Arrow className='arrow-icon' />
                            </Link>
                            <Link
                                href='https://www.behance.net/LINKEDIN'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='footer-link'
                            >
                                LinkedIn <Arrow className='arrow-icon' />
                            </Link>
                        </div>
                    </div>

                    <summary>
                        <p className='info'>
                            Wrocław, Poland {hours}
                            <span className='colon'>:</span>
                            {minutes}
                        </p>

                        <Link
                            className='footer-email-link'
                            href='mailto:hubertlepsky@gmail.com'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            hubertlepsky@gmail.com
                        </Link>
                    </summary>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
