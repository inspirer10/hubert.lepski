import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BsMouse3 } from 'react-icons/bs';

function Introduction() {
    useEffect(() => {
        const canvas = document.getElementById('animated-background');
        const ctx = canvas.getContext('2d');

        // Ustawienia canvas
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const colors = [
            'rgba(255, 0, 255, 1)',
            '#ff00e1',
            'rgba(0, 255, 255, 1)',
            '#3300ff',
            'rgba(0,0,255, 1)',
            '#1100ff',
        ];

        const gradients = [];

        function createGradients() {
            for (let i = 0; i < 6; i++) {
                const gradient = {
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: (Math.random() * canvas.width) / 2,
                    color: colors[i],
                    speedX: Math.random() * 2 - 1, // Prędkość pozioma
                    speedY: Math.random() * 2 - 1, // Prędkość pionowa
                };
                gradients.push(gradient);
            }
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            gradients.forEach((gradient) => {
                const radialGradient = ctx.createRadialGradient(
                    gradient.x,
                    gradient.y,
                    0,
                    gradient.x,
                    gradient.y,
                    gradient.radius
                );

                radialGradient.addColorStop(0, gradient.color);
                radialGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

                ctx.fillStyle = radialGradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                // Aktualizacja pozycji dla animacji ruchu
                gradient.x += gradient.speedX;
                gradient.y += gradient.speedY;

                // Odbijanie się od krawędzi
                if (gradient.x <= 0 || gradient.x >= canvas.width)
                    gradient.speedX *= -1;
                if (gradient.y <= 0 || gradient.y >= canvas.height)
                    gradient.speedY *= -1;
            });

            requestAnimationFrame(draw);
        }

        createGradients();
        draw();

        // Obsługa zmiany rozmiaru okna
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        window.addEventListener('resize', resizeCanvas);

        // Czyszczenie efektu po demontażu komponentu
        return () => window.removeEventListener('resize', resizeCanvas);
    }, []);

    return (
        <motion.section className='introduction--section'>
            <div id='bg-wrap'>
                <canvas id='animated-background'></canvas>
            </div>

            <div className='introduction-wrapper'>
                <h2>
                    Hey, <br /> I’m Hubert
                </h2>

                <div className='introduction__description'>
                    <p>— an open minded, creative, ambitious</p>
                    <div class='container'>
                        <div class='roles'>
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
                </div>
            </div>
            <div className='scroll-Suggestion'>
                <BsMouse3 className='icon' />
            </div>
        </motion.section>
    );
}

export default Introduction;
