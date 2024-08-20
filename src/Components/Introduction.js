import React, { useEffect, useRef } from 'react';
import {
    animate,
    motion,
    useInView,
    useMotionTemplate,
    useMotionValue,
} from 'framer-motion';
import { BsMouse3 } from 'react-icons/bs';

const COLORS = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C'];

function Introduction() {
    const color = useMotionValue(COLORS[0]);
    const backgroundImage = useMotionTemplate`radial-gradient(125% 150% at 25% 0%, #020617 50%, ${color})`;

    useEffect(() => {
        animate(color, COLORS, {
            ease: 'easeInOut',
            duration: 10,
            repeat: Infinity,
            repeatType: 'mirror',
        });
    }, []);

    //stars canvas
    useEffect(() => {
        const canvas = document.querySelector('.stars');
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        function random(min, max) {
            return min + Math.random() * (max + 1 - min);
        }

        window.addEventListener('resize', function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            stars();
        });

        function stars() {
            const canvasSize = canvas.width * canvas.height;
            const starsFraction = canvasSize / 2000;

            for (let i = 0; i < starsFraction; i++) {
                //Set up random elements
                let xPos = random(2, canvas.width - 2);
                let yPos = random(2, canvas.height - 2);
                let alpha = random(0.5, 1);
                let size = random(0.25, 0.25);

                ctx.fillStyle = '#ffffff';
                ctx.globalAlpha = alpha;
                ctx.fillRect(xPos, yPos, size, size);
            }
        }

        //Add the stars
        stars();
    }, []);

    const slideUp = {
        initial: {
            y: '100%',
        },
        open: (i) => ({
            y: '0%',
            transition: { duration: 1, delay: 0.035 * i },
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
            transition: { duration: 0.5 },
        },
        closed: {
            opacity: 0,
            transition: { duration: 0.5 },
        },
    };

    const description = useRef(null);
    const isInView = useInView(description);
    const phrase =
        ' — an ambitious, open minded, creative Junior Web Developer from Wrocław, Poland';

    return (
        <motion.section
            style={{ backgroundImage }}
            className='introduction--section'
        >
            <div className='introduction-wrapper'>
                <h2>
                    Hey, <br /> I’m Hubert
                </h2>

                <div className='description'>
                    <div className='body'>
                        <p ref={description}>
                            {phrase.split(' ').map((word, index) => {
                                return (
                                    <span className='mask'>
                                        <motion.span
                                            variants={slideUp}
                                            custom={index}
                                            animate={
                                                isInView ? 'open' : 'closed'
                                            }
                                            key={index}
                                        >
                                            {word}
                                        </motion.span>
                                    </span>
                                );
                            })}
                        </p>
                    </div>
                </div>

                {/* <p className='introduction__description'>
                    — an ambitious, open minded, creative Junior Web Developer
                    from Wrocław, Poland
                </p> */}
            </div>

            <div className='scroll-Suggestion'>
                <BsMouse3 className='icon' />
            </div>

            <canvas class='stars'></canvas>
        </motion.section>
    );
}

export default Introduction;
