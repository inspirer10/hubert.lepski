import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

function AboutParallax() {
    const zoomParallaxContainer = useRef(null);
    const { scrollYProgress } = useScroll({
        target: zoomParallaxContainer,
        offset: ['start start', 'end end'],
    });

    const scaleName = useTransform(
        scrollYProgress,
        [0, 0.2, 0.5, 1],
        [0.6, 0.7, 0.9, 1.25]
    );

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);

    const pictures = [
        {
            src: `/aboutMe/rocket.gif`, //center
            scale: scale4,
            additionalText: true,
            fit: 'contain',
        },
        {
            src: `/aboutMe/logo.jpg`, //góra
            scale: scale5,
            fit: 'cover',
        },
        {
            src: `/aboutMe/pizza.jpg`, //lewy górny
            scale: scale6,
            fit: 'cover',
        },
        {
            src: `/Avatar.jpg`, //prawy
            src: `/aboutMe/starWars.jpg`, //prawy
            scale: scale5,
            fit: 'contain',
        },
        {
            src: `/aboutMe/wroclaw.jpg`, // dół
            scale: scale6,
            fit: 'contain',
        },
        {
            src: `/aboutMe/uncharted.jpg`, //lewy dolny
            scale: scale8,
            fit: 'cover',
        },
        {
            src: `/aboutMe/venezia.png`, //prawy dolny
            scale: scale8,
            fit: 'contain',
        },
        {
            src: `/aboutMe/ASP.jpg`, //prawy górny
            scale: scale5,
            fit: 'cover',
        },
    ];

    return (
        <section
            ref={zoomParallaxContainer}
            className='zoom-parallax-container'
        >
            <div className='sticky-div'>
                {pictures.map(({ src, scale, additionalText, fit }, index) => (
                    <motion.div
                        style={{ scale: scale }}
                        className='wrapper'
                        key={index}
                    >
                        <div className='img-container'>
                            {additionalText ? (
                                <div className='name-wrapper'>
                                    <motion.div
                                        style={{ scale: scaleName }}
                                        className='brand-name'
                                    >
                                        ABOUT ME
                                    </motion.div>
                                </div>
                            ) : null}
                            <Image
                                src={src}
                                style={{ objectFit: fit }}
                                alt='project thumbnail'
                                fill
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default AboutParallax;
