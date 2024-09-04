'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useCursor } from './CursorContext';
import { BsBoxArrowUpRight } from 'react-icons/bs';

function About() {
    const { setIsDark } = useCursor();

    const handleMouseEnter = () => {
        setIsDark(true);
    };

    const handleMouseLeave = () => {
        setIsDark(false);
    };

    const technologiesSlider = [
        { name: 'html' },
        { name: 'css' },
        { name: 'sass' },
        { name: 'git' },

        { name: 'js' },
        { name: 'react' },
        { name: 'redux' },
        { name: 'router' },

        { name: 'ts' },
        { name: 'next' },

        { name: 'mui' },
        { name: 'bootstrap' },

        { name: 'node' },
        { name: 'express' },
        { name: 'mongo' },

        { name: 'rwd' },
        { name: 'uxui' },
        { name: 'vsc' },
    ];

    const technologies = [
        { name: 'html', backgroundColor: '#DC5029', color: '#FFF' },
        { name: 'css', backgroundColor: '#264DE4', color: '#FFF' },
        { name: 'sass', backgroundColor: '#CC6699', color: '#FFF' },
        { name: 'git', backgroundColor: '#8ED25E', color: '#000' },
        { name: 'js', backgroundColor: '#F0DC4E', color: '#000' },
        { name: 'react', backgroundColor: '#0DD8FF', color: '#000' },
        { name: 'next', backgroundColor: '#60CFCA', color: '#000' },
        { name: 'ts', backgroundColor: 'royalblue', color: '#FFF' },
        { name: 'react router', backgroundColor: '#272425', color: '#FFF' },
        { name: 'redux toolkit', backgroundColor: '#764ABE', color: '#FFF' },
        { name: 'node', backgroundColor: '#8AC600', color: '#000' },
        { name: 'express', backgroundColor: '#363636', color: '#FFF' },
        { name: 'mongoDB', backgroundColor: '#4EAA3F', color: '#FFF' },
        { name: 'mui', backgroundColor: '#007DFE', color: '#FFF' },
        { name: 'bootstrap', backgroundColor: '#7B09F7', color: '#FFF' },
        { name: 'rwd', backgroundColor: '#000', color: '#FFF' },
        { name: 'ux/ui', backgroundColor: '#000', color: '#FFF' },
        { name: 'vsc', backgroundColor: '#1F9CEF', color: '#FFF' },
    ];

    const slideUp = {
        initial: {
            y: '100%',
        },
        open: (i) => ({
            y: '0%',
            transition: { duration: 0.75, delay: 0.025 * i },
        }),
        closed: {
            y: '100%',
            transition: { duration: 0.5 },
        },
    };

    const opacity = {
        initial: {
            opacity: 0,
        },
        open: {
            opacity: 1,
            transition: { duration: 0.85, delay: 0.375 },
        },
        closed: {
            opacity: 0,
            transition: { duration: 0.3 },
        },
    };

    /*NOTE
    I am open to both remote work and in-office opportunities worldwide, including relocation. I believe that this kind of flexibility allows me to be a great fit for your team and meet the needs of your organization

    */

    const phrase = `I am open to various opportunities and eager to learn new technologies, frameworks, and tools. I am flexible in working both remotely and in-office, and willing to relocate as needed`;

    const phrase2 = `I enjoy meeting new people and have no issues communicating in English, allowing me to adapt easily to different work environments and contribute effectively to diverse teams`;

    const phrase3 = `I am a creative developer with a strong can-do attitude who loves solving problems and finding new solutions. I learn quickly, work well in a team, and manage my time effectively`;

    const phrase4 = `I pay attention to details, communicate clearly, and adapt easily to new challenges. I'm always eager to learn about new technologies and enjoy suggesting ideas to others`;

    /*
        Creative thinker and problem solver are where my mind wanders using my knowldege and passion for design as my medium.

        As a dedicated and passionate web developer, I am always looking for new opportunities to expand my skills and take on challenging projects


        As a highly determined and fast-learning developer, I am a creative thinker and problem solver with great communication skills, and the ability to easily adapt to new environments and challenges

 */

    const description = useRef(null);
    const isInView = useInView(description);

    const cardsContainer = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardsContainer,
        offset: ['start end', 'end start'],
    });

    const scrollParalax = useTransform(scrollYProgress, [0, 1], [300, -50]);
    const scrollParalaxFast = useTransform(
        scrollYProgress,
        [0, 1],
        [400, -125]
    );
    return (
        <section
            data-bgcolor='#fff'
            className='aboutMe-section section'
            id='about'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className='text-container'>
                {/* <div className='text-content-wrapper'></div>*/}
                <article className='description_text' ref={description}>
                    <p className='splitted'>
                        {phrase.split(' ').map((word, index) => {
                            return (
                                <span className='mask' key={index + word}>
                                    <motion.span
                                        variants={slideUp}
                                        custom={index}
                                        animate={isInView ? 'open' : 'closed'}
                                        key={index}
                                    >
                                        {word}
                                    </motion.span>
                                </span>
                            );
                        })}
                    </p>
                    <p className='splitted'>
                        {phrase2.split(' ').map((word, index) => {
                            return (
                                <span className='mask' key={index + word}>
                                    <motion.span
                                        variants={slideUp}
                                        custom={index}
                                        animate={isInView ? 'open' : 'closed'}
                                        key={index}
                                    >
                                        {word}
                                    </motion.span>
                                </span>
                            );
                        })}
                    </p>
                    <p className='splitted'>
                        {phrase3.split(' ').map((word, index) => {
                            return (
                                <span className='mask' key={index + word}>
                                    <motion.span
                                        variants={slideUp}
                                        custom={index}
                                        animate={isInView ? 'open' : 'closed'}
                                        key={index}
                                    >
                                        {word}
                                    </motion.span>
                                </span>
                            );
                        })}
                    </p>
                    <p className='splitted'>
                        {phrase4.split(' ').map((word, index) => {
                            return (
                                <span className='mask' key={index + word}>
                                    <motion.span
                                        variants={slideUp}
                                        custom={index}
                                        animate={isInView ? 'open' : 'closed'}
                                        key={index}
                                    >
                                        {word}
                                    </motion.span>
                                </span>
                            );
                        })}
                    </p>
                </article>
            </div>
            <article className='cards-wrapper' ref={cardsContainer}>
                <motion.div className='card' style={{ y: scrollParalaxFast }}>
                    <div className='top-wrapper'>
                        <h6>01</h6>
                        <BsBoxArrowUpRight className='arrow-icon' />
                    </div>

                    <h5>Growth</h5>
                    <div className='content'>
                        <p>
                            As a person focused on self-improvement, I
                            constantly advance my programming skills, which
                            enables me to come up with creative solutions to
                            various web design-related problems
                        </p>

                        <p>
                            As a passionate web developer, I am always looking
                            for new opportunities to expand my skills and take
                            on challenging projects.
                        </p>
                    </div>
                </motion.div>
                <motion.div className='card' style={{ y: scrollParalax }}>
                    <div className='top-wrapper'>
                        <h6>02</h6>
                        <BsBoxArrowUpRight className='arrow-icon' />
                    </div>

                    <h5>Teamwork</h5>
                    <div className='content'>
                        <p>
                            I have mastered the skill of paying attention to
                            details. I treat each component of a site with care
                            to ensure the highest quality and functionality of
                            the final product
                        </p>

                        <p>
                            I enjoy discussing other people's ideas and
                            suggesting my own solutions, which makes me an
                            effective team player
                        </p>
                    </div>
                </motion.div>
                <motion.div className='card' style={{ y: scrollParalaxFast }}>
                    <div className='top-wrapper'>
                        <h6>03</h6>
                        <BsBoxArrowUpRight className='arrow-icon' />
                    </div>

                    <h5>Adaptability</h5>
                    <div className='content'>
                        <p>
                            I'm comfortable working both remotely and in-office,
                            and I'm open to relocating as needed. This
                            flexibility helps me adapt to various work settings
                            and contribute effectively to diverse teams
                        </p>
                        <p>
                            My proactive approach and eagerness to learn make me
                            a great fit to any organization looking for a
                            versatile team member
                        </p>
                        {/* <p>seeking a dynamic team member.</p> */}
                    </div>
                </motion.div>
                <motion.div className='card' style={{ y: scrollParalax }}>
                    <div className='top-wrapper'>
                        <h6>04</h6>
                        <BsBoxArrowUpRight className='arrow-icon' />
                    </div>

                    <h5>Skills</h5>
                    <div className='content'>
                        <p>
                            Proficient in HTML, CSS, SCSS, RWD, Git, JavaScript,
                            React, Next.js, React Router, and Redux Toolkit. I
                            am also familiar with Tailwind, Bootstrap, MUI,
                            Node, Express, TypeScript, MongoDB and jQuery, which
                            enables me to handle a wide range of development
                            tasks
                        </p>
                    </div>
                </motion.div>
            </article>
            {/*//! Technologies Slider */}
            <div className='technologies-slider'>
                <div className='slider-items'>
                    {technologiesSlider.map(({ name }, index) => (
                        <Image
                            src={`/technologies/${name}.png`}
                            width={375}
                            height={375}
                            alt='technology thumbnail'
                            key={index}
                        />
                    ))}
                </div>

                <div aria-hidden='true' className='slider-items'>
                    {technologiesSlider.map(({ name }, index) => (
                        <Image
                            src={`/technologies/${name}.png`}
                            width={375}
                            height={375}
                            alt='technology thumbnail'
                            key={index}
                        />
                    ))}
                </div>
                <div className='mask'></div>
            </div>
            <div className='skills-showcase-wrapper'>
                <h5>My main skills</h5>
                <aside>
                    {technologies.map(({ name, backgroundColor, color }) => (
                        <div className='button' key={name}>
                            <p className='primary'>{name}</p>
                            <div className='secondary'>
                                <p style={{ color }}>{name}</p>
                                <div style={{ backgroundColor }} />
                            </div>
                        </div>
                    ))}
                </aside>
            </div>
        </section>
    );
}

export default About;
