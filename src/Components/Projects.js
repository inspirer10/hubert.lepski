import React, { useRef, useState } from 'react';
import { motion, useTransform, useScroll, color } from 'framer-motion';
import Image from 'next/image';
import SingleProject from './SingleProject';
import ProjectsModal from './ProjectsModal';

//import ProjectsIntroductionParallax from './ProjectsIntroductionParallax';

function Projects() {
    const container = useRef(null);
    //projekty - tablia obiektów
    const projectsData = [
        {
            name: 'MUSTHAVE Webstore',
            icon: '👗',
            color: 'linear-gradient(#000, #000)',
            src: 'webstoreScroll.jpg',
            url: 'https://musthave.vercel.app/',
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
            src: 'astraNFTScroll.png',
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
            name: 'Astra Crypto',
            icon: '📈',
            color: 'linear-gradient(to right top, #000, #0f0f0f)',
            src: 'astraCrypto-scroll.png',
            url: 'https://astra-crypto.vercel.app/',
            id: 12,
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
            name: 'Home Store',
            icon: '🛋️',
            color: 'linear-gradient(to right top, #e38643, #fff)',
            src: 'myHome-scroll.jpg',
            url: 'https://inspirer10.github.io/my-home/',
            id: 19,
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
            name: 'Volcanic Wonder',
            icon: '🌋',
            color: 'linear-gradient(to right top, #000000, #371c1f, #6a312c, #9b4d30, #c47229, #c47229, #c47229, #c47229, #9b4d30, #6a312c, #371c1f, #000000)',
            src: 'volcanic-wonderScroll.jpg',
            url: 'https://volcanic-wonder.vercel.app/',
            id: 14,
        },

        {
            name: 'Weather App',
            icon: '🌤️',
            color: 'linear-gradient(to right, #a5d0ff, #007bff)',
            src: 'weatherApp.jpg',
            url: 'https://inspirer10.github.io/weather-app/',
            id: 7,
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
            url: 'https://inspirer10.github.io/marledipawele/',
            id: 10,
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
            src: 'feed-india.png',
            url: 'https://inspirer10.github.io/feed-india/',
            id: 4,
        },

        {
            name: 'Pizza Restaurant',
            icon: '🍕',
            color: 'linear-gradient(to right top, #ff0000, #ffee00)',
            src: 'pizzaRestaurant-Scroll.jpg',
            url: 'https://inspirer10.github.io/restaurant-page/',
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
    ];

    const [modal, setModal] = useState({
        active: false,
        index: 0,
        currentElement: '',
    });

    const slider1 = [
        {
            color: '#000',
            src: '/slider/astraCrypto.png',
        },
        {
            color: '#4C493F',
            src: '/slider/myHome.png',
        },
        {
            color: '#FFFFFF',
            src: '/slider/tuscany.png',
        },
        {
            color: '#000',
            src: '/slider/musthave.png',
        },
    ];
    const slider2 = [
        {
            color: '#4871FF',
            src: '/slider/cars.png',
        },
        {
            color: '#05070B',
            src: '/slider/astraNFT.png',
        },
        {
            color: '#FFFFFF',

            src: '/slider/car.png',
        },
        {
            color: '#FEF0DE',
            src: '/slider/sushi.png',
        },
    ];

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start'],
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 250]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

    return (
        <>
            <article ref={container} className='slidingImages'>
                <motion.div style={{ x: x1 }} className='slider'>
                    {slider1.map(({ color, src }, index) => {
                        return (
                            <div
                                className='project'
                                style={{ backgroundColor: color }}
                            >
                                <div key={index} className='imageContainer'>
                                    <Image
                                        src={`${src}`}
                                        alt='project thumbnail'
                                        fill
                                    />
                                </div>
                            </div>
                        );
                    })}
                </motion.div>

                <motion.div style={{ x: x2 }} className='slider'>
                    {slider2.map(({ color, src }, index) => {
                        return (
                            <div
                                className='project'
                                style={{ backgroundColor: color }}
                            >
                                <div key={index} className='imageContainer'>
                                    <Image
                                        src={`${src}`}
                                        alt='project thumbnail'
                                        fill
                                    />
                                </div>
                            </div>
                        );
                    })}
                </motion.div>

                <motion.div style={{ height }} className={'circleContainer'}>
                    <div className={'circle'}></div>
                </motion.div>
            </article>

            <section id='projects' className='section' data-bgcolor='#000'>
                <article className='projects-gallery'>
                    <p className='fixed_projects'>PROJECTS</p>
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
        </>
    );
}

export default Projects;
