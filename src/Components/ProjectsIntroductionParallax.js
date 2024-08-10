import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

function ProjectsIntroductionParallax() {
    const zoomParallaxContainer = useRef(null);
    const { scrollYProgress } = useScroll({
        target: zoomParallaxContainer,
        offset: ['start start', 'end end'],
    });

    const scaleName = useTransform(
        scrollYProgress,
        [0, 0.4, 0.9, 1],
        [0, 0.6, 0.8, 1.25]
    );

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);

    const pictures = [
        {
            src: `/img3.jpg`,
            scale: scale4,
            additionalText: true,
        },
        {
            src: `/img3.jpg`,
            scale: scale5,
        },
        {
            src: `/img3.jpg`,
            scale: scale6,
        },
        {
            src: `/img3.jpg`,
            scale: scale5,
        },
        {
            src: `/img3.jpg`,
            scale: scale6,
        },
        {
            src: `/img3.jpg`,
            scale: scale8,
        },
        {
            src: `/img3.jpg`,
            scale: scale8,
        },
        {
            src: `/img3.jpg`,
            scale: scale5,
        },
    ];

    return (
        <section
            ref={zoomParallaxContainer}
            className='zoom-parallax-container'
        >
            <div className='sticky-div'>
                {pictures.map(({ src, scale, additionalText }, index) => (
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
                                        PROJECTS
                                    </motion.div>
                                </div>
                            ) : null}
                            <Image src={src} alt='project thumbnail' fill />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default ProjectsIntroductionParallax;
