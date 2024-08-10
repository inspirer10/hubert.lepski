import Link from 'next/link';
import React from 'react';
import { MdArrowOutward as Arrow } from 'react-icons/md';

function Contact() {
    return (
        <section className='contact_section'>
            <h2>Contact</h2>
            <div className='links-wrapper'>
                <Link href='mailto:hubertlepsky@gmail.com' className='link'>
                    PHONE <Arrow className='icon' />
                </Link>

                <Link href='tel:+48697819866' className='link'>
                    E-MAIL <Arrow className='icon' />
                </Link>
            </div>
        </section>
    );
}

export default Contact;
