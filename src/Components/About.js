'use client';
import { useInView, motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import React, { useRef } from 'react';

function About() {
    const technologies = [
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

    const surface1 = useRef(null);
    const surface2 = useRef(null);
    const surface3 = useRef(null);
    const surface4 = useRef(null);

    let requestAnimationFrameId = null;
    let xForce = 0;
    let yForce = 0;
    const easing = 0.08;
    const speed = 0.01;

    const manageMouseMove = (e) => {
        const { movementX, movementY } = e;
        xForce += movementX * speed;
        yForce += movementY * speed;
        if (requestAnimationFrameId == null) {
            requestAnimationFrameId = requestAnimationFrame(animate);
        }
    };

    const lerp = (start, target, amount) =>
        start * (1 - amount) + target * amount;

    const animate = () => {
        xForce = lerp(xForce, 0, easing);
        yForce = lerp(yForce, 0, easing);

        gsap.set(surface1.current, {
            x: `+=${xForce * 0.7}`,
            y: `+=${yForce * 0.7}`,
        });
        gsap.set(surface2.current, {
            x: `+=${xForce * 0.425}`,
            y: `+=${yForce * 0.425}`,
        });
        gsap.set(surface3.current, {
            x: `+=${xForce * 0.25}`,
            y: `+=${yForce * 0.25}`,
        });
        gsap.set(surface4.current, {
            x: `+=${xForce * 0.625}`,
            y: `+=${yForce * 0.625}`,
        });

        if (Math.abs(xForce) < 0.01) xForce = 0;
        if (Math.abs(yForce) < 0.01) yForce = 0;
        if (xForce != 0 || yForce != 0) {
            requestAnimationFrame(animate);
        } else {
            cancelAnimationFrame(requestAnimationFrameId);
            requestAnimationFrameId = null;
        }
    };

    const handleMouseLeave = (e) => {
        //console.log(e);
    };

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
            transition: { duration: 0.85, delay: 0.35 },
        },
        closed: {
            opacity: 0,
            transition: { duration: 0.35 },
        },
    };

    const phrase =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque optio accusantium, temporibus voluptatibus enim laboriosam voluptas ad eum hic nisi et.';
    const description = useRef(null);
    const isInView = useInView(description);

    return (
        <section
            className='aboutMe-section'
            id='about'
            onMouseMove={(e) => {
                manageMouseMove(e);
            }}
            onMouseLeave={(e) => {
                handleMouseLeave(e);
            }}
        >
            {/*  <div ref={surface1} className='surface'>
                <Image
                    src='/technologies/express.png'
                    alt='thumbnail'
                    width={300}
                    height={100}
                />

                <Image
                    src='/technologies/sass.png'
                    alt='thumbnail'
                    width={300}
                    height={100}
                />

                <Image
                    src='/technologies/css.png'
                    alt='thumbnail'
                    width={225}
                    height={100}
                />
            </div>
            <div ref={surface2} className='surface'>
                <Image
                    src='/technologies/html.png'
                    alt='thumbnail'
                    width={250}
                    height={100}
                />

                <Image
                    src='/technologies/next.png'
                    alt='thumbnail'
                    width={200}
                    height={100}
                />

                <Image
                    src='/technologies/rwd.png'
                    alt='thumbnail'
                    width={225}
                    height={100}
                />
            </div>
            <div ref={surface3} className='surface'>
                <Image
                    src='/technologies/react.png'
                    alt='thumbnail'
                    width={150}
                    height={100}
                />

                <Image
                    src='/technologies/ts.png'
                    alt='thumbnail'
                    width={200}
                    height={100}
                />

                <Image
                    src='/technologies/mongo.png'
                    alt='thumbnail'
                    width={200}
                    height={100}
                />
                <Image
                    src='/technologies/redux.png'
                    alt='thumbnail'
                    width={200}
                    height={100}
                />
            </div>
            <div ref={surface4} className='surface'>
                <Image
                    src='/technologies/node.png'
                    alt='thumbnail'
                    width={150}
                    height={100}
                />

                <Image
                    src='/technologies/js.png'
                    alt='thumbnail'
                    width={200}
                    height={100}
                />

                <Image
                    src='/technologies/git.png'
                    alt='thumbnail'
                    width={200}
                    height={100}
                />

                <Image
                    src='/technologies/vsc.png'
                    alt='thumbnail'
                    width={200}
                    height={100}
                />
            </div>*/}

            <div className='text-container'>
                <div className='text-content-wrapper'>
                    <p ref={description}>
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

                    <motion.p
                        variants={opacity}
                        animate={isInView ? 'open' : 'closed'}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Neque optio accusantium, temporibus voluptatibus enim
                        laboriosam voluptas ad eum hic nisi et.
                    </motion.p>
                </div>
            </div>

            <div className='technologies-slider'>
                <div class='slider-items'>
                    {technologies.map(({ name }) => (
                        <Image
                            src={`/technologies/${name}.png`}
                            width={150}
                            height={150}
                            alt='technology thumbnail'
                        />
                    ))}
                </div>

                <div aria-hidden='true' class='slider-items'>
                    {technologies.map(({ name }) => (
                        <Image
                            src={`/technologies/${name}.png`}
                            width={150}
                            height={150}
                            alt='technology thumbnail'
                        />
                    ))}
                </div>
                <div class='mask'></div>
            </div>
        </section>
    );
}

export default About;
