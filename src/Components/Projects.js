import React, { useState } from 'react';
import SingleProject from './SingleProject';
import ProjectsModal from './ProjectsModal';
import ProjectsIntroductionParallax from './ProjectsIntroductionParallax';

function Projects() {
    //projekty
    const projectsData = [
        {
            name: 'MUSTHAVE Webstore',
            icon: '👗',
            color: 'linear-gradient(#000, #000)',
            src: 'webstoreScroll.jpg',
            url: 'https://inspirer10.github.io/',
            id: 1,
        },

        {
            name: 'Prototype Vehicle',
            icon: '🏎️',
            color: 'linear-gradient(to right top, #00042f, #00031e)',
            src: 'prototypeVehicleScroll.jpg',
            url: 'https://inspirer10.github.io/prototype-vehicle/',
            id: 2,
        },

        {
            name: 'Tuscany Restaurant',
            icon: '🍴',
            color: 'linear-gradient(to right, #257600 calc(100% / 3), white calc(100% / 3), white calc(100% / 3 * 2), #CE2B37 calc(100% / 3 * 2))',
            src: 'tuscanyScroll.jpg',
            url: 'https://inspirer10.github.io/tuscany/',
            id: 3,
        },

        {
            name: 'Astra NFT',
            icon: '💸',
            color: 'linear-gradient(to right top, #9f4fec, #7f43cc, #6138ac, #452b8d, #2c1f6e, #221a60, #181453, #0e0f46, #0e0f46, #0e0f46, #0e0f46, #0e0f46)',
            src: 'astraNFTScroll.jpg',
            url: 'https://astra-nft-sigma.vercel.app/',
            id: 11,
        },

        {
            name: 'Expiration Reminder',
            icon: '🥑',
            color: 'linear-gradient(to right top, #360522, #050b36)',
            src: 'expirationReminderScroll.jpg',
            url: 'https://inspirer10.github.io/expiration-reminder/',
            id: 5,
        },

        {
            name: 'Subscriptions Tracker',
            icon: '📊',
            color: 'linear-gradient(to right top, #c8c8c8, #a9a9a9)',
            src: 'subscriptionsTrackerScroll.jpg',
            url: 'https://inspirer10.github.io/subscriptions-tracker',
            id: 6,
        },

        {
            name: 'Sushi Page',
            icon: '🍣',
            color: 'linear-gradient(to right top, #B0454A, #FFF0DE)',
            src: 'sushiScroll.jpg',
            url: 'https://inspirer10.github.io/sushi-page/',
            id: 13,
        },

        {
            name: 'Weather App',
            icon: '🌤️',
            color: 'linear-gradient(to right, #a5d0ff, #007bff)',
            src: 'img4.jpg',
            url: 'https://inspirer10.github.io/',
            id: 7,
        },

        {
            name: 'Clinify',
            icon: '⚕️',
            color: 'linear-gradient(to right top, #38ffb6, #5facff)',
            src: 'clinifyScroll.jpg',
            url: 'https://clinify-inspirer10.vercel.app/',
            id: 8,
        },

        {
            name: 'Fast Food',
            icon: '🍔',
            color: 'linear-gradient(to right top, #000000, #331019, #620f24, #920728, #c20023, #c20023, #c20023, #c20023, #920728, #620f24, #331019, #000000)',
            src: 'img4.jpg',
            url: 'https://fast-food-taupe.vercel.app/',
            id: 9,
        },

        {
            name: 'Marle di Pawele',
            icon: '🐶',
            color: 'linear-gradient(to right top, #c8c8c8, #c8c8c8)',
            src: 'img4.jpg',
            url: 'https://inspirer10.github.io/',
            id: 10,
        },

        {
            name: 'Astra Crypto',
            icon: '😀',
            color: 'linear-gradient(to right top, #000, #0f0f0f)',
            src: '',
            url: 'https://',
            id: 12,
        },

        {
            name: 'Volcanic Wonder',
            icon: '🌋',
            color: 'linear-gradient(to right top, #000000, #371c1f, #6a312c, #9b4d30, #c47229, #c47229, #c47229, #c47229, #9b4d30, #6a312c, #371c1f, #000000)',
            src: 'volcanic-wonderScroll.jpg',
            url: 'https://volcanic-wonder.vercel.app/',
            id: 14,
        },

        {
            name: 'Cars Rental',
            icon: '🚗',
            color: 'linear-gradient(to right top, #ffffff, #e6e2ff, #cbc6ff, #adabff, #8a91ff, #7886ff, #637bff, #4870ff, #4870ff, #4870ff, #4870ff, #4870ff)',
            src: 'cars-rentalScroll.jpg',
            url: 'https://cars-rental-inspirer10.vercel.app/',
            id: 15,
        },

        {
            name: 'Tic Tac Toe',
            icon: '🎲',
            color: 'linear-gradient(to right top, #58FF00, #241583)',
            src: 'ticTacToe-scroll.png',
            url: 'https://inspirer10.github.io/TicTacToe/',
            id: 16,
        },

        {
            name: 'Feed India',
            icon: '🥘',
            color: 'linear-gradient(to right, #0d1803, #0d1803)',
            src: 'img4.jpg',
            url: 'https://inspirer10.github.io/',
            id: 4,
        },

        {
            name: 'Pizza Restaurant',
            icon: '🍕',
            color: 'linear-gradient(to right top, #ff0000, #ffee00)',
            src: 'pizzaRestaurant-scroll.png',
            url: 'https://inspirer10.github.io/',
            id: 17,
        },

        {
            name: 'Hangman',
            icon: '🧍‍♂️',
            color: 'linear-gradient(to right top, #cecece, #cecece)',
            src: 'hangmanScroll.png',
            url: 'https://inspirer10.github.io/hangman-react/',
            id: 18,
        },
        {
            name: 'Project Name',
            icon: '😀',
            color: 'linear-gradient(to right top, #000, #fff)',
            src: '.png',
            url: 'https://inspirer10.github.io/',
            id: 19,
        },
    ];

    const [modal, setModal] = useState({
        active: false,
        index: 0,
        currentElement: '',
    });

    return (
        <section id='projects'>
            <article className='projects-gallery'>
                <div className='projects-gallery-container'>
                    {projectsData.map((project, i) => (
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href={project.url}
                            className='project-link'
                        >
                            <SingleProject
                                setModal={setModal}
                                index={i}
                                project={project}
                                key={i}
                            />
                        </a>
                    ))}
                </div>
                <ProjectsModal modal={modal} projects={projectsData} />
            </article>
        </section>
    );
}

export default Projects;
