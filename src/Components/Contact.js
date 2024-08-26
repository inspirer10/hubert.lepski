import Link from 'next/link';
import React from 'react';
import { HiOutlineArrowUpRight as Arrow } from 'react-icons/hi2';
import { CgPhone as PhoneIcon1 } from 'react-icons/cg';
import { IoIosMail as MailIcon1 } from 'react-icons/io';
import { LiaPhoneVolumeSolid as PhoneIcon } from 'react-icons/lia';
import { IoMailOutline as MailIcon } from 'react-icons/io5';
import { MdOutlineDownloading as DownloadIcon } from 'react-icons/md';
function Contact() {
    return (
        <section
            className='contact_section section'
            id='contact'
            data-bgcolor='#FFF'
        >
            <article>
                <p>Feel free to</p>
                <h2>Contact</h2>
                <p>me</p>
            </article>

            <div className='links-wrapper'>
                <Link href='tel:+48697819866' className='link'>
                    PHONE <Arrow className='arrow-icon' />
                    <PhoneIcon className='background-icon' />
                    <p>(+48) 697 819 866</p>
                </Link>

                <a
                    href='CV_HŁ.pdf'
                    download='Hubert Łepski CV.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <button>
                        Download CV <DownloadIcon className='icon' />
                    </button>
                </a>

                <Link href='mailto:hubertlepsky@gmail.com' className='link'>
                    E-MAIL <Arrow className='arrow-icon' />
                    <MailIcon className='background-icon' />
                    <p>hubertlepsky@gmail.com</p>
                </Link>
            </div>
        </section>
    );
}

export default Contact;
