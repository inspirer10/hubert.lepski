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
        <section className='contact_section' id='contact'>
            <article>
                <p>Feel free to</p>
                <h2>Contact</h2>
                <p>me</p>
            </article>

            <div className='links-wrapper'>
                <Link href='mailto:hubertlepsky@gmail.com' className='link'>
                    PHONE <Arrow className='arrow-icon' />
                    <PhoneIcon className='background-icon' />
                </Link>

                <button>
                    Download CV <DownloadIcon className='icon' />
                </button>

                <Link href='tel:+48697819866' className='link'>
                    E-MAIL <Arrow className='arrow-icon' />
                    <MailIcon className='background-icon' />
                </Link>
            </div>
        </section>
    );
}

export default Contact;
