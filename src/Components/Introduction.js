import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BsMouse3 } from 'react-icons/bs';

function Introduction() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start'],
    });

    const scrollParalax = useTransform(scrollYProgress, [0, 1], [200, -200]);
    const scrollParalaxSlow = useTransform(scrollYProgress, [0, 1], [75, -75]);

    const canvasRef = useRef(null);
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
        <motion.section className='introduction--section'>
            <canvas ref={canvasRef} className='stars'></canvas>

            <div className='gradients-wrapper'>
                <div className='gradient gradient-dark'></div>
                <div className='gradient gradient-light'></div>
                <div className='gradient gradient-left'></div>
            </div>

            <div className='introduction-wrapper' ref={container}>
                <motion.h2 style={{ y: scrollParalax }}>
                    Hey, <br /> I’m Hubert
                </motion.h2>

                <motion.div
                    className='introduction__description'
                    style={{ y: scrollParalaxSlow }}
                >
                    <p>— an open minded, creative, ambitious</p>
                    <div className='container'>
                        <div className='roles'>
                            <p>
                                <span className='static-text'>Junior</span> Web
                                Developer
                            </p>
                            <p>
                                <span className='static-text'>Junior</span>
                                Frontend Developer
                            </p>
                            <p>
                                <span className='static-text'>Junior</span>
                                React Developer
                            </p>
                            <p>
                                <span className='static-text'>Junior</span>
                                JavaScript Developer
                            </p>
                        </div>
                    </div>
                    <p>from Wrocław, Poland</p>
                </motion.div>
            </div>
            <div className='scroll-Suggestion'>
                <BsMouse3 className='icon' />
            </div>
        </motion.section>
    );
}

export default Introduction;
