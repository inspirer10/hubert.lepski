'use client';
import { useInView, motion, color } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

import { FaLocationArrow } from 'react-icons/fa6';
import { BsBoxArrowUpRight } from 'react-icons/bs';
function About() {
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

    /*const phrase =
        'Creative thinker and problem solver are where my mind wanders using my knowldege and passion for design as my medium.';*/

    const phrase =
        'As a person focused on self-learning and self-improvement, I constantly advance my programming skills, which enables me to come up with creative solutions to various web design-related problems';

    const description = useRef(null);
    const isInView = useInView(description);

    return (
        <section
            data-bgcolor='#fff'
            className='aboutMe-section section'
            id='about'
        >
            <div className='text-container'>
                <div className='text-content-wrapper'>
                    <p ref={description} className='splitted'>
                        {phrase.split(' ').map((word, index) => {
                            return (
                                <span className='mask'>
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

                    <article className='cards-wrapper'>
                        <div className='card'>
                            <div className='top-wrapper'>
                                <h6>01</h6>
                                <BsBoxArrowUpRight className='arrow-icon' />
                            </div>

                            <h5>Some</h5>
                            <div className='content'>
                                <p>
                                    As a person focused on self-learning and
                                    self-improvement, I constantly advance my
                                    programming skills, which enables me to come
                                    up with creative solutions to various web
                                    design-related problems
                                </p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='top-wrapper'>
                                <h6>02</h6>
                                <BsBoxArrowUpRight className='arrow-icon' />
                            </div>

                            <h5>Info</h5>
                            <div className='content'>
                                <p>
                                    Since I like discussing other people's ideas
                                    and suggesting my own solutions, I consider
                                    myself as a good team player
                                </p>
                                <p>
                                    I mastered the skill of being attentive to
                                    details to create well-structured websites
                                    by paying attention to their smallest parts
                                </p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='top-wrapper'>
                                <h6>03</h6>
                                <BsBoxArrowUpRight className='arrow-icon' />
                            </div>

                            <h5>About</h5>
                            <div className='content'>
                                <p>
                                    On top of that I am a very ambitious person
                                    who is willing to learn new technologies and
                                    regularly improve my skills
                                </p>
                                <p>
                                    While developing websites I think critically
                                    and I know how to overcome potential
                                    difficulties
                                </p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='top-wrapper'>
                                <h6>04</h6>
                                <BsBoxArrowUpRight className='arrow-icon' />
                            </div>

                            <h5>Me</h5>
                            <div className='content'>
                                <p>
                                    I have practical knwoledge of HTML, CSS,
                                    SCSS, RWD, GIT, JS, React, Next.JS, React
                                    Router & Redux Toolkit and I'm familiar with
                                    Bootstrap, MUI, TypeScript, jQuery
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            {/*//! Technologies Slider */}
            <div className='technologies-slider'>
                <div class='slider-items'>
                    {technologiesSlider.map(({ name }) => (
                        <Image
                            src={`/technologies/${name}.png`}
                            width={375}
                            height={375}
                            alt='technology thumbnail'
                        />
                    ))}
                </div>

                <div aria-hidden='true' class='slider-items'>
                    {technologiesSlider.map(({ name }) => (
                        <Image
                            src={`/technologies/${name}.png`}
                            width={375}
                            height={375}
                            alt='technology thumbnail'
                        />
                    ))}
                </div>
                <div class='mask'></div>
            </div>
            <div className='skills-showcase-wrapper'>
                <h5>My main skills</h5>
                <aside>
                    {technologies.map(({ name, backgroundColor, color }) => (
                        <div className='button'>
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
