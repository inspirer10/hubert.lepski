import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

function AboutParallax() {
    const canvasRef = useRef(null);
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

    //stars canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            drawStars(); // Ponowne rysowanie gwiazd po zmianie rozmiaru
        }

        let debounceTimer;
        const handleResize = () => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(resizeCanvas, 200);
        };

        window.addEventListener('resize', handleResize);

        function random(min, max) {
            return min + Math.random() * (max + 1 - min);
        }

        const starsArray = [];
        function createStars() {
            const canvasSize = canvas.width * canvas.height;
            const starsFraction = canvasSize / 1500;
            for (let i = 0; i < starsFraction; i++) {
                starsArray.push({
                    x: random(2, canvas.width - 2),
                    y: random(2, canvas.height - 2),
                    alpha: random(0.5, 1),
                    size: random(0.25, 0.25),
                });
            }
        }

        function drawStars() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#FFF';
            starsArray.forEach((star) => {
                ctx.globalAlpha = star.alpha;
                ctx.fillRect(star.x, star.y, star.size, star.size);
            });
        }

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        //Add the stars
        resizeCanvas();
        createStars();
        drawStars();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
                <canvas ref={canvasRef} className='stars'></canvas>
            </div>
        </section>
    );
}

export default AboutParallax;
