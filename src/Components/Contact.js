import Link from 'next/link';
import React from 'react';
import { HiOutlineArrowUpRight as Arrow } from 'react-icons/hi2';
import { CgPhone as PhoneIcon } from 'react-icons/cg';
import { IoIosMail as MailIcon } from 'react-icons/io';
import { LiaPhoneVolumeSolid } from 'react-icons/lia';
import { IoMailOutline } from 'react-icons/io5';

function Contact() {
    return (
        <section className='contact_section'>
            <article>
                <p>Feel free to</p>
                <h2>Contact</h2>
                <p>me</p>
            </article>

            <div className='links-wrapper'>
                <Link href='mailto:hubertlepsky@gmail.com' className='link'>
                    PHONE <Arrow className='arrow-icon' />
                    <LiaPhoneVolumeSolid className='background-icon' />
                </Link>

                <p>Download CV</p>

                <Link href='tel:+48697819866' className='link'>
                    E-MAIL <Arrow className='arrow-icon' />
                    <IoMailOutline className='background-icon' />
                </Link>
            </div>
        </section>
    );
}

export default Contact;
